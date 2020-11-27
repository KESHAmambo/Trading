import { processColor, Text, View } from "react-native";
import { ColorValue, ProcessedColorValue } from "react-native-charts-wrapper/node_modules/@types/react-native";
import React, { useState } from "react";
import { LineChart, LineValue } from "react-native-charts-wrapper";
import { IChartData } from "./types";
import { Color } from "../../../enum/styles/Color";
import { BackgroundColor } from "../../../enum/styles/BackgroundColor";

interface IProps {
  chartData: IChartData
}

const getDateFromDays = (days: number) => {
  const dayDurationInMilliseconds = 1000*3600*24;
  let date = new Date();
  date.setTime(days * dayDurationInMilliseconds);

  return date.toDateString();
}

const FuncComponent = (props: IProps) => {

  const {
    chartData
  } = props;

  const [isChartPressed, setIsChartPressed] = useState<boolean>(false);
  const [selectedPoint, setSelectedPoint] = useState<LineValue | null>(null);

  return (
    <View
      style={{
        flex: 0.5,
        left: -10,
      }}
      onStartShouldSetResponder={(event) => true}
      onMoveShouldSetResponder={(event) => true}
      onResponderRelease={(event) => {
        setIsChartPressed(false);
        setSelectedPoint(null);
      }}
    >
      <LineChart
        style={{
          flex: 1
        }}
        chartDescription={{text: ''}}
        data={{
          dataSets: [{
            label: "currency",
            values: chartData,
            config: {
              color: processColorWrapper(Color.BLUE),
              mode: 'CUBIC_BEZIER',
              drawCircles: false,
              drawValues: false,
              drawHighlightIndicators: isChartPressed,
              highlightColor: processColorWrapper(Color.BLUE),
              drawFilled: true,
              fillGradient: {
                colors: [processColorWrapper(Color.BLUE), processColorWrapper(Color.TRANSPARENT)],
                orientation: 'TOP_BOTTOM'
              },
              fillAlpha: 80,
              lineWidth: 2
            }
          }]
        }}
        drawBorders={false}
        legend={{enabled: false}}
        autoScaleMinMaxEnabled={true}
        yAxis={{
          left: {
            enabled: false
          },
          right: {
            labelCount: 5,
            drawGridLines: true,
            gridColor: processColorWrapper(Color.DARK_VIOLET),
            drawAxisLines: false,
            axisLineColor: processColorWrapper(Color.TRANSPARENT),
            drawLabels: true,
            textSize: 14,
            textColor: processColorWrapper(Color.BRIGHT_VIOLET2),
            gridDashedLine: {
              lineLength: 15,
              spaceLength: 10,
            }
          }
        }}
        xAxis={{
          timeUnit: "DAYS",
          valueFormatter: "date",
          valueFormatterPattern: "YYYY-MM-dd",
          labelCount: 4,
          position: "BOTTOM",
          drawGridLines: true,
          gridColor: processColorWrapper(Color.DARK_VIOLET),
          drawAxisLines: false,
          axisLineColor: processColorWrapper(Color.TRANSPARENT),
          textColor: processColorWrapper(Color.BRIGHT_VIOLET2),
          textSize: 14,
          gridDashedLine: {
            lineLength: 15,
            spaceLength: 10,
          }
        }}
        marker={{
          enabled: false,
        }}

        onSelect={(event) => {
          if (event.nativeEvent !== null) {
            setIsChartPressed(true);
            setSelectedPoint({
              x: event.nativeEvent.x,
              y: event.nativeEvent.y
            })
          }
        }}
      />
      <View style={{
        backgroundColor: BackgroundColor.SEARCHING_FIELD,
        position: "absolute",
        top: 290,
        left: 15
      }}>
        <Text>
          {selectedPoint?.x ? getDateFromDays(selectedPoint.x) : ''}
        </Text>
      </View>
      <View style={{
        backgroundColor: BackgroundColor.SEARCHING_FIELD,
        position: "absolute",
        top: 290,
        left: 350
      }}>
        <Text>
          {selectedPoint?.y ? selectedPoint.y.toPrecision(5) : ''}
        </Text>
      </View>
    </View>
  );
}

export const PairChart = React.memo(FuncComponent)

//@ts-ignore
const processColorWrapper: (color?: number | ColorValue) => ProcessedColorValue | null | undefined = (color) => {
  //@ts-ignore
  return processColor(color)
}

import {
  Dimensions,
  GestureResponderEvent,
  LayoutChangeEvent,
  LayoutRectangle,
  Text,
  View
} from "react-native";

import React, { useState } from "react";
import { Axis, ChartSelectEvent, LineChart, LineValue } from "react-native-charts-wrapper";
import { IChartData } from "./types";
import { Color } from "../../../enum/styles/Color";
import { styles } from "./styles";
import { DateLabel } from "../../../enum/styles/ChartLabels";
import { IMaxMinFunction } from "../../types";
import { DAY_DURATION_IN_MILLISECONDS, processColorWrapper } from "../../../utilites/utilites";

interface IProps {
  chartData: IChartData
}

const getDateFromDays = (days: number) => {
  let date = new Date();
  date.setTime(days * DAY_DURATION_IN_MILLISECONDS);

  return date.toLocaleDateString();
}

const getMaxMinOfArray = (numArray: number[], maxMinFunction: IMaxMinFunction) => {
  return maxMinFunction.apply(null, numArray);
}

const axisProps: Axis = {
  drawGridLines: true,
  drawAxisLines: false,
  drawLabels: true,
  gridColor: processColorWrapper(Color.DARK_VIOLET),
  axisLineColor: processColorWrapper(Color.TRANSPARENT),
  textSize: 12,
  textColor: processColorWrapper(Color.BRIGHT_VIOLET2),
  gridDashedLine: {
    lineLength: 15,
    spaceLength: 10,
  }
}

const onStartShouldSetResponder = (event: GestureResponderEvent) => true;
const onMoveShouldSetResponder = (event: GestureResponderEvent) => true;


const FuncComponent = (props: IProps) => {

  const {
    chartData
  } = props;

  const [isChartPressed, setIsChartPressed] = useState<boolean>(false);
  const [selectedPoint, setSelectedPoint] = useState<LineValue | null>(null);
  const [isPointSelected, setIsPointSelected] = useState<boolean>(false);
  const [dateLabelLeftPosition, setDateLabelXPosition] = useState<number>(0);
  const [chartLayout, setChartLayout] = useState<LayoutRectangle | null>(null);

  const chartValues = chartData.map((point) => point.y);
  const maxValue = getMaxMinOfArray(chartValues, Math.max);
  const minValue = getMaxMinOfArray(chartValues, Math.min);

  //Опытным путем было получено, что график занимает 75% от области рисования по высоте
  const distanceFromMinToMaxValue = chartLayout ? 0.75 * chartLayout.height : 0;
  const distanceFromMinToSelectedValue = selectedPoint?.y ? (selectedPoint.y - minValue) / (maxValue - minValue) * distanceFromMinToMaxValue : 0;
  const bottomChartOffset = chartLayout ? 0.08 * chartLayout.height : 0;
  const valueLabelBottomPosition = distanceFromMinToSelectedValue + bottomChartOffset;

  const dateLabelText = selectedPoint?.x ? getDateFromDays(selectedPoint.x) : '';
  const valueLabelText = selectedPoint?.y ? selectedPoint.y.toPrecision(4) : '';

  const onChartLayout = (event: LayoutChangeEvent) => {
    setChartLayout(event.nativeEvent.layout)
  }

  const onPointSelect = (event: ChartSelectEvent) => {
    if (event.nativeEvent !== null) {
      setIsChartPressed(true);
      setIsPointSelected(true);
      setSelectedPoint({
        x: event.nativeEvent.x,
        y: event.nativeEvent.y
      });
    }
  }

  const handleChartTouch = (event: GestureResponderEvent) => {
    if (isPointSelected) {
      let xPos = event.nativeEvent.locationX - (DateLabel.WIDTH / 2);
      if (xPos < 15) {
        xPos = 15
      } else if (xPos + DateLabel.WIDTH > Dimensions.get("window").width) {
        xPos = Dimensions.get("window").width - DateLabel.WIDTH
      }
      setDateLabelXPosition(xPos);
      setIsPointSelected(false);
    }
  }

  const handleChartRelease = (event: GestureResponderEvent) => {
    setIsChartPressed(false);
    setSelectedPoint(null);
  }

  return (
    <View
      style={styles.chartContainer}
      onStartShouldSetResponder={onStartShouldSetResponder}
      onMoveShouldSetResponder={onMoveShouldSetResponder}
      onResponderMove={handleChartTouch}
      onResponderRelease={handleChartRelease}
    >
      <LineChart
        style={styles.chart}
        onLayout={onChartLayout}
        onSelect={onPointSelect}
        chartDescription={{text: ''}}
        drawBorders={false}
        autoScaleMinMaxEnabled={true}
        legend={{enabled: false}}
        marker={{enabled: false}}
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
        yAxis={{
          left: {enabled: false},
          right: {
            ...axisProps,
            labelCount: 5,
          }
        }}
        xAxis={{
          ...axisProps,
          timeUnit: "DAYS",
          valueFormatter: "date",
          valueFormatterPattern: "YYYY-MM-dd",
          labelCount: 4,
          position: "BOTTOM",
        }}
      />
      {/*<View style={isChartPressed*/}
      {/*  ? {*/}
      {/*    ...styles.labelContainer,*/}
      {/*    ...styles.dateLabelContainer,*/}
      {/*    left: dateLabelLeftPosition*/}
      {/*  }*/}
      {/*  : styles.emptyContainer*/}
      {/*}>*/}
      <View style={isChartPressed
        ? [
          styles.labelContainer,
          styles.dateLabelContainer,
          {
            left: dateLabelLeftPosition
          }
        ]
        : styles.emptyContainer
      }>
        <Text style={styles.labelText}>
          {dateLabelText}
        </Text>
      </View>
      <View style={isChartPressed
        ? {
          ...styles.labelContainer,
          ...styles.valueLabelContainer,
          bottom: valueLabelBottomPosition
        }
        : styles.emptyContainer
      }>
        <Text style={styles.labelText}>
          {valueLabelText}
        </Text>
      </View>
    </View>
  );
}

export const PairChart = React.memo(FuncComponent)

import React from "react";
import { Dimensions, View } from "react-native";
import { BackgroundColor } from "../../../enum/styles/BackgroundColor";
import LineChart from "react-native-chart-kit/dist/line-chart";
import { styles } from "./styles";

interface IProps {
  chartData: number[],
  chartLabels: string[]
}

const FuncComponent = (props: IProps) => {

  const {
    chartData,
    chartLabels
  } = props

  return (
    <View style={styles.chartContainer}>
      <LineChart
        data={{
          labels: chartLabels,
          datasets: [{
            data: chartData
          }]
        }}
        width={Dimensions.get("window").width} // from react-native
        height={350}
        withDots={false}
        withInnerLines={true}
        withHorizontalLines={true}
        withVerticalLines={false}
        withOuterLines={true}
        withVerticalLabels={true}
        withHorizontalLabels={true}
        transparent={true}
        xLabelsOffset={0}
        chartConfig={{
          backgroundGradientFrom: BackgroundColor.PAIR,
          backgroundGradientTo: BackgroundColor.PAIR,
          color: (opacity = 1) => `rgba(0, 255, 255, ${opacity})`,
        }}
        bezier
        style={{
          position: "absolute",
          top: 0,
          left: -15
        }}
      />
    </View>
  )
}

export const PairChart = React.memo(FuncComponent)

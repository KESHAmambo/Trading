import { ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { PairTitle } from "./PairTitle/PairTitle";
import { styles } from "./styles";
import { createApiURL } from "../../netconfig"
import { useSelector } from "react-redux";
import { IRootStackParamList } from "../types";
import { IChartData } from "./PairChart/types";
import { PairChart } from "./PairChart/PairChart";
import { Screens } from "../../enum/screens/screens";
import { ExchangeWidget } from "./ExchangeWidget/ExchangeWidget";
import { IPairName } from "./types";
import { fetchJSON } from "../../utilites/utilites";
import { currencyPairByIdSelector } from "../../store/features/pairsList/selectors";

type IProps = StackScreenProps<IRootStackParamList, Screens.PAIR_DETAILS>

//Пока эта функция меняет местами валюты только в заголовоке
const getReversedPairName = (pairName: IPairName) => {
  let {
    currencyCode1,
    currencyCode2
  } = pairName;

  return ({
    currencyCode1: currencyCode2,
    currencyCode2: currencyCode1
  })
}

const getReversedChartData = (data: IChartData) => {
  return data.map((chartPoint) => {
    const {y} = chartPoint;

    return ({
      ...chartPoint,
      y: 1 / y
    });
  })
}

export const PairDetailsScreen = (props: IProps) => {

  const {
    route,
    // navigation
  } = props;

  const {
    pairId
  } = route.params;

  const currencyPair = useSelector(currencyPairByIdSelector(pairId))

  //Имя заголовка пары в формате ADA/BTC
  const [pairName, setPairName] = useState({
    currencyCode1: currencyPair ? currencyPair.currencyCode1 : '',
    currencyCode2: currencyPair ? currencyPair.currencyCode2 : ''
  })

  const [chartData, setChartData] = useState<IChartData>([]);
  const [isChartDataRefreshing, setIsChartDataRefreshing] = useState<boolean>(false);

  const currentRatio = chartData.length > 0 ? chartData[chartData.length - 1].y : null

  const fetchChartData = () => {
    setIsChartDataRefreshing(true);
    fetchJSON(createApiURL('/chartData'))
      .then((json) => {
        setChartData(json.chartData as IChartData);
      })
      .catch((error) => {
        console.log('fetch failed: ' + error)
      })
      .finally(() => {
        setIsChartDataRefreshing(false)
      })
  }

  const reversePair = () => {
    if (!isChartDataRefreshing) {
      setPairName(getReversedPairName(pairName));
      setChartData(getReversedChartData(chartData));
    }
  };

  useEffect(() => {
    fetchChartData();
  }, []);

  return (
    <View style={styles.scrollViewWrapper}>
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <View style={styles.titleAndChartContainer}>
          <View style={styles.titleContainer}>
            <PairTitle
              pairName={pairName}
              currentRatio={currentRatio}
              onButtonPress={reversePair}
            />
          </View>

          <View style={styles.chartContainer}>
            <PairChart
              chartData={chartData}
            />
          </View>
        </View>

        <View style={styles.exchangeWidgetContainer}>
          <ExchangeWidget
            pairName={pairName}
            currentRatio={currentRatio}
          />
        </View>
      </ScrollView>
    </View>
  )
}

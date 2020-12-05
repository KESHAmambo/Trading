import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { PairTitle } from "./PairTitle/PairTitle";
import { styles } from "./styles";
import { createApiURL } from "../../netconfig"
import { IRootState } from "../../store/types";
import { useSelector } from "react-redux";
import { ICurrencyPair } from "../home_screen/CurrencyPair/types";
import { IPairName } from "./PairTitle/types";
import { IRootStackParamList } from "../types";
import { IChartData } from "./PairChart/types";
import { PairChart } from "./PairChart/PairChart";
import { Screens } from "../../enum/screens/screens";

type IProps = StackScreenProps<IRootStackParamList, Screens.PAIR_DETAILS>

const selectCurrencyPairById = (state: IRootState, pairId: string): ICurrencyPair => {
  return state.pairs.pairs.filter((pair) => pair.id === pairId)[0]
}

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

  const currencyPair = useSelector((state: IRootState) => selectCurrencyPairById(state, pairId))

  //Имя заголовка пары в формате ADA/BTC
  const [pairName, setPairName] = useState({
    currencyCode1: currencyPair.currencyCode1,
    currencyCode2: currencyPair.currencyCode2
  })

  const [chartData, setChartData] = useState<IChartData>([]);
  const [isChartDataRefreshing, setIsChartDataRefreshing] = useState<boolean>(false);

  const currentValue = chartData.length > 0 ? chartData[chartData.length-1].y : null

  const fetchChartData = () => {
    setIsChartDataRefreshing(true);
    fetch(createApiURL('/chartData'))
      .then((response) => (response.json()))
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

  }, []);

  useEffect(() => {
    fetchChartData();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <PairTitle
        pairName={pairName}
        currentValue={currentValue}
        onButtonPress={reversePair}
      />
      <PairChart
        chartData={chartData}
      />

    </View>
  )
}

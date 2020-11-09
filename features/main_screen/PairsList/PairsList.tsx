import React, { useEffect } from "react";
import { FlatList, ListRenderItem } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { CurrencyPair } from "../CurrencyPair/CurrencyPair";
import { ICurrencyPair } from "../../../redux_store/types";
import { fetchCurrencyPairs, selectStatus } from "./pairsListSlice";

interface IProps {
  currencyPairs: ICurrencyPair[],
  // isRefreshing: boolean,
  // onRefresh: () => void
}

const keyExtractor = (item: ICurrencyPair) => item.id;

const renderItem: ListRenderItem<ICurrencyPair> = (info) => {
  const {item} = info;

  return (
    <CurrencyPair
      pair={item}
    />
  );
};

// const onRefresh = dispatch(fetchCurrencyPairs());

const FuncComponent = (props: IProps) => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectStatus)

  const {
    currencyPairs,
    // isRefreshing,
    // onRefresh
  } = props;

  useEffect(() => {
    if (!isRefreshing) {
      dispatch(fetchCurrencyPairs())
    }
  }, [])    //deps from guide: [isRefreshing, dispatch]

  const onRefresh = () => {
    if (!isRefreshing) dispatch(fetchCurrencyPairs())
  }

  return (
    <FlatList
      data={currencyPairs}
      renderItem={renderItem}
      refreshing={isRefreshing}
      onRefresh={onRefresh}
      keyExtractor={keyExtractor}

      //Эти пропсы я взял из гайда по оптимизации FlatList
      removeClippedSubviews={true}
      initialNumToRender={10}
    />
  );
}

export const PairsList = React.memo(FuncComponent)

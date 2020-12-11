import React, { useEffect } from "react";
import { FlatList, ListRenderItem } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { CurrencyPair } from "../CurrencyPair/CurrencyPair";
import { ICurrencyPair } from "../CurrencyPair/types";
import { isCurrencyPairsListRefreshingSelector } from "../../../store/features/pairsList/selectors";
import { fetchCurrencyPairs } from "../../../store/features/pairsList/thunks";

interface IProps {
  currencyPairs: ICurrencyPair[]
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

const FuncComponent = (props: IProps) => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(isCurrencyPairsListRefreshingSelector)

  const {
    currencyPairs
  } = props;

  useEffect(() => {
    dispatch(fetchCurrencyPairs())
  }, [])

  const onRefresh = () => {
    if (!isRefreshing) {
      dispatch(fetchCurrencyPairs())
    }
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

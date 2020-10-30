import React from "react";
import { FlatList, ListRenderItem } from "react-native";

import { CurrencyPair } from "../CurrencyPair/CurrencyPair";
import { ICurrencyPair } from "../../../types";

interface IProps {
  currencyPairs: Array<ICurrencyPair>,
  isRefreshing: boolean,
  onRefresh: () => void
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

  const {
    currencyPairs,
    isRefreshing,
    onRefresh
  } = props;

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

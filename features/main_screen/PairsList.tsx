import React from "react";
import {FlatList, ListRenderItem} from "react-native";

import CurrencyPair from "./CurrencyPair/CurrencyPair";

export interface ICurrencyPair {
  id: string
  title: string,
  ratio: number
}

interface IProps {
  currencyPairs: Array<ICurrencyPair>
}

const FuncComponent = (props: IProps) => {

  const {
    currencyPairs
  } = props;

  const renderItem: ListRenderItem<ICurrencyPair> = (info) => {
    const { item } = info;
    return (
      <CurrencyPair
        pair={item}
      />
    );
  };

  return (
    <FlatList
      data={currencyPairs}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}

export const PairsList = React.memo(FuncComponent)
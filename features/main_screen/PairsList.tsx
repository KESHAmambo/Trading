import React from "react";
import {FlatList, ListRenderItem} from "react-native";

import CurrencyPair from "./CurrencyPair/CurrencyPair";
import { ICurrencyPair } from "../../types";

interface IProps {
  currencyPairs: Array<ICurrencyPair>
}

const keyExtractor = (item: ICurrencyPair) => item.id;

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
      keyExtractor={keyExtractor}
    />
  );
}

export const PairsList = React.memo(FuncComponent)
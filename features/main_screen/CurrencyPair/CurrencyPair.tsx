import React from "react";
import { View, Text} from "react-native";
import { styles } from "./style";
import { ICurrencyPair } from "../../../types";

interface IProps {
  pair: ICurrencyPair
}

const CurrencyPair = (props: IProps) => {
  const {
    pair
  } = props;
  const {
    title,
    ratio
  } = pair;

  return (
    <View
      style={[
        styles.sectionPair
    ]}>
      <Text style={styles.pairName}>{title}</Text>
      <Text style={styles.pairRatio}>{ratio}</Text>
    </View>
  );
};

export default CurrencyPair;
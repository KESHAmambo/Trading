import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./style";
import { ICurrencyPair } from "../../../types";

interface IProps {
  pair: ICurrencyPair
}

const FuncComponent = (props: IProps) => {
  const {
    pair
  } = props;

  const {
    icon1,
    icon2,
    title,
    currency1,
    currency2,
    ratio,
    change,
    sign,
  } = pair;

  return (
    <View
      style={[
        styles.pairContainer
      ]}>

      <View style={styles.iconsContainer}>
        <Image
          source={{uri: icon1}}
          style={[
            styles.icon,
            styles.position1
          ]}
        />
        <Image
          source={{uri: icon2}}
          style={[
            styles.icon,
            styles.position2
          ]}
        />
      </View>

      <View style={styles.pairNameContainer}>

        <Text style={styles.pairName}>
          {title}
        </Text>

        <Text style={styles.pairFullName}>
          {currency1 + ', ' + currency2}
        </Text>

      </View>

      <View style={styles.pairChangeAndRatioContainer}>

        <Text style={styles.pairRatio}>
          {ratio}
        </Text>

        <View style={[
          styles.pairChangeContainer,
          (sign === '+') ? styles.backgroundGreen : styles.backgroundRed
        ]}>

          <Text style={styles.pairChange}>
            {sign + change + '%'}
          </Text>

        </View>

      </View>
    </View>
  );
};

export const CurrencyPair = React.memo(FuncComponent);
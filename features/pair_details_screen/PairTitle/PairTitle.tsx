import React from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { styles } from "./styles";
import { staticSourcesPath } from "../../../netconfig";
import { SvgUri } from "react-native-svg";
import { BackgroundColor } from "../../../enum/styles/BackgroundColor";
import { IPairName } from "../types";

interface IProps {
  pairName: IPairName,
  currentRatio: number | null,
  onButtonPress: () => void
}

const getCurrencyIconPath = (currencyCode: string) => {
  return staticSourcesPath + '/icons/currencies/' + currencyCode + '.svg';
}

const FuncComponent = (props: IProps) => {

  const {
    pairName,
    currentRatio,
    onButtonPress
  } = props;

  const {
    currencyCode1,
    currencyCode2
  } = pairName;

  const currencyIcon1 = getCurrencyIconPath(currencyCode1.toLowerCase());
  const currencyIcon2 = getCurrencyIconPath(currencyCode2.toLowerCase());
  const reverseButton = staticSourcesPath + '/icons/buttons/exchange.svg';

  return (
    <View style={styles.mainContainer}>
      <View style={styles.pairIconsContainer}>
        <SvgUri
          uri={currencyIcon1}
          style={[
            styles.currencyIcon,
            styles.currencyIcon1
          ]}
        />
        <SvgUri
          uri={currencyIcon2}
          style={[
            styles.currencyIcon,
            styles.currencyIcon2
          ]}
        />
      </View>

      <View style={styles.pairNameAndValueContainer}>
        <Text style={styles.pairName}>
          {pairName.currencyCode1 + '/' + pairName.currencyCode2}
        </Text>

        <Text style={styles.currentValue}>
          {currentRatio?.toPrecision(5)}
        </Text>
      </View>

      <TouchableHighlight
        style={styles.reverseButtonTouchable}
        underlayColor={BackgroundColor.LABEL}
        onPress={onButtonPress}
      >
        <SvgUri
          style={styles.reverseButton}
          uri={reverseButton}
        />
      </TouchableHighlight>
    </View>
  )
}

export const PairTitle = React.memo(FuncComponent)

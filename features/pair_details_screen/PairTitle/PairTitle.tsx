import React from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { styles } from "./styles";
import { staticSourcesPath } from "../../../netconfig";
import { SvgUri } from "react-native-svg";
import { BackgroundColor } from "../../../enum/styles/BackgroundColor";
import { IPairName } from "../types";

interface IProps {
  pairName: IPairName,
  currentValue: number | null,
  onButtonPress: () => void
}

const FuncComponent = (props: IProps) => {

  const {
    pairName,
    currentValue,
    onButtonPress
  } = props;

  const currencyIcon1 = staticSourcesPath + '/icons/currencies/' + pairName.currencyCode1.toLowerCase() + '.svg';
  const currencyIcon2 = staticSourcesPath + '/icons/currencies/' + pairName.currencyCode2.toLowerCase() + '.svg';
  const reverseButton = staticSourcesPath + '/icons/buttons/exchange.svg';

  return (
    <View style={styles.titleContainer}>
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
          {currentValue?.toPrecision(5)}
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

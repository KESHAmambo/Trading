import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { IWallet } from "./types";
import { SvgUri } from "react-native-svg";

interface IProps {
  wallet: IWallet
}

const FuncComponent = (props: IProps) => {

  const {
    wallet
  } = props;

  const {
    icon,
    code,
    name,
    volume
  } = wallet;

  const volumeDisplayed = volume ? volume.toFixed(8) : 0;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.iconAndNameContainer}>
        <SvgUri
          style={styles.icon}
          uri={icon}
        />

        <Text style={styles.currencyCode}>{code}</Text>

        <Text style={styles.currencyName}>{name}</Text>
      </View>

      <View style={styles.amountContainer}>
        <Text style={styles.amount}>{volumeDisplayed}</Text>
      </View>
    </View>

  )
}

export const Wallet = React.memo(FuncComponent)

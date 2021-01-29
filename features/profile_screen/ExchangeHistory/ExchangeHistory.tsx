import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

interface IProps {

}

const FuncComponent = (props: IProps) => {


  return (
    <View style={styles.mainContainer}>
      <Text style={styles.header}>{'Exchange history:'}</Text>
    </View>
  )
}

export const ExchangeHistory = React.memo(FuncComponent)

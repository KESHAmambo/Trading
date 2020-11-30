import React from "react";
import { Button, Text, View } from "react-native";
import { IPairName } from "./types";
import { styles } from "./styles";

interface IProps {
  pairName: IPairName,
  onButtonPress: () => void
}

const FuncComponent = (props: IProps) => {

  const {
    pairName,
    onButtonPress
  } = props;

  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>
        {pairName.currencyCode1 + '/' + pairName.currencyCode2}
      </Text>
      <Button title={'reverse'} onPress={onButtonPress}/>
    </View>
  )
}

export const PairTitle = React.memo(FuncComponent)

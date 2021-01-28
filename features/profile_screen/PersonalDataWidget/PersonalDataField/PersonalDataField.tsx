import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

interface IProps {
  description: string,
  fieldValue: string
}

const FuncComponent = (props: IProps) => {

  const {
    description,
    fieldValue
  } = props;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          {description}
        </Text>
      </View>
      <View style={styles.inputValueContainer}>
        <Text style={styles.inputValue}>
          {fieldValue}
        </Text>
      </View>
    </View>
  )
}

export const PersonalDataField = React.memo(FuncComponent)

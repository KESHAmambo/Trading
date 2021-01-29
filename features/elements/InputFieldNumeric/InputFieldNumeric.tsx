import React from "react";
import { TextInput, View } from "react-native";
import { styles } from "./styles";
import { Color } from "../../../enum/styles/Color";

interface IProps {
  onChangeText?: (text: string) => void;
  value?: string;
  editable?: boolean;
  placeholder?: string;
}

const FuncComponent = (props: IProps) => {

  const {
    onChangeText,
    value,
    editable,
    placeholder
  } = props;

  return (
    <View style={styles.inputFieldContainer}>
      <TextInput
        style={styles.inputField}
        onChangeText={onChangeText}
        value={value}
        editable={editable}
        keyboardType={'numeric'}
        placeholder={placeholder}
        placeholderTextColor={Color.BRIGHT_VIOLET}
      />
    </View>
  )
}

export const InputFieldNumeric = React.memo(FuncComponent)

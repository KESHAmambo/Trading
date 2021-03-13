import React from "react";
import { ColorValue, StyleProp, TextInput, TextStyle, View, ViewStyle } from "react-native";
import { styles } from "./styles";
import { Color } from "../../../enum/styles/Color";

interface IProps {
  viewStyle?: StyleProp<ViewStyle>,
  textStyle?: StyleProp<TextStyle>,
  onChangeText?: (text: string) => void,
  value?: string,
  editable?: boolean,
  placeholder?: string,
  placeholderTextColor?: ColorValue
}

const FuncComponent = (props: IProps) => {

  const {
    viewStyle,
    textStyle,
    onChangeText,
    value,
    editable,
    placeholder,
    placeholderTextColor
  } = props;

  return (
    <View style={[styles.inputFieldContainer, viewStyle]}>
      <TextInput
        style={[styles.inputField, textStyle]}
        onChangeText={onChangeText}
        value={value}
        editable={editable}
        keyboardType={'numeric'}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor ? placeholderTextColor : Color.BRIGHT_VIOLET}
      />
    </View>
  )
}

export const InputFieldNumeric = React.memo(FuncComponent)

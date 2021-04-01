import React from "react";
import { Animated, StyleProp, Text, ViewStyle } from "react-native";
import { styles } from "./styles";

interface IProps {
  text: string,
  style?: StyleProp<ViewStyle> | Animated.AnimatedProps<ViewStyle>,
}

const FuncComponent = (props: IProps) => {

  const {
    text,
    style
  } = props;

  return (
    <Animated.View style={[styles.mainContainer, style]}>
      <Text style={styles.news}>
        {text}
      </Text>
    </Animated.View>
  )
}

export const NewsHeaderItem = React.memo(FuncComponent)

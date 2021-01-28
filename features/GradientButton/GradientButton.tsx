import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { Color } from "../../enum/styles/Color";
import LinearGradient from "react-native-linear-gradient";
import React from "react";

interface IProps {
  isProcessing: boolean,
  isDisabled: boolean,
  onPress: () => void,
  text: string
}

const FuncComponent = (props: IProps) => {

  const {
    isProcessing,
    isDisabled,
    onPress,
    text
  } = props;

  return (
    isProcessing
      ?
      <View style={[styles.buttonContainer, styles.activityIndicatorContainer]}>
        <ActivityIndicator
          size={"large"}
          color={Color.BLUE}/>
      </View>
      :
      <LinearGradient
        style={styles.buttonContainer}
        colors={[Color.GRADIENT_PURPLE, Color.GRADIENT_BLUE, Color.GRADIENT_LIGHT_BLUE]}
        start={{x: 0.2, y: 1}}
        end={{x: 0.8, y: 0}}
      >
        <Pressable
          style={styles.buttonDimensions}
          onPress={onPress}
          disabled={isDisabled}
          android_ripple={{color: ''}}
        >
          <Text style={styles.buttonText}>
            {text}
          </Text>
        </Pressable>
      </LinearGradient>
  )
}

export const GradientButton = React.memo(FuncComponent)

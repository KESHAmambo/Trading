import { Image, ImageStyle, StyleProp } from "react-native";
import React from "react";
import { styles } from "./styles";

interface IProps {
  style?: StyleProp<ImageStyle>
}

export const SortingIconInactive = React.memo(
  (props: IProps) => (
    <Image
      style={[styles.sortingIcon, props.style]}
      source={require('../../../icons/sort-inactive.png')}
    />
  )
)

export const SortingIconMaxToMin = React.memo(
  (props: IProps) => (
    <Image
      style={[styles.sortingIcon, props.style]}
      source={require('../../../icons/sort-max-min.png')}
    />
  )
)

export const SortingIconMinToMax = React.memo(
  (props: IProps) => (
    <Image
      style={[styles.sortingIcon, props.style]}
      source={require('../../../icons/sort-min-max.png')}
    />
  )
)

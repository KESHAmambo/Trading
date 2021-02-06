import { BackgroundColor } from "../../../enum/styles/BackgroundColor";
import { View } from "react-native";
import { styles } from "./styles";
import React from "react";
import SkeletonPlaceholder from "react-native-skeleton-placeholder/lib/SkeletonPlaceholder";

interface IProps {

}

const FuncComponent = (props: IProps) => {

  return (
    <SkeletonPlaceholder
      speed={1200}
      backgroundColor={BackgroundColor.INPUT_FIELD_DISABLED}
      highlightColor={BackgroundColor.INPUT_FIELD}
    >
      <View style={styles.placeholderContainer}>
        <View style={[styles.placeholder, styles.placeholder1]}/>
        <View style={[styles.placeholder, styles.placeholder2]}/>
        <View style={[styles.placeholder, styles.placeholder3]}/>
        <View style={[styles.placeholder, styles.placeholder4]}/>
        <View style={[styles.placeholder, styles.placeholder5]}/>
        <View style={[styles.placeholder, styles.placeholder6]}/>
      </View>
    </SkeletonPlaceholder>
  )
}

export const NewsPlaceholder = React.memo(FuncComponent)

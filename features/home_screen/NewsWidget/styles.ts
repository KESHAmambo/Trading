import { StyleSheet } from "react-native";
import { FlexDirection } from "../../../enum/styles/FlexDirection";
import { Overflow } from "../../../enum/styles/Overflow";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: FlexDirection.COLUMN,
    overflow: Overflow.HIDDEN,
  }
})

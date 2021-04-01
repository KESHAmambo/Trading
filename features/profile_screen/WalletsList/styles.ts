import { StyleSheet } from "react-native";
import { FlexDirection } from "../../../enum/styles/FlexDirection";
import { BorderColor } from "../../../enum/styles/BorderColor";

export const styles = StyleSheet.create({
  mainContainerWrapper: {
    paddingHorizontal: 15
  },

  mainContainer: {
    flex: 1,
    flexDirection: FlexDirection.COLUMN,
    borderBottomWidth: 1,
    borderColor: BorderColor.ICON,
    paddingVertical: 8
  }
})

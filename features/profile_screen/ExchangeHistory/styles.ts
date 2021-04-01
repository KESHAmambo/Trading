import { StyleSheet } from "react-native";
import { FlexDirection } from "../../../enum/styles/FlexDirection";
import { Color } from "../../../enum/styles/Color";
import { JustifyContent } from "../../../enum/styles/JustifyContent";
import { AlignItems } from "../../../enum/styles/AlignItems";
import { BorderColor } from "../../../enum/styles/BorderColor";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: FlexDirection.COLUMN,
    marginTop: 10,
    marginHorizontal: 10
  },

  brightText: {
    fontSize: 12,
    color: Color.WHITE
  },

  darkText: {
    fontSize: 12,
    color: Color.BRIGHT_VIOLET2
  },

  historyContainer: {
    flexDirection: FlexDirection.COLUMN,
    justifyContent: JustifyContent.FLEX_START,
    alignItems: AlignItems.STRETCH
  },

  transactionContainer: {
    flexDirection: FlexDirection.COLUMN,
    justifyContent: JustifyContent.SPACE_BETWEEN,
    marginTop: 5,
    paddingTop: 5,
    borderTopColor: BorderColor.ICON,
    borderTopWidth: 1
  },

  transactionHeaderContainer: {
    flexDirection: FlexDirection.ROW,
    justifyContent: JustifyContent.SPACE_BETWEEN
  },

  transactionBody: {
    flexDirection: FlexDirection.ROW,
    justifyContent: JustifyContent.SPACE_BETWEEN
  },

  transactionBodyLeft: {
    flexDirection: FlexDirection.COLUMN,
    alignItems: AlignItems.FLEX_START
  },

  transactionBodyRight: {
    flexDirection: FlexDirection.COLUMN,
    alignItems: AlignItems.FLEX_END
  },

  placeholderContainer: {
    marginTop: 5,
    height: 20,
    borderRadius: 5
  }
})

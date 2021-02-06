import { StyleSheet } from "react-native";
import { FlexDirection } from "../../../enum/styles/FlexDirection";
import { JustifyContent } from "../../../enum/styles/JustifyContent";
import { AlignItems } from "../../../enum/styles/AlignItems";
import { Color } from "../../../enum/styles/Color";
import { Height } from "../../../enum/styles/Height";

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: FlexDirection.ROW,
    justifyContent: JustifyContent.FLEX_END,
    alignItems: AlignItems.CENTER,
    paddingHorizontal: 10,
    paddingVertical: 5
  },

  walletContainer: {
    flex: 0.9,
    flexDirection: FlexDirection.COLUMN,
    justifyContent: JustifyContent.SPACE_EVENLY,
    alignItems: AlignItems.FLEX_START
  },

  wallet: {
    color: Color.BRIGHT_VIOLET,
    fontSize: 14
  },

  avatar: {
    height: Height.TOOLBAR - 10,
    width: Height.TOOLBAR - 10,
    borderRadius: (Height.TOOLBAR - 10) / 2,
    borderWidth: 2
  }
})

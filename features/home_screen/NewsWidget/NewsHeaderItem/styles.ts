import { StyleSheet } from "react-native";
import { JustifyContent } from "../../../../enum/styles/JustifyContent";
import { AlignItems } from "../../../../enum/styles/AlignItems";
import { Height } from "../../../../enum/styles/Height";
import { Color } from "../../../../enum/styles/Color";

export const styles = StyleSheet.create({
  mainContainer: {
    position: "relative",
    paddingHorizontal: 10,
    justifyContent: JustifyContent.CENTER,
    alignItems: AlignItems.FLEX_START,
    height: Height.TOOLBAR
  },

  news: {
    color: Color.WHITE,
    fontSize: 12
  }
})

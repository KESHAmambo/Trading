import { StyleSheet } from "react-native";
import { BackgroundColor } from "../../enum/styles/BackgroundColor";
import { JustifyContent } from "../../enum/styles/JustifyContent";
import { FlexDirection } from "../../enum/styles/FlexDirection";
import { AlignItems } from "../../enum/styles/AlignItems";
import { Color } from "../../enum/styles/Color";
import { Overflow } from "../../enum/styles/Overflow";

export const styles = StyleSheet.create({
  viewPagerContainer: {
    flex: 1
  },

  mainContainer: {
    flex: 1,
    backgroundColor: BackgroundColor.APP,
    flexDirection: FlexDirection.COLUMN,
    justifyContent: JustifyContent.FLEX_START,
    alignItems: AlignItems.STRETCH,
    padding: 10,
  },

  newsContainer: {
    flex: 1,
    flexDirection: FlexDirection.COLUMN,
    justifyContent: JustifyContent.FLEX_START,
    alignItems: AlignItems.STRETCH,
    backgroundColor: BackgroundColor.CONTAINER,
    borderRadius: 20,
    padding: 15,
    overflow: Overflow.HIDDEN
  },

  newsHeader: {
    fontSize: 16,
    fontWeight: "bold",
    color: Color.WHITE,
    marginBottom: 20
  },

  placeholderContainer: {
    flexDirection: FlexDirection.COLUMN,
    justifyContent: JustifyContent.FLEX_START,
    alignItems: AlignItems.FLEX_START
  }
})

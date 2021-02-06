import { StyleSheet } from "react-native";
import { Color } from "../../../enum/styles/Color";
import { AlignSelf } from "../../../enum/styles/AlignSelf";
import { FlexDirection } from "../../../enum/styles/FlexDirection";
import { JustifyContent } from "../../../enum/styles/JustifyContent";
import { AlignItems } from "../../../enum/styles/AlignItems";
import { Overflow } from "../../../enum/styles/Overflow";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: FlexDirection.COLUMN,
    justifyContent: JustifyContent.FLEX_START,
    alignItems: AlignItems.STRETCH,
    overflow: Overflow.HIDDEN
  },

  newsText: {
    fontSize: 14,
    color: Color.BRIGHT_VIOLET,
    marginBottom: 5
  },

  newsImage: {
    margin: 15,
    alignSelf: AlignSelf.CENTER,
    height: 200,
    width: 300,
  }
})

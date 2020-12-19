import { StyleSheet } from "react-native";
import { JustifyContent } from "../../../../enum/styles/JustifyContent";
import { FlexDirection } from "../../../../enum/styles/FlexDirection";
import { AlignItems } from "../../../../enum/styles/AlignItems";
import { BackgroundColor } from "../../../../enum/styles/BackgroundColor";
import { Color } from "../../../../enum/styles/Color";

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: FlexDirection.COLUMN,
    justifyContent: JustifyContent.FLEX_START,
    alignItems: AlignItems.STRETCH,
  },

  descriptionContainer: {
    paddingHorizontal: 5,
    paddingBottom: 5
  },

  description: {
    fontSize: 12,
    color: Color.BRIGHT_VIOLET
  },

  inputValueContainer: {
    paddingHorizontal: 15,
    paddingTop: 5,
    paddingBottom: 8,
    backgroundColor: BackgroundColor.INPUT_FIELD_DISABLED,
    borderRadius: 12
  },

  inputValue: {
    fontSize: 16,
    color: Color.WHITE
  }
})

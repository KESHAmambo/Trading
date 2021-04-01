import { StyleSheet } from "react-native";
import { FlexDirection } from "../../../enum/styles/FlexDirection";
import { JustifyContent } from "../../../enum/styles/JustifyContent";
import { AlignItems } from "../../../enum/styles/AlignItems";
import { WINDOW_WIDTH } from "../../../utilites/constants";

export const styles = StyleSheet.create({
  placeholderContainer: {
    flexDirection: FlexDirection.COLUMN,
    justifyContent: JustifyContent.FLEX_START,
    alignItems: AlignItems.FLEX_START
  },

  placeholder: {
    marginBottom: 15,
    borderRadius: 10
  },

  placeholder1: {
    width: 0.85*WINDOW_WIDTH,
    height: 200
  },

  placeholder2: {
    width: 0.75*WINDOW_WIDTH,
    height: 35
  },

  placeholder3: {
    width: 0.6*WINDOW_WIDTH,
    height: 35
  },

  placeholder4: {
    width: 0.8*WINDOW_WIDTH,
    height: 16
  },

  placeholder5: {
    width: 0.7*WINDOW_WIDTH,
    height: 16
  },

  placeholder6: {
    width: 0.65*WINDOW_WIDTH,
    height: 16
  }
})

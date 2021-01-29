import { StyleSheet } from "react-native";
import { BackgroundColor } from "../../../enum/styles/BackgroundColor";
import { JustifyContent } from "../../../enum/styles/JustifyContent";
import { AlignItems } from "../../../enum/styles/AlignItems";
import { Color } from "../../../enum/styles/Color";

export const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 20,
    height: 60,
  },

  activityIndicatorContainer: {
    backgroundColor: BackgroundColor.LABEL,
    justifyContent: JustifyContent.CENTER,
    alignItems: AlignItems.CENTER
  },

  buttonDimensions: {
    paddingHorizontal: 5,
    height: 60,
    borderRadius: 20,
    justifyContent: JustifyContent.CENTER,
    alignItems: AlignItems.CENTER
  },

  buttonText: {
    fontSize: 18,
    color: Color.WHITE
  }
})

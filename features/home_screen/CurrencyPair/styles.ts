import { StyleSheet } from "react-native";
import { FlexDirection } from "../../../enum/styles/FlexDirection";
import { BackgroundColor } from "../../../enum/styles/BackgroundColor";
import { JustifyContent } from "../../../enum/styles/JustifyContent";
import { AlignItems } from "../../../enum/styles/AlignItems";
import { AlignSelf } from "../../../enum/styles/AlignSelf";
import { BorderColor } from "../../../enum/styles/BorderColor";
import { Color } from "../../../enum/styles/Color";

export const styles = StyleSheet.create({
  pairContainer: {
    flex: 1,
    flexDirection: FlexDirection.ROW,
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: BackgroundColor.CONTAINER,
    borderRadius: 12,
    padding: 10,
    justifyContent: JustifyContent.SPACE_BETWEEN,
    alignItems: AlignItems.CENTER,
    alignSelf: AlignSelf.FLEX_START
  },

  iconsContainer: {
    flex: 0.13,
    alignSelf: AlignSelf.FLEX_START
  },

  icon: {
    borderWidth: 3,
    borderColor: BorderColor.ICON,
    borderRadius: 20,
    height: 32,
    width: 32,
    position: "absolute"
  },

  iconPosition1: {
    top: 0,
    left: 0,
  },

  iconPosition2: {
    top: 16,
    left: 16
  },

  pairNameAndValueContainer: {
    flex: 0.45,
    flexDirection: FlexDirection.COLUMN,
    paddingLeft: 10,
    justifyContent: JustifyContent.SPACE_BETWEEN,
  },

  pairName: {
    color: Color.WHITE,
    fontSize: 18,
  },

  pairFullName: {
    color: Color.BRIGHT_VIOLET,
    fontSize: 14
  },

  chartContainer: {
    flex: 0.17,
  },

  chart: {
    position: "absolute",
    top: -40,
    left: -65
  },

  pairChangeAndRatioContainer: {
    flex: 0.25,
    alignItems: AlignItems.FLEX_END
  },

  pairRatio: {
    color: Color.WHITE,
    fontSize: 18,
  },

  pairChangeContainer: {
    borderRadius: 5,
    paddingHorizontal: 7,
    paddingVertical: 1,
  },

  backgroundGreen: {
    backgroundColor: BackgroundColor.GREEN
  },

  backgroundRed: {
    backgroundColor: BackgroundColor.RED
  },

  pairChange: {
    color: Color.WHITE,
    fontSize: 14
  },
});

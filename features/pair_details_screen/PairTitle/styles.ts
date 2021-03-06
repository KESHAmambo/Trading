import { StyleSheet } from "react-native";
import { FlexDirection } from "../../../enum/styles/FlexDirection";
import { JustifyContent } from "../../../enum/styles/JustifyContent";
import { Color } from "../../../enum/styles/Color";
import { BorderColor } from "../../../enum/styles/BorderColor";
import { AlignItems } from "../../../enum/styles/AlignItems";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: FlexDirection.ROW,
    justifyContent: JustifyContent.SPACE_BETWEEN,
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 16
  },

  pairIconsContainer: {
    flex: 0.2
  },

  currencyIcon: {
    borderWidth: 5,
    borderColor: BorderColor.ICON,
    borderRadius: 25,
    height: 48,
    width: 48,
    position: "absolute"
  },

  currencyIcon1: {
    left: 0,
    top: 0
  },

  currencyIcon2: {
    left: 20,
    top: 20
  },

  pairNameAndValueContainer: {
    flex: 0.6,
    flexDirection: FlexDirection.COLUMN,
    justifyContent: JustifyContent.SPACE_EVENLY,
    alignItems: AlignItems.CENTER,
  },

  pairName: {
    color: Color.WHITE,
    fontSize: 20
  },

  currentValue: {
    color: Color.WHITE,
    fontSize: 20
  },

  reverseButtonTouchable: {
    flex: 0.2,
    paddingVertical: 10,
    borderWidth: 3,
    borderColor: BorderColor.ICON,
    borderRadius: 25
  },

  reverseButton: {
    height: '100%',
    width: '100%'
  }
});

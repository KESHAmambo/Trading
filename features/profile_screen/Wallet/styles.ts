import { StyleSheet } from "react-native";
import { FlexDirection } from "../../../enum/styles/FlexDirection";
import { JustifyContent } from "../../../enum/styles/JustifyContent";
import { BorderColor } from "../../../enum/styles/BorderColor";
import { AlignItems } from "../../../enum/styles/AlignItems";
import { Color } from "../../../enum/styles/Color";

export const styles = StyleSheet.create({
  mainContainerWrapper: {
    paddingHorizontal: 15
  },

  mainContainer: {
    flex: 1,
    flexDirection: FlexDirection.ROW,
    justifyContent: JustifyContent.SPACE_BETWEEN,
    alignItems: AlignItems.CENTER,
    borderBottomWidth: 1,
    borderColor: BorderColor.ICON,
    paddingVertical: 8
  },

  iconAndNameContainer: {
    flex: 0.45,
    flexDirection: FlexDirection.ROW,
    justifyContent: JustifyContent.FLEX_START,
    alignItems: AlignItems.CENTER
  },

  icon: {
    borderWidth: 3,
    borderColor: BorderColor.ICON,
    borderRadius: 20,
    height: 32,
    width: 32,
  },

  currencyCode: {
    marginLeft: 15,
    fontSize: 14,
    color: Color.WHITE
  },

  currencyName: {
    marginLeft: 10,
    paddingRight: 10,
    fontSize: 12,
    color: Color.BRIGHT_VIOLET
  },

  amountContainer: {
    flex: 0.4,
    flexDirection: FlexDirection.ROW,
    justifyContent: JustifyContent.FLEX_END,
    alignItems: AlignItems.CENTER
  },

  amount: {
    fontSize: 14,
    color: Color.WHITE
  }
})

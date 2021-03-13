import { StyleSheet } from "react-native";
import { BackgroundColor } from "../../../enum/styles/BackgroundColor";
import { FlexDirection } from "../../../enum/styles/FlexDirection";
import { JustifyContent } from "../../../enum/styles/JustifyContent";
import { Color } from "../../../enum/styles/Color";
import { AlignItems } from "../../../enum/styles/AlignItems";

export const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 5,
    padding: 15,
    borderRadius: 20,
    backgroundColor: BackgroundColor.CONTAINER
  },

  inputFieldHeaderContainer: {
    flexDirection: FlexDirection.ROW,
    justifyContent: JustifyContent.SPACE_BETWEEN
  },

  inputFieldHeader: {
    fontSize: 12,
    color: Color.BRIGHT_VIOLET
  },

  paymentFeeContainer: {
    backgroundColor: BackgroundColor.INPUT_FIELD_DISABLED
  },

  paymentFee: {
    fontSize: 16
  },

  exchangeButtonContainer: {
    marginTop: 15
  },

  popoverContainer: {
    flexDirection: FlexDirection.COLUMN,
    alignItems: AlignItems.CENTER,
    backgroundColor: BackgroundColor.INPUT_FIELD_DISABLED,
    borderRadius: 10,
    width: '60%',
    paddingVertical: 8,
    paddingHorizontal: 10
  },

  popoverHeaderText: {
    fontSize: 14,
    color: Color.WHITE,
    marginBottom: 3
  },

  popoverBodyText: {
    fontSize: 12,
    color: Color.WHITE
  }
})

import { StyleSheet } from "react-native";
import { BackgroundColor } from "../../../enum/styles/BackgroundColor";
import { Color } from "../../../enum/styles/Color";
import { TextAlign } from "../../../enum/styles/TextAlign";

export const styles = StyleSheet.create({
  exchangeContainer: {
    flex: 0.5,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: BackgroundColor.CONTAINER
  },

  inputFieldContainer: {
    marginTop: 15,
    marginBottom: 5,
    marginHorizontal: 15,
    paddingHorizontal: 5,
    borderRadius: 12,
    backgroundColor: BackgroundColor.INPUT_FIELD
  },

  inputField: {
    color: Color.WHITE,
    textAlign: TextAlign.CENTER,
    fontSize: 18
  },

  paymentFeeContainer: {
    backgroundColor: BackgroundColor.INPUT_FIELD_DISABLED
  },

  paymentFee: {
    fontSize: 16
  },

  exchangeButtonContainer: {
    marginTop: 15,
    marginHorizontal: 15,
  }
})

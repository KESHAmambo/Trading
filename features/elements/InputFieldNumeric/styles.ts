import { StyleSheet } from "react-native";
import { BackgroundColor } from "../../../enum/styles/BackgroundColor";
import { Color } from "../../../enum/styles/Color";
import { TextAlign } from "../../../enum/styles/TextAlign";

export const styles = StyleSheet.create({
  inputFieldContainer: {
    marginTop: 5,
    marginBottom: 5,
    paddingHorizontal: 5,
    borderRadius: 12,
    backgroundColor: BackgroundColor.INPUT_FIELD
  },

  inputField: {
    color: Color.WHITE,
    textAlign: TextAlign.CENTER,
    fontSize: 18,
  }
})

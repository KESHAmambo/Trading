import { StyleSheet } from "react-native";
import { FlexDirection } from "../../../enum/styles/FlexDirection";
import { Color } from "../../../enum/styles/Color";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: FlexDirection.COLUMN,
    marginTop: 10,
    marginHorizontal: 10
  },

  header: {
    marginLeft: 10,
    fontSize: 12,
    color: Color.BRIGHT_VIOLET2
  }
})

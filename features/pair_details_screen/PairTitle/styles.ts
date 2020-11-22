import { StyleSheet } from "react-native";
import { FlexDirection } from "../../../enum/styles/FlexDirection";
import { JustifyContent } from "../../../enum/styles/JustifyContent";
import { Color } from "../../../enum/styles/Color";

export const styles = StyleSheet.create({
  titleContainer: {
    flex: 0.1,
    flexDirection: FlexDirection.ROW,
    marginVertical: 5,
    marginHorizontal: 10,
    justifyContent: JustifyContent.SPACE_BETWEEN,

  },

  title: {
    color: Color.WHITE,
    fontSize: 20
  }
});

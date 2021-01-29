import { StyleSheet } from "react-native";
import { FlexDirection } from "../../../enum/styles/FlexDirection";
import { JustifyContent } from "../../../enum/styles/JustifyContent";
import { AlignItems } from "../../../enum/styles/AlignItems";
import { Color } from "../../../enum/styles/Color";

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: FlexDirection.ROW,
    justifyContent: JustifyContent.SPACE_BETWEEN,
    alignItems: AlignItems.CENTER,
    paddingHorizontal: 10,
    paddingVertical: 5
  },

  wallet: {
    color: Color.WHITE,
    fontSize: 14
  },

  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 2
  }
})

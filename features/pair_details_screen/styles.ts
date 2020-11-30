import { StyleSheet } from "react-native";
import { FlexDirection } from "../../enum/styles/FlexDirection";
import { BackgroundColor } from "../../enum/styles/BackgroundColor";
import { AlignItems } from "../../enum/styles/AlignItems";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: FlexDirection.COLUMN,
    backgroundColor: BackgroundColor.APP,
    alignItems: AlignItems.STRETCH,
  },

});

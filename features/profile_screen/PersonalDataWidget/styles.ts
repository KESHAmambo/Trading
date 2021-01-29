import { StyleSheet } from "react-native";
import { FlexDirection } from "../../../enum/styles/FlexDirection";
import { JustifyContent } from "../../../enum/styles/JustifyContent";
import { AlignItems } from "../../../enum/styles/AlignItems";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: FlexDirection.ROW,
    justifyContent: JustifyContent.SPACE_BETWEEN,
    alignItems: AlignItems.STRETCH
  },

  avatarContainer: {
    flex: 0.4,
    justifyContent: JustifyContent.CENTER,
    alignItems: AlignItems.CENTER,
    marginRight: 10
  },

  avatar: {
    height: 150,
    width: 150,
    borderRadius: 15
  },

  personalDataContainer: {
    flex: 0.6,
    flexDirection: FlexDirection.COLUMN,
    justifyContent: JustifyContent.FLEX_START,
    alignItems: AlignItems.STRETCH,
    marginLeft: 10
  },

  personalDataFieldContainer: {
    marginVertical: 5
  }
})

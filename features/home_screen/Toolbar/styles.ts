import { StyleSheet } from "react-native";
import { BackgroundColor } from "../../../enum/styles/BackgroundColor";
import { BorderColor } from "../../../enum/styles/BorderColor";
import { FlexDirection } from "../../../enum/styles/FlexDirection";
import { JustifyContent } from "../../../enum/styles/JustifyContent";
import { AlignItems } from "../../../enum/styles/AlignItems";

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: FlexDirection.ROW,
    justifyContent: JustifyContent.SPACE_BETWEEN,
    alignItems: AlignItems.CENTER,
    height: 50,
    backgroundColor: BackgroundColor.CONTAINER,
    borderTopWidth: 3,
    borderTopColor: BorderColor.ICON
  },

  newsContainer: {
    flex: 0.6
  },

  profileWidgetContainer: {
    flex: 0.4
  }
})

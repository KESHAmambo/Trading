import { StyleSheet } from "react-native";
import { BackgroundColor } from "../../../enum/styles/BackgroundColor";
import { BorderColor } from "../../../enum/styles/BorderColor";
import { FlexDirection } from "../../../enum/styles/FlexDirection";
import { JustifyContent } from "../../../enum/styles/JustifyContent";
import { AlignItems } from "../../../enum/styles/AlignItems";
import { Height } from "../../../enum/styles/Height";

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: FlexDirection.ROW,
    justifyContent: JustifyContent.SPACE_BETWEEN,
    alignItems: AlignItems.CENTER,
    height: Height.TOOLBAR,
    backgroundColor: BackgroundColor.APP,
    borderTopWidth: 2,
    borderTopColor: BorderColor.ICON
  },

  newsWidgetContainer: {
    flex: 0.55
  },

  supportContainer: {
    flex: 0.15
  },

  supportIconContainer: {
    justifyContent: JustifyContent.CENTER,
    alignItems: AlignItems.CENTER,
    paddingVertical: 5,
  },

  supportIcon: {
    height: Height.TOOLBAR - 10,
    width: Height.TOOLBAR - 10
  },

  profileWidgetContainer: {
    flex: 0.30
  },
})

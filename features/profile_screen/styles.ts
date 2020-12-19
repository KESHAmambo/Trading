import { StyleSheet } from "react-native";
import { BackgroundColor } from "../../enum/styles/BackgroundColor";
import { FlexDirection } from "../../enum/styles/FlexDirection";
import { JustifyContent } from "../../enum/styles/JustifyContent";
import { AlignItems } from "../../enum/styles/AlignItems";
import { Color } from "../../enum/styles/Color";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: BackgroundColor.APP,
    flexDirection: FlexDirection.COLUMN,
    justifyContent: JustifyContent.FLEX_START,
    alignItems: AlignItems.STRETCH
  },

  personalDataWidgetContainer: {
    flex: 0.3,
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: BackgroundColor.CONTAINER,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },

  walletsListContainer: {
    flex: 0.7,
    marginTop: 10,
    backgroundColor: BackgroundColor.CONTAINER,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  },

  sortingTabContainer: {
    flexDirection: FlexDirection.ROW,
    justifyContent: JustifyContent.SPACE_BETWEEN,
    paddingTop: 10,
    paddingBottom: 5,
    paddingHorizontal: 20
  },

  sortingByParamContainer: {
    flexDirection: FlexDirection.ROW,
    justifyContent: JustifyContent.FLEX_START,
  },

  sortingText: {
    fontSize: 14,
    color: Color.BRIGHT_VIOLET,
    marginRight: 3,
  },

  sortingIcon: {
    height: 20,
    width: 20
  }
})

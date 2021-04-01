import { StyleSheet } from "react-native";
import { FlexDirection } from "../../enum/styles/FlexDirection";
import { BackgroundColor } from "../../enum/styles/BackgroundColor";
import { AlignItems } from "../../enum/styles/AlignItems";
import { JustifyContent } from "../../enum/styles/JustifyContent";
import { WINDOW_HEIGHT_WITHOUT_BARS } from "../../utilites/constants";

export const styles = StyleSheet.create({
  scrollViewWrapper: {
    flex: 1,
    backgroundColor: BackgroundColor.APP
  },

  mainContainer: {
    height: WINDOW_HEIGHT_WITHOUT_BARS,
    flexDirection: FlexDirection.COLUMN,
    justifyContent: JustifyContent.FLEX_START,
    alignItems: AlignItems.STRETCH,
  },

  titleAndChartContainer: {
    height: 0.5*WINDOW_HEIGHT_WITHOUT_BARS,
    paddingBottom: 15,
    marginBottom: 10,
    backgroundColor: BackgroundColor.CONTAINER,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },

  titleContainer: {
    height: 96,
  },

  chartContainer: {
    flex: 1
  },

  exchangeWidgetContainer: {
    flex: 1
  }
});

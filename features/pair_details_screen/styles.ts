import { Dimensions, StatusBar, StyleSheet } from "react-native";
import { FlexDirection } from "../../enum/styles/FlexDirection";
import { BackgroundColor } from "../../enum/styles/BackgroundColor";
import { AlignItems } from "../../enum/styles/AlignItems";
import { JustifyContent } from "../../enum/styles/JustifyContent";

const screenHeightWithoutBars = Dimensions.get("window").height - (StatusBar.currentHeight !== undefined ? StatusBar.currentHeight : 0);

export const styles = StyleSheet.create({
  scrollViewWrapper: {
    flex: 1,
    backgroundColor: BackgroundColor.APP
  },

  mainContainer: {
    height: screenHeightWithoutBars,
    flexDirection: FlexDirection.COLUMN,
    justifyContent: JustifyContent.FLEX_START,
    alignItems: AlignItems.STRETCH,
  },

  titleAndChartContainer: {
    flex: 0.5,
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
    flex: 0.5
  }
});

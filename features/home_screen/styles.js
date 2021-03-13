import {StyleSheet} from "react-native";
import {BackgroundColor} from "../../enum/styles/BackgroundColor";
import {Color} from "../../enum/styles/Color";
import {AlignItems} from "../../enum/styles/AlignItems";
import {WINDOW_HEIGHT_WITHOUT_BARS} from "../../utilites/constants";
import {FlexDirection} from "../../enum/styles/FlexDirection";
import {JustifyContent} from "../../enum/styles/JustifyContent";

export const styles = StyleSheet.create({
  scrollViewWrapper: {
    flex: 1,
    backgroundColor: BackgroundColor.APP,
  },

  mainContainer: {
    height: WINDOW_HEIGHT_WITHOUT_BARS,
    flexDirection: FlexDirection.COLUMN,
    justifyContent: JustifyContent.FLEX_START,
    alignItems: AlignItems.STRETCH
  },

  searchingFieldContainerWrapper: {
    height: 70,
    marginBottom: 5,
    backgroundColor: BackgroundColor.CONTAINER,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },

  searchingFieldContainer: {
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 10,
    paddingHorizontal: 5,
    borderRadius: 12,
    backgroundColor: BackgroundColor.INPUT_FIELD,
  },

  searchingField: {
    color: Color.WHITE,
    fontSize: 18
  },

  pairsListContainer: {
    flex: 1
  }
});

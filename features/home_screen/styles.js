import {StyleSheet} from "react-native";
import {BackgroundColor} from "../../enum/styles/BackgroundColor";
import {Color} from "../../enum/styles/Color";
import {AlignItems} from "../../enum/styles/AlignItems";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: BackgroundColor.APP,
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

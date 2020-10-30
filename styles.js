import {StyleSheet} from "react-native";
import {BackgroundColor} from "./enum/styles/BackgroundColor";
import {Color} from "./enum/styles/Color";
import {AlignItems} from "./enum/styles/AlignItems";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BackgroundColor.APP,
    alignItems: AlignItems.FLEX_START
  },
  searchingFieldContainer: {
    height: 45,
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 10,
    paddingHorizontal: 5,

    borderRadius: 12,
    backgroundColor: BackgroundColor.SEARCHING_FIELD,
  },
  searchingField: {
    color: Color.SEARCHING_FIELD,
    fontSize: 18
  },
  pairsListContainer: {
    flex: 1
  }
});

export default styles;

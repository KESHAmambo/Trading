import {StyleSheet} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {FlexDirection} from "../../../enum/styles/FlexDirection";

export const styles = StyleSheet.create({
  sectionPair: {
    flexDirection: FlexDirection.ROW,
    borderColor: Colors.gray,
    borderWidth: 1,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  pairName: {
    fontSize: 20,
  },
  pairRatio: {
    fontSize: 14,
  },
});
import { StyleSheet } from "react-native";
import { BackgroundColor } from "../../../enum/styles/BackgroundColor";
import { Color } from "../../../enum/styles/Color";
import { DateLabel } from "../../../enum/styles/ChartLabels";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    left: -10
  },

  chart: {
    flex: 1
  },

  labelContainer: {
    backgroundColor: BackgroundColor.LABEL,
    borderRadius: 10,
    height: 25,
    justifyContent: "center",
    paddingHorizontal: 10,
    position: "absolute"
  },

  dateLabelContainer: {
    bottom: -5
  },

  valueLabelContainer: {
    right: -10
  },

  labelText: {
    color: Color.WHITE,
    fontSize: 12
  },

  emptyContainer: {
    height: 0,
    width: DateLabel.WIDTH
  }
});

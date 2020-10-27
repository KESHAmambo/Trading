import { StyleSheet } from "react-native";
import { FlexDirection } from "../../../enum/styles/FlexDirection";
import { BackgroundColor } from "../../../enum/styles/BackgroundColor";

export const styles = StyleSheet.create({
  pairContainer: {
    flex: 1,
    flexDirection: FlexDirection.ROW,

    marginVertical: 5,
    marginHorizontal: 10,

    backgroundColor: BackgroundColor.PAIR,
    borderRadius: 12,

    padding: 10,
    justifyContent: "space-between",
    alignItems: "center"
  },

  iconsContainer: {
    flex: 0.13,
    alignSelf: "flex-start"
  },

  icon: {
    borderWidth: 3,
    borderColor: '#363762',
    borderRadius: 20,
    height: 32,
    width: 32,
    position: "absolute"
  },

  position1: {
    top: 0,
    left: 0,
  },

  position2: {
    top: 16,
    left: 16
  },

  pairNameContainer: {
    flex: 0.45,
    flexDirection: FlexDirection.COLUMN,
    paddingLeft: 10,
    justifyContent: "space-between",
  },

  pairName: {
    color: '#ffffff',
    fontSize: 18,
  },

  pairFullName: {
    color: '#8082c6',
    fontSize: 14
  },

  chartContainer: {
    flex: 0.17,
  },

  pairChangeAndRatioContainer: {
    flex: 0.25,
    alignItems: "flex-end"
  },

  pairRatio: {
    color: '#ffffff',
    fontSize: 18,
  },

  pairChangeContainer: {
    borderRadius: 5,
    paddingHorizontal: 7,
    paddingVertical: 1,
  },
  backgroundGreen: {
    backgroundColor: '#22e02d'
  },
  backgroundRed: {
    backgroundColor: '#ff3180'
  },
  pairChange: {
    color: '#ffffff',
    fontSize: 14
  },
});

import { StyleSheet } from "react-native";
import { FlexDirection } from "../../../enum/styles/FlexDirection";

export const styles = StyleSheet.create({
  pairContainer: {
    flex: 1,
    flexDirection: FlexDirection.ROW,

    marginVertical: 5,
    marginHorizontal: 10,

    backgroundColor: '#212244',
    borderRadius: 12,

    padding: 10,
    justifyContent: "space-between",
    alignItems: "flex-start"
  },

  iconsContainer: {
    flex: 0.2
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
    flex: 0.5,
    flexDirection: FlexDirection.COLUMN,
    justifyContent: "space-between",
  },

  pairName: {
    color: '#ffffff',
    fontSize: 20,
  },

  pairFullName: {
    color: '#8082c6',
    fontSize: 14
  },

  pairChangeAndRatioContainer: {
    flex: 0.3,
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
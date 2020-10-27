import {StyleSheet} from "react-native";
import {BackgroundColor} from "./enum/styles/BackgroundColor";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BackgroundColor.APP,
    color: '#ffffff',
    alignItems: "stretch"
  },
  searchingFieldContainer: {
    height: 45,
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 10,

    paddingHorizontal: 5,

    borderRadius: 12,
    backgroundColor: '#505193',
    color: '#ffffff'
  },
  searchingField: {
    color: '#ffffff',
    fontSize: 18
  },
  pairsListContainer: {
    flex: 1
  }
});

export default styles;
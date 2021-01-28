import { StyleSheet } from "react-native";
import { BackgroundColor } from "../../enum/styles/BackgroundColor";
import { JustifyContent } from "../../enum/styles/JustifyContent";
import { FlexDirection } from "../../enum/styles/FlexDirection";
import { AlignItems } from "../../enum/styles/AlignItems";
import { Color } from "../../enum/styles/Color";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: BackgroundColor.APP,
    flexDirection: FlexDirection.COLUMN,
    justifyContent: JustifyContent.FLEX_START,
    alignItems: AlignItems.STRETCH
  },

  fieldsAndButtonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: BackgroundColor.CONTAINER,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },

  fieldDescriptionContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    paddingBottom: 5
  },

  fieldDescription: {
    fontSize: 14,
    color: Color.BRIGHT_VIOLET
  },

  pickerContainer: {
    backgroundColor: BackgroundColor.INPUT_FIELD,
    paddingHorizontal: 10,
    borderRadius: 12
  },

  picker: {
    color: Color.WHITE
  },

  issueInputContainer: {
    backgroundColor: BackgroundColor.INPUT_FIELD,
    borderRadius: 12,
    paddingHorizontal: 10
  },

  issueInput: {
    fontSize: 16,
    color: Color.WHITE
  },

  sendButtonContainer: {
    marginTop: 40,
    marginHorizontal: 15
  }
})

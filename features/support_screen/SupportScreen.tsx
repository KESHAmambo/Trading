import React, { useState } from "react";
import { Alert, Linking, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { Picker } from "@react-native-picker/picker";
import { Color } from "../../enum/styles/Color";
import { ItemValue, PickerItemProps } from "@react-native-picker/picker/typings/Picker";
import { Screens } from "../../enum/screens/screens";
import { GradientButton } from "../GradientButton/GradientButton";
import { createMailUrl } from "../../utilites/utilites";
import { useSelector } from "react-redux";
import { supportEmailSelector } from "../../store/features/support/selectors";

const addPickerItems = (items: PickerItemProps[]) => {

  return (
    items.map((item) => {
      return <Picker.Item {...item} key={item.label}/>
    })
  )
}

const SCREENS: PickerItemProps[] = [
  {label: 'List of currency pairs', value: Screens.HOME},
  {label: 'Currency pair info & exchange', value: Screens.PAIR_DETAILS},
  {label: 'Help & Support', value: Screens.SUPPORT},
  {label: 'Profile', value: Screens.PROFILE},
  {label: 'News', value: Screens.NEWS}
];

const SupportScreen = () => {

  const [pickerValue, setPickerValue] = useState<ItemValue | undefined>(SCREENS[0].value);
  const [inputValue, setInputValue] = useState<string>('');
  const [isSending, setIsSending] = useState<boolean>(false)

  const isSendButtonDisabled = (inputValue === '');
  const pickerLabel = SCREENS.filter((item) => (item.value === pickerValue))[0].label;

  const supportEmail = useSelector(supportEmailSelector);

  const onPickerValueChange = (itemValue: ItemValue, itemIndex: number) => {
    setPickerValue(itemValue);
  }

  const onChangeText = (text: string) => {
    setInputValue(text);
  }

  // const handlePress = useCallback(async () => {
  //   const url = createMailUrl(supportEmail, '', inputValue);
  //   const isUrlSupported = await Linking.canOpenURL(url);
  //
  //   if (isUrlSupported) {
  //     await Linking.openURL(url);
  //   } else {
  //     Alert.alert(`Can't open this URL: ${url}`);
  //   }
  // }, [])

  const onSendButtonPress = () => {
    if (!isSending) {
      setIsSending(true);

      const url = createMailUrl(supportEmail, `Issue in ${pickerLabel}`, inputValue);

      setTimeout(() => {
        Linking.canOpenURL(url)
          .then((isSupported) => {
            if (isSupported) {
              Linking.openURL(url);
              setInputValue('');
            } else {
              Alert.alert(`Can't open this URL: ${url}`);
            }
          })
          .finally(() => {
            setIsSending(false);
          });
      }, 1000)
    }
  }

  return (
    <View style={styles.scrollViewWrapper}>
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <View style={styles.fieldsAndButtonContainer}>
          <View style={styles.fieldDescriptionContainer}>
            <Text style={styles.fieldDescription}>
              {'Section with issue'}
            </Text>
          </View>

          <View style={styles.pickerContainer}>
            <Picker
              style={styles.picker}
              selectedValue={pickerValue}
              onValueChange={onPickerValueChange}
              mode={"dropdown"}
              dropdownIconColor={Color.WHITE}
            >
              {addPickerItems(SCREENS)}
            </Picker>
          </View>

          <View style={styles.fieldDescriptionContainer}>
            <Text style={styles.fieldDescription}>
              {'Issue description'}
            </Text>
          </View>

          <View style={styles.issueInputContainer}>
            <TextInput
              style={styles.issueInput}
              multiline={true}
              maxLength={1023}
              numberOfLines={7}
              textAlignVertical={"top"}
              value={inputValue}
              onChangeText={onChangeText}
            />
          </View>

          <View style={styles.sendButtonContainer}>
            <GradientButton
              isProcessing={isSending}
              isDisabled={isSendButtonDisabled}
              onPress={onSendButtonPress}
              text={'SEND'}
            />
          </View>
        </View>
      </ScrollView>
    </View>

  )
}

export default SupportScreen;

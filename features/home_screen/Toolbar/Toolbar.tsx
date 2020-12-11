import { Button, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native'
import { Screens } from "../../../enum/screens/screens";

interface IProps {

}

const FuncComponent = (props: IProps) => {

  const navigation = useNavigation();

  const onSupportButtonPress = () => {
    navigation.navigate(Screens.SUPPORT)
  };

  const onProfileButtonPress = () => {
    navigation.navigate(Screens.PROFILE)
  };


  return (
    <View style={styles.toolbarContainer}>
      <Button title={'Support'} onPress={onSupportButtonPress} />
      <Button title={'Profile'} onPress={onProfileButtonPress} />
    </View>
  )
}

export const Toolbar = React.memo(FuncComponent)

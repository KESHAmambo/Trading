import { Button, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native'
import { Screens } from "../../../enum/screens/screens";
import { ProfileWidget } from "../ProfileWidget/ProfileWidget";

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
    <View style={styles.mainContainer}>
      <View style={styles.newsContainer}>
        <Button title={'Support'} onPress={onSupportButtonPress} />
      </View>
      <View style={styles.profileWidgetContainer}>
        <ProfileWidget onPress={onProfileButtonPress}/>
      </View>
    </View>
  )
}

export const Toolbar = React.memo(FuncComponent)

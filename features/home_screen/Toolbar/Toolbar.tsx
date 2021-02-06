import { Image, Pressable, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native'
import { Screens } from "../../../enum/screens/screens";
import { ProfileWidget } from "../ProfileWidget/ProfileWidget";
import { Color } from "../../../enum/styles/Color";
import { NewsWidget } from "../NewsWidget/NewsWidget";
import { WINDOW_WIDTH } from "../../../utilites/constants";

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
      <View style={styles.newsWidgetContainer}>
        <NewsWidget />
      </View>

      <View style={styles.supportContainer}>
        <Pressable
          onPress={onSupportButtonPress}
          android_ripple={{color: Color.DARK_VIOLET, radius: 0.075*WINDOW_WIDTH}}
        >
          <View style={styles.supportIconContainer}>
            <Image
              style={styles.supportIcon}
              source={require('../../../icons/support.png')}
            />
          </View>
        </Pressable>
      </View>

      <View style={styles.profileWidgetContainer}>
        <ProfileWidget onPress={onProfileButtonPress}/>
      </View>
    </View>
  )
}

export const Toolbar = React.memo(FuncComponent)

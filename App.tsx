import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./features/home_screen/HomeScreen";
import { BackgroundColor } from "./enum/styles/BackgroundColor";
import { StatusBar, } from "react-native";
import { PairDetailsScreen } from "./features/pair_details_screen/PairDetailsScreen";
import { IRootStackParamList } from "./features/types";
import { Screens } from "./enum/screens/screens";
import SupportScreen from "./features/support_screen/SupportScreen";
import ProfileScreen from "./features/profile_screen/ProfileScreen";

const RootStack = createStackNavigator<IRootStackParamList>();

const App = () => {

  return (
    <>
      <StatusBar backgroundColor={BackgroundColor.CONTAINER}/>

      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName={Screens.HOME}
          headerMode={"none"}
        >
          <RootStack.Screen
            name={Screens.HOME}
            component={HomeScreen}
          />
          <RootStack.Screen
            name={Screens.PAIR_DETAILS}
            component={PairDetailsScreen}
          />
          <RootStack.Screen
            name={Screens.SUPPORT}
            component={SupportScreen}
          />
          <RootStack.Screen
            name={Screens.PROFILE}
            component={ProfileScreen}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

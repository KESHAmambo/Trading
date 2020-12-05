import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./features/home_screen/HomeScreen";
import { BackgroundColor } from "./enum/styles/BackgroundColor";
import { StatusBar } from "react-native";
import { PairDetailsScreen } from "./features/pair_details_screen/PairDetailsScreen";
import { Color } from "./enum/styles/Color";
import { IRootStackParamList } from "./features/types";
import { Screens } from "./enum/screens/screens";

const RootStack = createStackNavigator<IRootStackParamList>();

const App = () => {

  return (
    <>
      <StatusBar backgroundColor={BackgroundColor.APP}/>

      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName={Screens.HOME}
          headerMode={"none"}
          screenOptions={{
            headerStyle: {
              backgroundColor: BackgroundColor.APP
            },
            headerTintColor: Color.WHITE,
          }}
        >
          <RootStack.Screen name={Screens.HOME} component={HomeScreen}/>
          <RootStack.Screen
            name={Screens.PAIR_DETAILS}
            component={PairDetailsScreen}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

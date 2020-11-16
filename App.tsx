import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./features/home_screen/HomeScreen";
import { BackgroundColor } from "./enum/styles/BackgroundColor";
import { StatusBar } from "react-native";

const Stack = createStackNavigator();

const App = () => {

  return (
    <>
      <StatusBar backgroundColor={BackgroundColor.APP}/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={'Home'} component={HomeScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

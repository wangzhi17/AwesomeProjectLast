import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screen/HomeScreen";

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"home"} component={HomeScreen} />
        <Stack.Screen name={'real_play'} getComponent={() => require("../screen/EzvizRealPlayScreen").default}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;

import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import SplashScreen from "../screens/SplashScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerMode: "false" }}
      initialRouteName="HomeScreen"
    >
      <Stack.Screen
        name="SplashScreen"
        options={{ headerShown: false }}
        component={SplashScreen}
      />
      <Stack.Screen
        name="HomeScreen"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
}

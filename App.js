import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Homepage from "./src/screens/Homepage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddTransaction from "./src/screens/AddTransaction";
import { ModalPortal } from "react-native-modals";
import { useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="AddTransaction" component={AddTransaction} />
      </Stack.Navigator>
      <ModalPortal />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

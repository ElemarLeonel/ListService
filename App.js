import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  // Text,
  // Center,
  NativeBaseProvider,
  // extendTheme,
} from "native-base";
import Routes from "./routes";
// import { Platform } from "react-native";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

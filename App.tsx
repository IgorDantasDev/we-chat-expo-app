import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Routes } from "~/navigation/Routes";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { HEADER_COLOR } from "~/constants/colors";

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar translucent backgroundColor={HEADER_COLOR} style="light" />
        <Routes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

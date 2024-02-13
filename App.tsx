import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Routes } from "~/navigation/Routes";
import { Provider } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { HEADER_COLOR } from "~/constants/colors";
import { store } from "~/store";
import { LogBox } from "react-native";

if (__DEV__) {
  // @ts-ignore
  import("~/config/reactotronConfig");
}
const App = () => {

  LogBox.ignoreLogs(['middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers'])


  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <StatusBar translucent backgroundColor={HEADER_COLOR} style="light" />
          <Routes />
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

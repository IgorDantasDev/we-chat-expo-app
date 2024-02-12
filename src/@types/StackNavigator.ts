import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

declare global {
  export type StackParamList = {
    Home: undefined;
    Chat: undefined;
  };

  export type StackNavigatorProp = NativeStackNavigationProp<
    StackParamList,
    "Home"
  >;

  export type ChatScreenRouteProp = RouteProp<StackParamList, "Chat">;
}

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

//Navigators
import RootNavigator from "./src/navigators/RootNavigator";

//Redux
import { Provider } from "react-redux";
import store from "./src/redux/store";

LogBox.ignoreAllLogs(true);


export default function App() {
  
  return (
    <Provider store={store}>
      <NavigationContainer >
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}
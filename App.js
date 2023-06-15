import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EStyleSheet from "react-native-extended-stylesheet";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

const Stack = createNativeStackNavigator();

EStyleSheet.build();

export default function App() {
  /*
  The below code loads in the fonts and displays a splash screen (loading screen)
  while the fonts are being loaded.

  See following for reference: https://docs.expo.dev/versions/latest/sdk/font/
  */
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    Ubuntu_Bold: require("./assets/fonts/Ubuntu-Bold.ttf"),
    Ubuntu: require("./assets/fonts/Ubuntu-Regular.ttf"),
  });

  useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

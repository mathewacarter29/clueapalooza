import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EStyleSheet from "react-native-extended-stylesheet";
import { useFonts } from "expo-font";

import Home from "./screens/Home";
import Hunt from "./screens/Hunt";
import Question from "./screens/Question";
import Solve from "./screens/Solve";
import Correct from "./screens/Correct";
import Incorrect from "./screens/Incorrect";
import WrongAnswers from "./screens/WrongAnswers";

const Stack = createNativeStackNavigator();

EStyleSheet.build();

export default function App() {
  /*
  The below code loads in the fonts and displays a splash screen (loading screen)
  while the fonts are being loaded.

  See following for reference: https://docs.expo.dev/versions/latest/sdk/font/
  */

  const [fontsLoaded] = useFonts({
    Ubuntu_Bold: require("./assets/fonts/Ubuntu-Bold.ttf"),
    Ubuntu: require("./assets/fonts/Ubuntu-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Hunt" component={Hunt} />
        <Stack.Screen name="Question" component={Question} />
        <Stack.Screen name="Solve" component={Solve} />
        <Stack.Screen name="Correct" component={Correct} />
        <Stack.Screen name="Incorrect" component={Incorrect} />
        <Stack.Screen name="WrongAnswers" component={WrongAnswers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

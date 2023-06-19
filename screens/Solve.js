import { View, Text } from "react-native";
import { theme } from "../theme";
import EStyleSheet from "react-native-extended-stylesheet";

function Solve() {
  return (
    <View>
      <Text>Solve screen</Text>
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingTop: "2rem",
  },
});

export default Solve;

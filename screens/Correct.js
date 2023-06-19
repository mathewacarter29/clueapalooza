import { View, Text, TouchableOpacity } from "react-native";
import BackButton from "../common/BackButton";
import EStyleSheet from "react-native-extended-stylesheet";
import Card from "../common/Card";
import Icon from "react-native-vector-icons/Ionicons";
import { theme } from "../theme";

function Correct({ route, navigation }) {
  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={[theme.textVariant.header, { margin: 10 }]}>Huzzah!</Text>
      <Text style={theme.textVariant.header}>You solved the puzzle!</Text>
      <View style={{ alignItems: "center", marginLeft: 20 }}>
        <Icon
          name="ios-checkmark-circle-outline"
          backgroundColor="#EAEAEA"
          color="green"
          size={400}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={[theme.textVariant.regular, { marginVertical: 10 }]}>
          Your Answer:
        </Text>
        <Text style={theme.textVariant.regular}>{route.params.userAnswer}</Text>
      </View>
      <Card highlight style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={[theme.textVariant.regular, { textAlign: "center" }]}>
            Back to Ongoing Hunts
          </Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingTop: "2rem",
  },
  button: {
    marginTop: "3rem",
  },
});

export default Correct;

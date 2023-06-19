import { View, Text, TouchableOpacity } from "react-native";
import BackButton from "../common/BackButton";
import EStyleSheet from "react-native-extended-stylesheet";
import Card from "../common/Card";
import Icon from "react-native-vector-icons/Ionicons";
import { theme } from "../theme";

function Incorrect({ route, navigation }) {
  const { userAnswer, wrongAnswers } = route.params;
  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={[theme.textVariant.header, { margin: 10 }]}>Rats!</Text>
      <Text style={theme.textVariant.header}>Your answer is incorrect.</Text>
      <View style={{ alignItems: "center", marginLeft: 20 }}>
        <Icon
          name="close-circle-outline"
          backgroundColor="#EAEAEA"
          color="red"
          size={400}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={[theme.textVariant.regular, { marginBottom: 10 }]}>
          Your Answer:
        </Text>
        <Text style={theme.textVariant.regular}>{route.params.userAnswer}</Text>
      </View>
      <Card highlight style={styles.button}>
        <TouchableOpacity
          onPress={() => console.log("See wrong answers clicked")}
        >
          <Text style={[theme.textVariant.regular, { textAlign: "center" }]}>
            See Wrong Answers
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

export default Incorrect;

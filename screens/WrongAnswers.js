import { View, Text, TouchableOpacity, FlatList } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import BackButton from "../common/BackButton";
import Card from "../common/Card";
import Icon from "react-native-vector-icons/Ionicons";
import { theme } from "../theme";

function WrongAnswers({ route, navigation }) {
  const { userAnswer, questionsWrong } = route.params;
  console.log(questionsWrong);

  return (
    <View style={styles.container}>
      <BackButton />
      <View style={{ alignItems: "center" }}>
        <Text style={[theme.textVariant.regular, { marginBottom: 10 }]}>
          Your Answer:
        </Text>
        <Text style={theme.textVariant.regular}>{userAnswer}</Text>
      </View>
      <FlatList
        data={questionsWrong}
        renderItem={({ item }) => {
          return (
            <Card>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Question", {
                    title: item.title,
                    hints: item.hints,
                    answer: item.answer,
                  })
                }
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <Text style={[theme.textVariant.regular, { width: "89%" }]}>
                  {item.title}
                </Text>
                <Icon
                  name="close-circle-outline"
                  backgroundColor={theme.colors.primary}
                  color="red"
                  size={50}
                />
              </TouchableOpacity>
            </Card>
          );
        }}
      />
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
  button: { marginBottom: "2rem" },
});

export default WrongAnswers;

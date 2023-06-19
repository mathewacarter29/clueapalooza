import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { theme } from "../theme";
import EStyleSheet from "react-native-extended-stylesheet";
import Card from "../common/Card";
import BackButton from "../common/BackButton";

function Hunt({ route, navigation }) {
  const { questions, title, answer } = route.params;
  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={[theme.textVariant.header, { textAlign: "center" }]}>
        {title}
      </Text>
      <Text style={[theme.textVariant.regular, { textAlign: "center" }]}>
        Tap on a question to view hints
      </Text>
      <FlatList
        data={questions}
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
              >
                <Text style={theme.textVariant.regular}>{item.title}</Text>
              </TouchableOpacity>
            </Card>
          );
        }}
      />
      <Card highlight style={styles.button}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Solve", {
              huntAnswer: answer,
              questions: questions,
            })
          }
        >
          <Text style={[theme.textVariant.regular, { textAlign: "center" }]}>
            Solve Hunt
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
    marginBottom: "2rem",
  },
});

export default Hunt;

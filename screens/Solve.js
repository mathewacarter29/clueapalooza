import { View, Text, Image, TouchableOpacity } from "react-native";
import { theme } from "../theme";
import EStyleSheet from "react-native-extended-stylesheet";
import BackButton from "../common/BackButton";
import { Input } from "react-native-elements";
import { useState } from "react";
import Card from "../common/Card";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";

function Solve({ route, navigation }) {
  const { huntAnswer, questions } = route.params;

  const [userAnswer, setAnswer] = useState("");
  function onSolve() {
    const [userAnswerLower, huntAnswerLower] = [
      userAnswer.toLowerCase(),
      huntAnswer.toLowerCase(),
    ];
    // Check if the answer matches the correct answer
    if (userAnswerLower === huntAnswerLower) {
      // If they match, navigate to the CORRECT screen
      console.log("Correct");
      // navigation.navigate("Correct");
    } else if (userAnswerLower.length > huntAnswerLower.length) {
      // Probably make a Modal pop up and say the answer is too long
      console.log(
        `Your answer is too long. Should be ${huntAnswerLower.length} characters long. Your answer is ${userAnswerLower} characters long (1 per question).`
      );
    } else {
      // If not, navigate to the INCORRECT screen and pass in all the incorrect answers
      let wrongAnswers = [];
      // Check for wrong answers
      for (let i = 0; i < huntAnswerLower.length; i++) {
        if (
          i >= userAnswerLower.length ||
          userAnswerLower[i] !== huntAnswerLower[i]
        ) {
          wrongAnswers.push(i);
        }
      }
      console.log(wrongAnswers);
      const questionsWrong = questions.filter((_, index) =>
        wrongAnswers.includes(index)
      );
      console.log(questionsWrong);
    }
  }

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      automaticallyAdjustContentInsets={false}
    >
      <BackButton />
      <Text style={theme.textVariant.header}>Check Your Answer</Text>
      <Text style={[theme.textVariant.regular, styles.explanation]}>
        Submit as an XX character word to see if your answers are all correct!
      </Text>
      <Input
        placeholder="Enter your answer here"
        style={styles.input}
        inputContainerStyle={{ borderBottomWidth: 0 }}
        onChangeText={(value) => setAnswer(value)}
        inputStyle={[theme.textVariant.regular, { textAlign: "center" }]}
      />
      <Image source={require("../assets/logo_text.png")} style={styles.logo} />
      <Card highlight style={styles.button}>
        <TouchableOpacity onPress={() => onSolve()}>
          <Text style={[theme.textVariant.regular, { textAlign: "center" }]}>
            Solve Hunt
          </Text>
        </TouchableOpacity>
      </Card>
    </KeyboardAwareScrollView>
  );
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingTop: "2rem",
    padding: "1rem",
  },
  explanation: {
    textAlign: "center",
    margin: "1rem",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 25,
    padding: "1rem",
  },
  logo: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  button: {
    marginBottom: "2rem",
  },
});

export default Solve;

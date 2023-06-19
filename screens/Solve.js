import { View, Text, Image, TouchableOpacity } from "react-native";
import { theme } from "../theme";
import EStyleSheet from "react-native-extended-stylesheet";
import BackButton from "../common/BackButton";
import { Input } from "react-native-elements";
import { useState } from "react";
import Card from "../common/Card";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import Modal from "../common/Modal";

function Solve({ route, navigation }) {
  const { huntAnswer, questions } = route.params;
  const [showModal, setShowModal] = useState(false);

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
      navigation.navigate("Correct", { userAnswer: userAnswer });
    } else if (userAnswerLower.length !== huntAnswerLower.length) {
      // Make a Modal pop up and say the answer the wrong length
      setShowModal(true);
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
      const questionsWrong = questions.filter((_, index) =>
        wrongAnswers.includes(index)
      );
      console.log(questionsWrong);
      navigation.navigate("Incorrect", { userAnswer, questionsWrong });
    }
  }

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      automaticallyAdjustContentInsets={false}
    >
      <BackButton />
      <Modal hideModal={() => setShowModal(false)} visible={showModal}>
        <View style={{ margin: 20 }}>
          <Text style={theme.textVariant.header}>
            {`Your answer is the wrong length. It should be ${huntAnswer.length} characters long, but your answer is ${userAnswer.length} characters long. There is 1 character per question.`}
          </Text>
        </View>
      </Modal>
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
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Card highlight style={styles.button}>
          <TouchableOpacity onPress={() => onSolve()}>
            <Text style={[theme.textVariant.regular, { textAlign: "center" }]}>
              Solve Hunt
            </Text>
          </TouchableOpacity>
        </Card>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingTop: "2rem",
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

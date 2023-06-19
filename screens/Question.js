import { View, Text, FlatList, TouchableOpacity } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { theme } from "../theme";
import Card from "../common/Card";
import { useState } from "react";
import Modal from "../common/Modal";
import BackButton from "../common/BackButton";

function Question({ route, navigation }) {
  const { title, hints, answer } = route.params;
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalText, setModalText] = useState("");

  const listItems = hints.map((hint, index) => (
    <Card>
      <TouchableOpacity
        onPress={() => {
          setShowModal(true);
          setModalTitle(`Hint ${index + 1}`);
          setModalText(hint.hint);
        }}
      >
        <Text
          style={[theme.textVariant.regular, { textAlign: "center" }]}
        >{`Hint ${index + 1}`}</Text>
      </TouchableOpacity>
    </Card>
  ));
  const answerCard = (
    <Card highlight>
      <TouchableOpacity
        onPress={() => {
          setShowModal(true);
          setModalTitle(`Answer`);
          setModalText(answer);
        }}
      >
        <Text style={[theme.textVariant.regular, { textAlign: "center" }]}>
          See Answer
        </Text>
      </TouchableOpacity>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Modal hideModal={() => setShowModal(false)} visible={showModal}>
        <View>
          <Text style={[theme.textVariant.header, styles.modalTitle]}>
            {modalTitle}
          </Text>
          <Text style={[theme.textVariant.regular, { textAlign: "center" }]}>
            {modalText}
          </Text>
        </View>
      </Modal>
      <BackButton />
      <Text style={theme.textVariant.header}>{title}</Text>
      <FlatList
        contentContainerStyle={{ marginTop: "10%" }}
        data={[...listItems, answerCard]}
        renderItem={({ item }) => {
          return item;
        }}
      />
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    marginTop: "2rem",
  },
  modalTitle: {
    margin: "1rem",
  },
});

export default Question;

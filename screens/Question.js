import { View, Text, FlatList, TouchableOpacity } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { theme } from "../theme";
import Card from "../common/Card";

function Question({ route, navigation }) {
  const { title, hints, answer } = route.params;
  const listItems = hints.map((hint, index) => (
    <Card>
      <TouchableOpacity onPress={() => console.log(hint.hint)}>
        <Text
          style={[theme.textVariant.regular, { textAlign: "center" }]}
        >{`Hint ${index + 1}`}</Text>
      </TouchableOpacity>
    </Card>
  ));
  const answerCard = (
    <Card highlight>
      <TouchableOpacity onPress={() => console.log(answer)}>
        <Text style={[theme.textVariant.regular, { textAlign: "center" }]}>
          See Answer
        </Text>
      </TouchableOpacity>
    </Card>
  );

  return (
    <View style={styles.container}>
      <View>
        <Icon
          name="arrow-left"
          backgroundColor={"#EAEAEA"}
          color={"black"}
          size={50}
          onPress={() => navigation.goBack()}
        />
      </View>
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
    paddingTop: "2rem",
  },
});

export default Question;

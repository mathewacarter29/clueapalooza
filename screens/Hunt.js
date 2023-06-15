import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { theme } from "../theme";
import EStyleSheet from "react-native-extended-stylesheet";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Card from "../common/Card";

function Hunt({ route, navigation }) {
  const { questions, title } = route.params;
  return (
    <View style={styles.container}>
      <Icon.Button
        name="arrow-left"
        backgroundColor={"#EAEAEA"}
        color={"black"}
        size={50}
      />
      <Text style={[theme.textVariant.header, { textAlign: "center" }]}>
        {title}
      </Text>
      <FlatList
        data={questions}
        renderItem={({ item }) => {
          return (
            <Card>
              <Text style={theme.textVariant.regular}>{item.title}</Text>
            </Card>
          );
        }}
      />
      <Card highlight style={styles.button}>
        <TouchableOpacity>
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

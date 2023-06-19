import React from "react";
import { View, Image, Text, FlatList, TouchableOpacity } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { theme } from "../theme";
import DATA from "../test_data";
import Card from "../common/Card";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo_notext.png")}
          style={styles.logo}
        />
        <Text style={theme.textVariant.header}>Clue-a-Palooza</Text>
      </View>
      <Text style={theme.textVariant.header}>Ongoing Hunts</Text>
      <FlatList
        data={DATA.HUNTS}
        renderItem={({ item }) => {
          return (
            <Card>
              <TouchableOpacity
                style={styles.cardContainer}
                onPress={() =>
                  navigation.navigate("Hunt", {
                    questions: item.questions,
                    title: item.title,
                    answer: item.answer,
                  })
                }
              >
                <Image
                  source={require("../assets/logo_notext.png")}
                  style={{ width: 100, height: 100 }}
                />
                <View style={{ marginTop: 20 }}>
                  <Text style={[theme.textVariant.regular, styles.text]}>
                    {item.title}
                  </Text>
                  <Text style={[theme.textVariant.description, styles.text]}>
                    Status: In progress
                  </Text>
                </View>
              </TouchableOpacity>
            </Card>
          );
        }}
      />
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    paddingTop: "1rem",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: "1rem",
  },
  logo: {
    height: 150,
    width: 150,
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "60%",
  },
  text: {
    marginTop: 10,
    textAlign: "center",
  },
});

export default Home;

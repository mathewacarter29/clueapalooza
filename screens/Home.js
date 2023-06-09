import React from "react";
import { View, Image } from "react-native";
import Text from "../common/Text";
import EStyleSheet from "react-native-extended-stylesheet";
import { theme } from "../theme";

function Home() {
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
});

export default Home;

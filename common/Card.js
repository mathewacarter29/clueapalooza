import React from "react";
import { Card as C } from "@rneui/themed";
import EStyleSheet from "react-native-extended-stylesheet";
import { theme } from "../theme";

function Card(props) {
  return <C containerStyle={styles.card}>{props.children}</C>;
}

const styles = EStyleSheet.create({
  card: {
    borderRadius: 25,
    backgroundColor: theme.colors.primary,
  },
});

export default Card;

import React from "react";
import { Card as C } from "@rneui/themed";
import EStyleSheet from "react-native-extended-stylesheet";
import { theme } from "../theme";

function Card(props) {
  return (
    <C
      containerStyle={[
        styles.card,
        typeof props.highlight === "undefined"
          ? styles.primary
          : styles.highlight,
        { ...props.style },
      ]}
    >
      {props.children}
    </C>
  );
}

const styles = EStyleSheet.create({
  card: {
    borderRadius: 25,
  },
  primary: {
    backgroundColor: theme.colors.primary,
  },
  highlight: {
    backgroundColor: theme.colors.highlight,
  },
});

export default Card;

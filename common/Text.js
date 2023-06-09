import { Text as DefaultText } from "react-native";
import { useFonts } from "expo-font";

function Text(props) {
  const [loaded] = useFonts({
    Ubuntu: require("../assets/fonts/Ubuntu-Regular.ttf"),
    Ubuntu_Bold: require("../assets/fonts/Ubuntu-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const styles =
    typeof props.style.fontWeight === "undefined" ? "Ubuntu" : "Ubuntu_Bold";

  return (
    <DefaultText
      style={{
        fontFamily:
          typeof props.style.fontWeight === "undefined"
            ? "Ubuntu"
            : "Ubuntu_Bold",
        ...props.style,
      }}
    >
      {props.children}
    </DefaultText>
  );
}

export default Text;

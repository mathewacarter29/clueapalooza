import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

function BackButton() {
  const navigation = useNavigation();

  return (
    <View>
      <Icon
        name="arrow-left"
        backgroundColor={"#EAEAEA"}
        color={"black"}
        size={50}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

export default BackButton;

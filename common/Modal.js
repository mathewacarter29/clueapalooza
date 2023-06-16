import { TouchableOpacity, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Modal(props) {
  return (
    <TouchableOpacity
      style={styles.background}
      onPress={() => props.setVisible(false)}
    >
      <TouchableOpacity style={styles.modal} activeOpacity={1}>
        <View style={styles.x}>
          <Icon
            name="close"
            backgroundColor={"#EAEAEA"}
            color={"black"}
            size={50}
            onPress={() => props.setVisible(false)}
          />
        </View>
        {props.children}
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = EStyleSheet.create({
  background: {
    zIndex: 100,
    backgroundColor: "rgba(192, 192, 192, 0.5)",
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    borderRadius: 25,
    backgroundColor: "#EAEAEA",
    padding: "1rem",
    width: "90%",
  },
  x: {
    position: "absolute",
    top: 0,
    right: 0,
    borderRadius: 25,
    overflow: "hidden",
    zIndex: 101,
  },
});

export default Modal;

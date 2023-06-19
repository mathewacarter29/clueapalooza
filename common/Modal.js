import {
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Modal as RNModal,
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Modal(props) {
  return (
    <RNModal transparent visible={props.visible}>
      <TouchableOpacity
        style={styles.background}
        onPress={() => props.setVisible(false)}
      >
        <TouchableWithoutFeedback>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.x}
              onPress={() => props.setVisible(false)}
            >
              <Icon
                name="close"
                backgroundColor={"#EAEAEA"}
                color={"black"}
                size={50}
              />
            </TouchableOpacity>
            <View>{props.children}</View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </RNModal>
  );
}

const styles = EStyleSheet.create({
  background: {
    backgroundColor: "rgba(192, 192, 192, 0.5)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "#EAEAEA",
    borderRadius: 25,
    padding: "1rem",
    maxHeight: "80%",
  },
  x: {
    position: "absolute",
    top: 0,
    right: 0,
    borderRadius: 25,
    overflow: "hidden",
  },
});

export default Modal;

import {
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Modal as RNModal,
  ScrollView,
  Dimensions,
  PixelRatio,
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useState } from "react";

function Modal(props) {
  const [scrollable, setScrollable] = useState(false);
  return (
    <RNModal transparent visible={props.visible}>
      <TouchableOpacity
        style={styles.background}
        onPress={() => props.hideModal()}
      >
        <TouchableWithoutFeedback>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.x}
              onPress={() => props.hideModal()}
            >
              <Icon
                name="close"
                backgroundColor={"#EAEAEA"}
                color={"black"}
                size={50}
              />
            </TouchableOpacity>
            <ScrollView
              scrollEnabled={scrollable}
              // This function will make the modal scrollable if the children reach the max height (80% - margins)
              onLayout={(event) => {
                setScrollable(
                  event.nativeEvent.layout.height >=
                    Dimensions.get("window").height * 0.8 - 16 * 2
                );
              }}
            >
              <TouchableWithoutFeedback>
                {props.children}
              </TouchableWithoutFeedback>
            </ScrollView>
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
    padding: 16,
    maxHeight: "80%",
  },
  x: {
    position: "absolute",
    top: 0,
    right: 0,
    borderRadius: 25,
    overflow: "hidden",
    zIndex: 1,
  },
});

export default Modal;

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Item({ task, index, select }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.textMsg}>{task}</Text>
      <Text
        onPress={() => {
          select(index);
        }}
        style={styles.trashCont}
      >
        <FontAwesomeIcon style={styles.trash} icon={faTrashAlt} />
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#002",
    padding: 9,
    margin: 5,
    borderRadius: 8,
  },
  textMsg: {
    fontSize: 19,
    color: "#fff",
  },
  trash: {
    color: "#fff"
  },
  trashCont: {
    position: "absolute",
    top: '50%',
    right: 13,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

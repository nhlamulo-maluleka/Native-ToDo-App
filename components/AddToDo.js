import { useState, useRef } from "react";
import {
    Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function AddTodo({ add }) {
  const [todo, setToDo] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(text) => {
          setToDo(text);
        }}
        value={todo}
        style={styles.txtInput}
        placeholder="Add your to-do..."
        placeholderTextColor={'grey'}
      ></TextInput>
      <TouchableOpacity
        onPress={() => {
            if(todo.replace(/\s/gi, '').length == 0){
                Alert.alert(
                    "Invalid",
                    "A task cannot be empty...",
                    [
                        {
                            text: "Ok",
                            onPress: () => {}
                        }
                    ]
                )
            } else
                add(todo, setToDo);
        }}
        style={styles.btnAdd}
      >
        <Text style={styles.addTxt}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    padding: 5,
  },
  txtInput: {
    borderWidth: 2,
    width: "87%",
    borderRadius: 10,
    padding: 6,
    fontSize: 19,
    color: "#fff",
    borderColor: 'orange'
  },
  btnAdd: {
    position: "relative",
    width: 50,
    height: 45,
    borderRadius: 10,
    borderWidth: 2,
    margin: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gold",
  },
  addTxt: {
    fontWeight: "bold",
    fontSize: 28,
    color: "#000",
    textAlign: "center",
  },
});

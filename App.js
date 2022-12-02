import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import AddTodo from "./components/AddToDo";
import Item from "./components/Item";

export default function App() {
  const [todos, setTasks] = useState([]);

  const addToDo = (v, reset) => {
    setTasks([...todos, v]);
    reset('');
  };

  const confirmDelete = (index) => {
    Alert.alert(
      "Delete", 
      "Are you sure you want to delete this task?",
      [
        {
          text: "No",
          onPress: () => {console.log("Okay")}
        },
        {
          text: "Yes",
          onPress: () => setTasks(todos.filter((v, pos) => pos !== index))
        }        
      ]
      )
  }

  const selected = (index) => {
    confirmDelete(index)
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        {todos.map((value, index) => {
          return <Item task={value} index={index} key={index} select={selected}/>;
        })}
      </ScrollView>
      <AddTodo add={addToDo} />
      <StatusBar style="dark"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25
  },
  scroll: {
    backgroundColor: "darkgrey",
  },
});

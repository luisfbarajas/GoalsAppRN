import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";
import { useState } from "react";
import { IGoalInput } from "../types/ComponentsPropsInterface";

function GoalInput({ onAddGoalHandler, visible, endAddGoalHandler}: IGoalInput) {
  const [enteredGoalText, setEnteredGoalText] = useState<string>("");

  function goalInputHandle(enteredText: string) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    onAddGoalHandler(enteredGoalText);
    setEnteredGoalText("");
  }
  function modalHandler(){
    endAddGoalHandler();
  }
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/Images/goal.png')} style={styles.image}/>
        <TextInput
          style={styles.testInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandle}
          value={enteredGoalText}
        />
        <View style={styles.bottonView}>
          <View style={styles.buttons}>
            <Button title="Cancel" onPress={modalHandler} color='#f31282' />
          </View>
          <View style={styles.buttons}>
            <Button title="Add Goal" onPress={addGoalHandler} color='#b180f0'/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  image:{
    width:100,
    height:100,
    margin:20
  },
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding:16,
    backgroundColor:'#311b6b'
  },
  testInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor:'#e4d0ff',
    width: "100%",
    marginRight: 8,
    padding: 16,
    borderRadius:6,
    color:'#120438'
  },
  bottonView: {
    flexDirection: "row",
    padding:8
  },
  buttons:{
    width:100,
    marginHorizontal:8
  }
});

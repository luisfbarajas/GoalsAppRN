import { useState } from "react";
import { StyleSheet, View, FlatList, Button} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modalVisible,setModalVisible,] = useState<boolean>(false);
  const [courseGoals, setCurseGoals] = useState<{ text: string; id: string }[]>([]);

function startAddGoalHandler(){
  setModalVisible(true);
}
function endAddGoalHandler(){
  setModalVisible(false);
}

function addGoalHandler(enteredGoalText: string) {
    console.log("Button pressed. Current goal text:", enteredGoalText); // Este valor podría no estar actualizado inmediatamente
    setCurseGoals((courrentCourseGoals) => [
      ...courrentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id: string) {

    setCurseGoals(currentCourseGoals =>{
      return currentCourseGoals.filter((goal)=> goal.id !== id);
    })
  }


  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button title="Add new Goal" color="#a065ec" onPress={startAddGoalHandler}/>
      <GoalInput onAddGoalHandler={addGoalHandler} visible={modalVisible} endAddGoalHandler={endAddGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemDAta) => {          
            return <GoalItem text={itemDAta.item.text}  id={itemDAta.item.id} onDeleteItem={deleteGoalHandler}/>;
          }}
          keyExtractor={(item, index) => {
            return item.id.toString();
          }}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 60,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
  },
  testInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 4,
  },
});

import { StyleSheet, View, Text, Pressable } from "react-native";
import { IGoalItemProps } from "../types/ComponentsPropsInterface";

function GoalItem({ text, id ,onDeleteItem }: IGoalItemProps) {

    function deleteItemHandler(){
       onDeleteItem(id); 
    }

  return (
    <Pressable onPress={deleteItemHandler} android_ripple={{color: '#dddddd'}} 
    style={({pressed}) => pressed && styles.pressedItem}>
      <View style={styles.golaItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  golaItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  goalText: {
    color: "white",
    padding:8
  },
  rippleEfect:{
    color: "#dddddd"
  },
  pressedItem:{
    opacity:0.5,
  }
});

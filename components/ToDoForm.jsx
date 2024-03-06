import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';

function ToDoForm({addTask}) {
  const [taskText, setTaskText] = React.useState('');
  return (

<View style={{flexDirection: 'row'}}>

<View><TextInput
  style={styles.input}
  placeholder="Add a new task..."
  onChangeText={(text) => setTaskText(text)}
  value={taskText}
/></View>
{/* 
      <View style={[styles.task, styles.completed]}>
        <Text style={styles.taskText}>Do laundry</Text>
      </View>

      <View style={[styles.task]}>
        <Text style={styles.taskText}>Go to gym</Text>
      </View>

      <View style={[styles.task, styles.completed]}>
        <Text style={styles.taskText}>Walk dog</Text>
      </View> */}
      <Button 
      title="Add Task" onPress={() => addTask(taskText)} />
</View>

  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});
export default ToDoForm;
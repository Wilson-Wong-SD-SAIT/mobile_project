import React from 'react';
import ToDoList from '../components/ToDoList';
import {useState} from 'react';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';
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


function HomeScreen({ navigation }) {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
      ]);
    
      const addTask = (taskText) => {
        setTasks([...tasks, taskText]);
      };
    
      const removeTask = () => {
        let newTasks = [...tasks];
        newTasks.pop(); // pop the last task off the array
        setTasks(newTasks); 
      }
    

    return (
      <MainLayout>
        <SafeAreaView>        
        
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} removeTask={removeTask}/>
        <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
        />
        </SafeAreaView>
</MainLayout>
      
    );
}
export default HomeScreen;
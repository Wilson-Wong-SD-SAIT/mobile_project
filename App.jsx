/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import SingleScreen from './src/screens/SingleScreen';
import MultiScreen from './src/screens/MultiScreen';
import SettingScreen from './src/screens/SettingScreen';
import StatsScreen from './src/screens/StatsScreen';
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
import {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>

<Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Single" component={SingleScreen} />
        <Stack.Screen name="Multi" component={MultiScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="Stats" component={StatsScreen} />
      </Stack.Navigator>

  {/* <ToDoList tasks={tasks} />
  <ToDoForm addTask={addTask} removeTask={removeTask}/> */}
  
    </NavigationContainer>
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
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  name: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  date: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default App;

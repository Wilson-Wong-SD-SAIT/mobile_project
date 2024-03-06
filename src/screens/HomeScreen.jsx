import React from 'react';
import {useState} from 'react';
import MainLayout from '../layouts/MainLayout';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  Image
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

      const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        image: {
          width: 300, // Set the width and height as desired
          height: 300,
        },
        buttonContainer: {
          marginTop: 10, // Adds space above the button
          width: '80%', // Set the width of the buttons
        },

      });
    

    return (
      <MainLayout>
        <SafeAreaView style={styles.container}>        
        <Image
        source={require('../icon.jpg')}
        style={styles.image}
      />

<View style={styles.buttonContainer}>
          <Button 
            title="About"
            onPress={() => navigation.navigate('About')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button 
            title="Single Player"
            onPress={() => navigation.navigate('Single')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button 
            title="Multiplayer"
            onPress={() => navigation.navigate('Multi')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button 
            title="Statistics"
            onPress={() => navigation.navigate('Stats')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button 
            title="Setting"
            onPress={() => navigation.navigate('Setting')}
          />
        </View>
        </SafeAreaView>

</MainLayout>
      
    );
}
export default HomeScreen;
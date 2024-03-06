 //Create a AboutScreen.js component which displays the name of the app, your name, and the current date.
 import React from 'react';
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

 function AboutScreen() {
  const styles = StyleSheet.create({
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
   return (
    <MainLayout>
     <SafeAreaView>

       <Text style={styles.title}>To Do App</Text>
       <Text style={styles.name}>By: Simon Chan</Text>
       <Text style={styles.date}>{new Date().toDateString()}</Text>

     </SafeAreaView>
     </MainLayout>
   );
 }
export default AboutScreen;
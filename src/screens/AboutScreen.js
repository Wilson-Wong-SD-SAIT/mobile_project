import React from 'react';
import MainLayout from '../layouts/MainLayout';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

function AboutScreen() {
  return (
    <MainLayout>
      <View style={styles.content}>
        <Text style={styles.title}>Tic Tac Toe Game</Text>
        <Image
          source={require('../hongkong.jpg')}
          style={styles.image}
        />
        <Text style={styles.date}>
          We are a group of programming enthusiasts from Hong Kong who love creating engaging and fun applications. Our passion for coding and problem-solving drives us to develop innovative solutions and bring joy to our users.
        </Text>
        <Text style={styles.date}>{new Date().toDateString()}</Text>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  date: {
    fontSize: 16,
    textAlign: 'center',
    color: 'gray',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default AboutScreen;
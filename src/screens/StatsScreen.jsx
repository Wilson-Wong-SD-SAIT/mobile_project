import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { getGameStats } from './GameStats';
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

function StatsScreen() {
  const stats = getGameStats();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    gridItem: {
      width: '48%',
      backgroundColor: '#f0f0f0',
      padding: 20,
      borderRadius: 10,
      marginBottom: 20,
      alignItems: 'center',
    },
    statLabel: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      color: '#333333',
    },
    statValue: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333333',
    },
  });

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Game Statistics</Text>
        <View style={styles.grid}>
          <View style={styles.gridItem}>
            <Text style={styles.statLabel}>Games Played</Text>
            <Text style={styles.statValue}>{stats.gamesPlayed}</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.statLabel}>Wins</Text>
            <Text style={styles.statValue}>{stats.wins}</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.statLabel}>Losses</Text>
            <Text style={styles.statValue}>{stats.losses}</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.statLabel}>Draws</Text>
            <Text style={styles.statValue}>{stats.draws}</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.statLabel}>Win Percentage</Text>
            <Text style={styles.statValue}>{stats.winPercentage}%</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.statLabel}>Draw Percentage</Text>
            <Text style={styles.statValue}>{stats.drawPercentage}%</Text>
          </View>
        </View>
      </View>
    </MainLayout>
  );
}

export default StatsScreen;
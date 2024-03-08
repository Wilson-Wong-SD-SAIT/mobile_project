// Store and manage game statistics

import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'gameStats';

let gameStats = {
  gamesPlayed: 0,
  wins: 0,
  losses: 0,
  draws: 0,
  soundVolume: 1,
};

export const setSoundVolume = async (volume) => {
  gameStats.soundVolume = volume;
  await saveGameStats();
};

export const getSoundVolume = () => {
  return gameStats.soundVolume;
};

const saveGameStats = async () => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(gameStats));
  } catch (error) {
    console.log('Error saving game stats:', error);
  }
};

const loadGameStats = async () => {
  try {
    const savedStats = await AsyncStorage.getItem(STORAGE_KEY);
    if (savedStats !== null) {
      gameStats = JSON.parse(savedStats);
    }
  } catch (error) {
    console.log('Error loading game stats:', error);
  }
};

export const incrementGamesPlayed = async () => {
  gameStats.gamesPlayed++;
  await saveGameStats();
};

export const incrementWins = async () => {
  gameStats.wins++;
  await saveGameStats();
};

export const incrementLosses = async () => {
  gameStats.losses++;
  await saveGameStats();
};

export const incrementDraws = async () => {
  gameStats.draws++;
  await saveGameStats();
};

export const getGameStats = () => {
  const winPercentage = gameStats.gamesPlayed > 0 ? (gameStats.wins / gameStats.gamesPlayed) * 100 : 0;
  const drawPercentage = gameStats.gamesPlayed > 0 ? (gameStats.draws / gameStats.gamesPlayed) * 100 : 0;

  return {
    ...gameStats,
    winPercentage: winPercentage.toFixed(2),
    drawPercentage: drawPercentage.toFixed(2),
  };
};

export const initializeGameStats = async () => {
  await loadGameStats();
};
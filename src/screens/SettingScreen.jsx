import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, Button } from 'react-native';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';

const SettingScreen = () => {
  const [soundEffectsEnabled, setSoundEffectsEnabled] = useState(true);
  const [volume, setVolume] = useState(50);
  const [brightness, setBrightness] = useState(50);

  const navigation = useNavigation();

  const toggleSoundEffects = () => {
    setSoundEffectsEnabled(prevState => !prevState);
  };

  const handleVolumeChange = value => {
    setVolume(Math.round(value));
  };

  const handleBrightnessChange = value => {
    setBrightness(Math.round(value));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Game Settings</Text>
      <View style={styles.settingsContainer}>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Sound Effects</Text>
          <Switch
            value={soundEffectsEnabled}
            onValueChange={toggleSoundEffects}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={soundEffectsEnabled ? '#f5dd4b' : '#f4f3f4'}
          />
        </View>
        <View style={styles.sliderContainer}>
          <Text style={styles.settingLabel}>Volume</Text>
          <View style={styles.sliderRow}>
            <Slider
              value={volume}
              style={styles.slider}
              minimumValue={0}
              maximumValue={100}
              minimumTrackTintColor="#4CAF50"
              maximumTrackTintColor="#BDBDBD"
              thumbTintColor="#4CAF50"
              onValueChange={handleVolumeChange}
            />
            <Text style={styles.valueText}>{volume}%</Text>
          </View>
        </View>
        <View style={styles.sliderContainer}>
          <Text style={styles.settingLabel}>Screen Brightness</Text>
          <View style={styles.sliderRow}>
            <Slider
              value={brightness}
              style={styles.slider}
              minimumValue={0}
              maximumValue={100}
              minimumTrackTintColor="#FFC107"
              maximumTrackTintColor="#BDBDBD"
              thumbTintColor="#FFC107"
              onValueChange={handleBrightnessChange}
            />
            <Text style={styles.valueText}>{brightness}%</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Home"
          onPress={() => navigation.navigate('Home')}
          color="#2196F3"
        />
        <Button
          title="Play"
          onPress={() => navigation.navigate('Single')}
          color="#4CAF50"
        />
        <Button
          title="Statistics"
          onPress={() => navigation.navigate('Stats')}
          color="#9C27B0"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
    textAlign: 'center',
  },
  settingsContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sliderContainer: {
    marginBottom: 20,
  },
  sliderRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingLabel: {
    fontSize: 18,
    color: '#333333',
    marginBottom: 10,
  },
  slider: {
    flex: 1,
    height: 40,
  },
  valueText: {
    fontSize: 16,
    color: '#666666',
    marginLeft: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default SettingScreen;
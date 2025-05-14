// src/screens/LandingScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Landing'>;
};

export default function LandingScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to AuthApp</Text>
      <CustomButton title="Continue as User" onPress={() => navigation.navigate('UserSignin')} />
      <CustomButton title="Continue as Admin" onPress={() => navigation.navigate('AdminSignin')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F8F9FA',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 40,
    color: '#333',
  },
});

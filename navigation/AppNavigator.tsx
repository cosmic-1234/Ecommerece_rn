// src/navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from '../screens/LandingScreen';
import UserSigninScreen from '../screens/UserSigninScreen';
import UserSignupScreen from '../screens/UserSignupScreen';
import AdminSigninScreen from '../screens/AdminSigninScreen';
import AdminSignupScreen from '../screens/AdminSignupScreen';

export type RootStackParamList = {
  Landing: undefined;
  UserSignin: undefined;
  UserSignup: undefined;
  AdminSignin: undefined;
  AdminSignup: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="UserSignin" component={UserSigninScreen} />
        <Stack.Screen name="UserSignup" component={UserSignupScreen} />
        <Stack.Screen name="AdminSignin" component={AdminSigninScreen} />
        <Stack.Screen name="AdminSignup" component={AdminSignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

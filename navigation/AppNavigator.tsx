// src/navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from '../screens/LandingScreen';
import UserSigninScreen from '../screens/UserSigninScreen';
import UserSignupScreen from '../screens/UserSignupScreen';
import AdminSigninScreen from '../screens/AdminSigninScreen';
import AdminSignupScreen from '../screens/AdminSignupScreen';
import UserHomeScreen from '../screens/UserHomeScreen'
import CartScreen from '../screens/CartScreen'
import AdminHomeScreen from '../screens/AdminHomeScreen';

export type RootStackParamList = {
  Landing: undefined;
  UserSignin: undefined;
  UserSignup: undefined;
  AdminSignin: undefined;
  AdminSignup: undefined;
  UserHomeScreen: undefined;
  Cart: undefined;
  AdminHomeScreen: undefined;
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
        <Stack.Screen name="UserHomeScreen" component={UserHomeScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="AdminHomeScreen" component={AdminHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

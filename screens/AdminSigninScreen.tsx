import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { sharedStyles as styles } from '../styles/shared.ts';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { API_KEY } from '@env';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'UserSignin'>;
};

export default function AdminSigninScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validate = (): boolean => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError('Invalid email');
      return false;
    }
    if (!password) {
      setError('Password required');
      return false;
    }
    setError('');
    return true;
  };

  const handleSignin = async () => {
    if (validate()) {
      try {
  
        const res = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, returnSecureToken: true }),
          }
        );
  
  
        const data = await res.json();
  
        if (res.status === 200) {
          console.log({ email, password });
          navigation.navigate('AdminHomeScreen');
        } else if (res.status === 400) {
          const errorMsg = data?.error?.message || 'Signup failed';
          setError(`Signup failed: ${errorMsg}`);
        } else {
          setError('Something went wrong. Please try again.');
        }
  
      } catch (err) {
        console.error('Signup error:', err);
        setError('Network error. Please try again later.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Admin Sign In</Text>
        <CustomInput placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
        <CustomInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <CustomButton title="Sign In" onPress={handleSignin} />
        <Text style={styles.link} onPress={() => navigation.navigate('AdminSignup')}>
          Don't have an account? Sign up
        </Text>
      </View>
    </View>
  );
}



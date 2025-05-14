import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { sharedStyles as styles } from '../styles/shared.ts';
import { API_KEY } from '@env';

export default function UserSignupScreen({ navigation }: any) {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validate = (): boolean => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!username || !phone || !email || !password) {
      setError('All fields are required');
      return false;
    }
    if (!emailRegex.test(email)) {
      setError('Invalid email');
      return false;
    }
    setError('');
    return true;
  };

  const handleSignup = async () => {
    if (validate()) {
      try {
  
        const res = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, returnSecureToken: true }),
          }
        );
  
  
        const data = await res.json();
  
        if (res.status === 200) {
          console.log({ username, phone, email, password });
          navigation.navigate('UserHomeScreen');
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
        <Text style={styles.title}>User Sign Up</Text>
        <CustomInput placeholder="Username" value={username} onChangeText={setUsername} />
        <CustomInput placeholder="Phone Number" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
        <CustomInput placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
        <CustomInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <CustomButton title="Sign Up" onPress={handleSignup} />
        <Text style={styles.link} onPress={() => navigation.navigate('UserSignin')}>
          Already have an account? Sign in
        </Text>
      </View>
    </View>
  );
}

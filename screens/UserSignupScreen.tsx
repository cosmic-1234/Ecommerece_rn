// src/screens/UserSigninScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'UserSignin'>;
};

// same imports...
export default function UserSignupScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validate = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) return setError('Invalid email');
    if (!username || !phone) return setError('Username & phone are required');
    if (password.length < 6) return setError('Password must be 6+ characters');
    setError('');
    return true;
  };

  const handleSignup = () => {
    if (validate()) {
      console.log({ email, username, phone, password });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Sign Up</Text>
      <CustomInput placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <CustomInput placeholder="Username" value={username} onChangeText={setUsername} />
      <CustomInput placeholder="Phone Number" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
      <CustomInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <CustomButton title="Sign Up" onPress={handleSignup} />
      <CustomButton title="Go to Sign In" onPress={() => navigation.navigate('UserSignin')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center', backgroundColor: '#F4F7FB' },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 24 },
  error: { color: 'red', marginTop: 4, textAlign: 'center' },
});

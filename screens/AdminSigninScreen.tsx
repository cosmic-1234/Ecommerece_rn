import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'UserSignin'>;
};

export default function AdminSigninScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validate = () => {
    if (!/\S+@\S+\.\S+/.test(email)) return setError('Invalid email');
    if (!password) return setError('Password required');
    setError('');
    return true;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Login</Text>
      <CustomInput placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <CustomInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <CustomButton title="Sign In" onPress={() => validate() && console.log({ email, password })} />
      <CustomButton title="Go to Sign Up" onPress={() => navigation.navigate('AdminSignup')} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center', backgroundColor: '#F4F7FB' },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 24 },
  error: { color: 'red', marginTop: 4, textAlign: 'center' },
});


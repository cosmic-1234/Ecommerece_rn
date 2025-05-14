import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'UserSignin'>;
};

export default function UserSigninScreen({ navigation }: Props) {
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
  

  const handleSignin = () => {
    if (validate()) {
      console.log({ email, password });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Login</Text>
      <CustomInput placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <CustomInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <CustomButton title="Sign In" onPress={handleSignin} />
      <CustomButton title="Go to Sign Up" onPress={() => navigation.navigate('UserSignup')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center', backgroundColor: '#F4F7FB' },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 24 },
  error: { color: 'red', marginTop: 4, textAlign: 'center' },
});

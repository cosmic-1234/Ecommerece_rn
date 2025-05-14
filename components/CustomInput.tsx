// src/components/CustomInput.tsx
import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

type Props = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'phone-pad';
  error?: string;
};

export default function CustomInput({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType = 'default',
  error,
}: Props) {
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={[styles.input, focused && styles.focusedInput]}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholderTextColor="#888"
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 12,
    padding: 14,
    backgroundColor: '#FAFAFA',
    fontSize: 16,
  },
  focusedInput: {
    borderColor: '#4B9CD3',
    backgroundColor: '#FFF',
    shadowColor: '#4B9CD3',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  error: {
    marginTop: 4,
    color: 'red',
    fontSize: 13,
    marginLeft: 5,
  },
});

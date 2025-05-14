import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Text, TextInputProps } from 'react-native';

interface Props extends TextInputProps {
  error?: string;
}

export default function CustomInput({ error, style, ...props }: Props) {
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={[styles.input, focused && styles.focusedInput, style]}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholderTextColor="#888"
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  input: {
    borderWidth: 1.5,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
    color: '#333',
  },
  focusedInput: {
    borderColor: '#007bff',
    backgroundColor: '#fff',
  },
  error: {
    marginTop: 4,
    color: '#d9534f',
    fontSize: 13,
    marginLeft: 5,
  },
});

// src/components/CustomButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  title: string;
  onPress: () => void;
};

export default function CustomButton({ title, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonWrapper}>
      <LinearGradient
        colors={['#4B9CD3', '#007ACC']}
        style={styles.button}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {
    padding: 15,
    borderRadius: 16,
    width: '100%',
    alignItems: 'center',
    elevation: 2,
  },
  text: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

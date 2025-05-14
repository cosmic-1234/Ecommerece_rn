import React from 'react';
import { Text, Pressable, StyleSheet, View } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
}

export default function CustomButton({ title, onPress }: Props) {
  return (
    <View style={styles.buttonWrapper}>
      <Pressable style={({ pressed }) => [styles.button, pressed && { opacity: 0.7 }]} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    marginVertical: 12,
    overflow: 'hidden',
    borderRadius: 14,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

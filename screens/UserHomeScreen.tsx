import React, { useState } from 'react';
import { View, Text, FlatList, Image, Pressable, StyleSheet } from 'react-native';
import { Product } from '../types';

const mockProducts: Product[] = [
  { id: 1, title: 'Wireless Headphones', price: 99.99, image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Smart Watch', price: 199.99, image: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Bluetooth Speaker', price: 49.99, image: 'https://via.placeholder.com/150' },
  { id: 4, title: 'Running Shoes', price: 89.99, image: 'https://via.placeholder.com/150' },
  { id: 5, title: 'Sunglasses', price: 59.99, image: 'https://via.placeholder.com/150' },
];

export default function UserHomeScreen() {
  const [cart, setCart] = useState<number[]>([]);

  const handleAddToCart = (productId: number) => {
    setCart(prev => [...prev, productId]);
  };

  const renderItem = ({ item }: { item: Product }) => {
    const isInCart = cart.includes(item.id);
    return (
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        <Pressable
          style={[styles.button, isInCart && styles.inCartButton]}
          onPress={() => handleAddToCart(item.id)}
        >
          <Text style={styles.buttonText}>{isInCart ? 'Added' : 'Add to Cart'}</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to ShopEase!</Text>
      <FlatList
        data={mockProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7fc',
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    height: 150,
    borderRadius: 10,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  price: {
    fontSize: 14,
    color: '#555',
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  inCartButton: {
    backgroundColor: '#28a745',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

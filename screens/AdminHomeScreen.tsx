import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';

type Product = {
  id: number;
  title: string;
  price: string;
  image: string;
  description: string;
};

export default function AdminHomeScreen() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [focused, setFocused] = useState('');

  const handleAddProduct = () => {
    if (!title || !price || !image || !description) return;

    const newProduct: Product = {
      id: Date.now(),
      title,
      price,
      image,
      description,
    };

    setProducts(prev => [newProduct, ...prev]);
    setTitle('');
    setPrice('');
    setImage('');
    setDescription('');
  };

  const renderProduct = ({ item }: { item: Product }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
      <Text style={styles.productDesc}>{item.description}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f4f7fc" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
          <Text style={styles.header}>🛠️ Add New Product</Text>

          <TextInput
            value={title}
            onChangeText={setTitle}
            placeholder="Product Title"
            style={[styles.input, focused === 'title' && styles.inputFocused]}
            onFocus={() => setFocused('title')}
            onBlur={() => setFocused('')}
          />
          <TextInput
            value={price}
            onChangeText={setPrice}
            placeholder="Price (e.g., 49.99)"
            keyboardType="decimal-pad"
            style={[styles.input, focused === 'price' && styles.inputFocused]}
            onFocus={() => setFocused('price')}
            onBlur={() => setFocused('')}
          />
          <TextInput
            value={image}
            onChangeText={setImage}
            placeholder="Image URL"
            style={[styles.input, focused === 'image' && styles.inputFocused]}
            onFocus={() => setFocused('image')}
            onBlur={() => setFocused('')}
          />
          <TextInput
            value={description}
            onChangeText={setDescription}
            placeholder="Description"
            multiline
            numberOfLines={3}
            style={[styles.input, styles.textarea, focused === 'description' && styles.inputFocused]}
            onFocus={() => setFocused('description')}
            onBlur={() => setFocused('')}
          />

          <Pressable onPress={handleAddProduct} style={styles.button}>
            <Text style={styles.buttonText}>Add Product</Text>
          </Pressable>

          <Text style={styles.subheader}>📦 Product List</Text>
          {products.length === 0 ? (
            <Text style={styles.emptyText}>No products added yet.</Text>
          ) : (
            <FlatList
              data={products}
              renderItem={renderProduct}
              keyExtractor={item => item.id.toString()}
              scrollEnabled={false}
              contentContainerStyle={{ paddingBottom: 20 }}
            />
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7fc',
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  subheader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginTop: 30,
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  inputFocused: {
    borderColor: '#007bff',
    shadowColor: '#007bff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  textarea: {
    textAlignVertical: 'top',
    height: 80,
  },
  button: {
    backgroundColor: '#28a745',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    marginBottom: 16,
    elevation: 3,
  },
  productImage: {
    height: 150,
    width: '100%',
    borderRadius: 10,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
  },
  productPrice: {
    fontSize: 14,
    color: '#28a745',
    marginTop: 4,
  },
  productDesc: {
    fontSize: 13,
    color: '#555',
    marginTop: 6,
  },
  emptyText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
    marginTop: 10,
  },
});

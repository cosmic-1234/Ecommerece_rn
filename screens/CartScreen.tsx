import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
} from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type RootStackParamList = {
  Cart: { cartItems: Product[] };
  UserHome: undefined;
};

type CartRouteProp = RouteProp<RootStackParamList, 'Cart'>;
type NavProp = StackNavigationProp<RootStackParamList, 'Cart'>;

export default function CartScreen() {
  const route = useRoute<CartRouteProp>();
  const navigation = useNavigation<NavProp>();
  const { cartItems } = route.params;

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f4f7fc" />
      <Text style={styles.header}>🛒 Your Cart</Text>

      {cartItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your cart is empty 😔</Text>
          <Pressable
            onPress={() => navigation.navigate('UserHome')}
            style={styles.backButton}
          >
            <Text style={styles.backButtonText}>← Go back shopping</Text>
          </Pressable>
        </View>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
          <View style={styles.totalBox}>
            <Text style={styles.totalText}>Total: ${total.toFixed(2)}</Text>
            <Pressable style={styles.checkoutButton}>
              <Text style={styles.checkoutText}>Proceed to Checkout</Text>
            </Pressable>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7fc',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
  },
  backButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 2,
  },
  image: {
    height: 60,
    width: 60,
    marginRight: 12,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  price: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  totalBox: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 4,
    alignItems: 'center',
    marginTop: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
    marginBottom: 12,
  },
  checkoutButton: {
    backgroundColor: '#28a745',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
  },
  checkoutText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

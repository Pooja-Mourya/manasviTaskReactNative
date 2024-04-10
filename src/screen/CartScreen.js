import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../assets/Colors';
import CustomHeader from '../component/CustomHeader';
import CustomButton from '../component/CustomButton';

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const storedCartItems = await AsyncStorage.getItem('cartItems');
      if (storedCartItems) {
        // Parse and set the cart items
        setCartItems(JSON.parse(storedCartItems));
      }
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  console.log("cartItems : ", cartItems)
  const updateCartItems = async updatedCartItems => {
    try {
      await AsyncStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      setCartItems(updatedCartItems);
    } catch (error) {
      console.error('Error updating cart items:', error);
    }
  };

  const removeItem = async index => {
    const updatedCartItems = [...cartItems.slice(0, index), ...cartItems.slice(index + 1)];
    updateCartItems(updatedCartItems);
  };

  const incrementQuantity = itemId => {
    const updatedCartItems = cartItems.map((item, index) => {
      if (item.id === itemId) {
        return {...item, quantity: item.quantity + 1};
      }
      return item;
    });
    updateCartItems(updatedCartItems);
  };

  const decrementQuantity = itemId => {
    const updatedCartItems = cartItems.map((item, index) => {
      if (item.id === itemId && item.quantity > 1) {
        return {...item, quantity: item.quantity - 1};
      }
      return item;
    });
    updateCartItems(updatedCartItems);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0,
    );
  };

  return (
    <>
      <CustomHeader title="Cart" />
      <View style={styles.container}>
        {cartItems.map((item, index) => (
          <View key={item.id} style={styles.itemContainer}>
            <Image source={{uri: item.image}} style={styles.image} />
            <View style={styles.itemInfo}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
              <View style={styles.quantityButtons}>
                <TouchableOpacity
                  onPress={() => incrementQuantity(item.id)}
                  style={styles.button}>
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => decrementQuantity(item.id)}
                  style={styles.button}>
                  <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => removeItem(index)}
                  style={[styles.button, {backgroundColor: Colors.red}]}>
                  <Text style={styles.buttonText}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
        <View style={styles.footer}>
          <Text>Total Items: {getTotalItems()}</Text>
          <Text>Total Price: ${getTotalPrice().toFixed(2)}</Text>
          <CustomButton
            title="Buy Now"
            onPress={() => console.log('Buy Now pressed')}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
    resizeMode:'contain'
  },
  itemInfo: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  quantity: {
    fontSize: 16,
    marginBottom: 5,
  },
  quantityButtons: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: Colors.blue,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default CartScreen;

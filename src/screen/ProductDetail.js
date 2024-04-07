import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Colors from '../assets/Colors';
import CustomHeader from '../component/CustomHeader';
import CustomButton from '../component/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage'

const ProductDetail = ({ route, navigation }) => {
  const { product } = route.params;
  const [cartItems, setCartItems] = useState([]);

  const addToCart = async () => {
    try {
      const existingCartItems = await AsyncStorage.getItem('cartItems');
      const parsedExistingCartItems = existingCartItems ? JSON.parse(existingCartItems) : [];
      const updatedCartItems = [...parsedExistingCartItems, product];
      
      await AsyncStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      
      setCartItems(updatedCartItems);
      console.log('Item added to cart:', product);
      navigation.navigate('CartStack' , cartItems);
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  return (
    <>
      <CustomHeader title="Product Detail" />
      <View style={styles.container}>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>Price: ${product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <CustomButton
            title="Add to Cart"
            onPress={addToCart}
          />
          <CustomButton
            title="Buy Now"
            onPress={() => console.log('Buy Now pressed')}
            buttonColor={Colors.green} // Custom button color
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
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  infoContainer: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 20,
  },
});

export default ProductDetail;



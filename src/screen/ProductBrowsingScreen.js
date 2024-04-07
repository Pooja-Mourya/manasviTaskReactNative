import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';
import { createStackNavigator } from '@react-navigation/stack'; // Import stack navigator
import Colors from '../assets/Colors';
import ProductDetail from './ProductDetail'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator(); // Create a stack navigator

const allCategory = [
  {
    id: '1',
    category: 'Handbags',
  },
  {
    id: '2',
    category: 'Dresses',
  },
  {
    id: '3',
    category: 'Jewelry',
  },
  {
    id: '4',
    category: 'Electronics',
  },
  {
    id: '5',
    category: 'Woman',
  },
];

function ProductBrowsingScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
      await AsyncStorage.setItem("products", JSON.stringify(response.data)); // Store fetched products in AsyncStorage
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products?search=${searchQuery}`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error searching products:', error);
    }
  };

  const navigateToProductDetail = (product) => {
    navigation.navigate('ProductDetail', { product });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productContainer}
      onPress={() => navigateToProductDetail(item)}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text>{item.title}</Text>
      <Text>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <Stack.Navigator>
      <Stack.Screen name="ProductList" options={{ headerShown: false }}>
        {() => (
          <View style={styles.mainContainer}>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.input}
                placeholder="Search products"
                onChangeText={(text) => setSearchQuery(text)}
                value={searchQuery}
              />
              <Button title="Search" onPress={handleSearch} />
            </View>
            <View style={styles.categoryContainer}>
              <Text style={styles.allText} onPress={fetchProducts}>All</Text>
              <FlatList
                data={allCategory}
                renderItem={({ item }) => (
                  <TouchableOpacity style={styles.categoryItem}>
                    <Text style={styles.categoryText}>{item.category}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
                horizontal
              />
            </View>
            <FlatList
              data={products}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
              contentContainerStyle={styles.productList}
            />
          </View>
        )}
      </Stack.Screen>
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  productContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  allText: {
    backgroundColor: Colors.black,
    color: Colors.white,
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  categoryItem: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
  categoryText: {
    fontWeight: '600',
  },
  productList: {
    flexGrow: 1,
  },
});

export default ProductBrowsingScreen;

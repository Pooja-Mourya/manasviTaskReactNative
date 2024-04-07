import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import ProductBrowsingScreen from './src/screen/ProductBrowsingScreen';
import CartScreen from './src/screen/CartScreen';
import UserProfile from './src/screen/UserProfile';
import ProductDetail from './src/screen/ProductDetail'; // Example additional screen
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeStack" component={ProductBrowsingScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
}

function CartStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="CartStack" component={CartScreen} />
    </Stack.Navigator>
  );
}

function UserStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="UserStack" component={UserProfile} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const storedCartItems = await AsyncStorage.getItem('cartItems');
        if (storedCartItems) {
          setCartItems(JSON.parse(storedCartItems));
        }
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };
    fetchCartItems();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#e91e63',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: 'white',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Image
                style={styles.tinyLogo}
                source={require('./src/assets/icon/home.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartStack}
          options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({ color, size }) => (
              <Image
                style={styles.tinyLogo}
                source={require('./src/assets/icon/grocery-store.png')}
              />
            ),
            tabBarBadge: cartItems.length > 0 ? cartItems.length : null,
          }}
        />
        <Tab.Screen
          name="User"
          component={UserStack}
          options={{
            tabBarLabel: 'User',
            tabBarIcon: ({ color, size }) => (
              <Image
                style={styles.tinyLogo}
                source={require('./src/assets/icon/profile-user.png')}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 30,
    height: 30,
  },
});

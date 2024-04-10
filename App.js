import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Footer from './src/component/Footer';
import Home from './src/screen/home/Home'
import MainMaster from './src/screen/master/MainMaster';
import SplashScreen from './src/component/SplashScreen';
import MainLogin from './src/screen/auth/MainLogin';
import Login from './src/screen/auth/Login';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: { position: 'absolute', bottom: -48, left: 0, right: 0, backgroundColor: "#0C1B3D", borderColor: "#0C1B3D" },

    }}
    tabBar={(props) => <Footer {...props} />}
  >
    <Tab.Screen name="Dashboard" component={Home} />
    <Tab.Screen name="Master" component={MainMaster} />
    <Tab.Screen name="Report" component={Home} />
    <Tab.Screen name="Chat" component={Home} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }} >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={MainTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

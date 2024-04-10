import React, { useState, useEffect } from 'react';
import { Animated, Image, Linking, Pressable, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Login from '../auth/Login';
import * as Animatable from 'react-native-animatable';

const MainLogin = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  useEffect(() => {  
    const textRef = textRef?.bounce(8); 
    return () => textRef?.stopAnimation();
  }, []);

  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
      Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
      }).start(() => {
          navigation.navigate('Home');
      });
  }, [fadeAnim, 2000]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{ backgroundColor: '#141F35',  }}
        contentContainerStyle={styles.scrollView}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../../assets/icon/c_logo.png')} />
            <Text style={styles.title}>Login to your account</Text>
            <Text style={styles.subtitle}>Enter your details to login</Text>
          </View>
          <View style={styles.formContainer}>
            <Login />
          </View>
        </View>
          {/* <Animatable.Text
            style={{ color: 'white', marginBottom: 5 }}
            ref={(ref) => (textRef = ref)}
            animation="slideInDown" // Choose your desired animation
            duration={1000} // Adjust duration as needed
            iterationCount="infinite" // Make the animation repeat indefinitely
          >
            Loading please wait...
          </Animatable.Text> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 112,
    height: 112,
    marginVertical: 10,
  },
  title: {
    // fontFamily: 'Outfit',
    fontSize: 28,
    fontWeight: '600',
    lineHeight: 35,
    letterSpacing: 0,
    textAlign: 'center',
    color: 'white',
  },
  subtitle: {
    // fontFamily: 'Poppins',
    fontSize: 13,
    fontWeight: '300',
    lineHeight: 20,
    letterSpacing: 0.01,
    textAlign: 'center',
    color: 'white',
    paddingVertical: 10,
  },
  formContainer: {
    marginTop: 20,
    zIndex: 1,
  },
});

export default MainLogin;

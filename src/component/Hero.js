import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Hero() {
  const [user, setUser] = useState(null);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    const retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('@MySuperStore:key');
        if (value !== null) {
          const authData = JSON.parse(value);
          setUser(authData);
          console.log('authData', authData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    retrieveData();

    const scrollInterval = setInterval(() => {
      scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: false });
      setTimeout(() => {
        scrollViewRef.current?.scrollTo({ x: 80, y: 0, animated: true });
      }, 3000);
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>{user?.username.slice(0, 1)}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '75%' }}>
          <View style={styles.nameContainer}>
            <Text style={styles.username}>{user?.username}</Text>
            <Text style={styles.role}>{user?.role_Name}</Text> 
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.balance}>Available Balance</Text>
            <Text style={styles.money}>15654.24</Text>
          </View>
        </View>
      </View>
      <View style={styles.messageContainer}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          <Text style={styles.messageText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia cum itaque explicabo ab voluptates aut
            laudantium nulla ipsum minima corrupti!
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: '#141F35',
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#212A3D',
    padding: 15,
    width: "95%",
    borderRadius: 12
  },
  logoContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
  logo: {
    fontSize: 40,
    color: '#016c63',
    margin: 0,
    padding: 0,
    lineHeight: 50,
    marginTop:-6
  },
  nameContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius: 10,
    textAlign: "left"
  },
  username: {
    fontSize: 16,
    fontWeight: '400',
    color: '#fff',
  },
  role: {
    fontSize: 10,
    fontWeight: '300',
    color: '#8F9DBC',
  },
  balance: {
    fontSize: 10,
    fontWeight: '300',
    color: '#8F9DBC',
  },
  money: {
    fontSize: 20.25,
    fontWeight: '400',
    textAlign: 'right',
    color: '#F0F0F0',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 10,
    width: "94%",
    overflow: 'hidden',
    marginTop: 10,
    backgroundColor: '#212A3D',
    padding: 10,
    elevation: 10,
    shadowColor: '#8F9DBC',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  messageText: {
    color: '#8F9DBC',
    paddingHorizontal: 10,
  },
  scrollContainer: {
    paddingHorizontal: 10,
  },
});

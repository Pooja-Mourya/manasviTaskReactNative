import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable, SafeAreaView, StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { LinearGradient } from 'react-native-linear-gradient';
import Loading from "../../component/Loading";
import MainLogin from "./MainLogin";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [flag, setFlag] = useState('');
  const [psshow, setPsshow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEmailClick = () => {
    setFlag('username');
    setPsshow(false);
  };

  const handlePasswordClick = () => {
    setFlag('password');
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (username === '' || password === '') {
      // You can show an error message here
      return false;
    }
    try {
      const res = await axios.post("https://ntc98.com/api/token/auth", {
        grant_Type: "password",
        username,
        password,
      });

      console.log("res?.data", res?.data);

      if (res?.status === 200 && res?.data) {
        await AsyncStorage.setItem("@MySuperStore:key", JSON.stringify(res?.data));
        console.log("Data stored successfully!");
        setLoading(false);
        navigation.navigate('Home');
        console.log("Navigation successful!");
      } else {
        console.log("Error", res.data.message);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#F4BA00" />
      <MainLogin/>
      {loading && <Loading />}
      <TouchableOpacity
        style={[
          styles.inputParent,
          flag === 'username' && { borderColor: '#FBCE6B' },
        ]}
        onPress={handleEmailClick}
      >
        <TextInput
          value={username}
          onChangeText={(text) => setUsername(text)}
          placeholder="Username"
          placeholderTextColor={flag === 'username' ? '#FBCE6B' : '#ffffff7a'}
          style={styles.input}
          editable={flag === 'username'}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.inputParent,
          flag === 'password' && { borderColor: '#FBCE6B' },
        ]}
        onPress={handlePasswordClick}
      >
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          placeholderTextColor={flag === 'password' ? '#FBCE6B' : '#ffffff7a'}
          secureTextEntry={!psshow}
          style={styles.input}
          editable={flag === 'password'}
        />
        <Pressable style={{ position: "absolute", right: 5 }} onPress={() => setPsshow(!psshow)}>
          {/* Icon for toggling password visibility */}
        </Pressable>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.inputParent, { borderBottomWidth: 0 }]}>
        {/* Checkbox or any additional UI elements */}
      </TouchableOpacity>

      <LinearGradient
        colors={['#FBCE6B', '#D19D2C']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.button}
      >
        <Pressable style={{}} onPress={handleSubmit}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputParent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "flex-start",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 20,
    width: 300,
    borderRadius: 5,
  },
  input: {
    marginHorizontal: 10,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: "left"
  },
  button: {
    borderRadius: 15,
    padding: 15,
    width: '50%',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default Login;

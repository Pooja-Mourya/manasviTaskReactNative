import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Pressable, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const Footer = ({navigation}) => {
  const [auth, setAuth] = useState(null);
  const [dashboardScreen, setDashboardScreen] = useState(true);
  const [masterScreen, setMasterScreen] = useState(false);
  const [reportScreen, setReportScreen] = useState(false);
  const [chatScreen, setChatScreen] = useState(false);
  const [previoustoken, setPrevioustoken] = useState('');

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("@MySuperStore:key");
      if (value !== null) {
        const authData = JSON.parse(value);
        console.log("refresh_token", authData?.refresh_token);
        setPrevioustoken(authData?.refresh_token);
        setAuth(authData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getAccessToken = async () => {
    try {
      const res = await axios.post("https://ntc98.com/api/token/auth", {
        grant_type: "refresh_token",
        refresh_token: previoustoken
      });

      console.log("res?.data", res?.data);

      if (res?.status === 200 && res?.data) {
        await AsyncStorage.setItem("@MySuperStore:key", JSON.stringify(res?.data));
        console.log("Data stored successfully!");

        navigation.navigate("Dashboard");
        console.log("Navigation successful!");
      } else { 
        console.log("Error", res.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

//   useEffect(() => {
//     if (auth) {
//       getAccessToken();
//     }
//   }, [auth]);

  const handleDashboard = () => {
    setDashboardScreen(true);
    setMasterScreen(false);
    setReportScreen(false);
    setChatScreen(false);
    navigation.navigate('Dashboard');
  };

  const handleMaster = () => {
    setMasterScreen(true);
    setDashboardScreen(false);
    setReportScreen(false);
    setChatScreen(false);
    navigation.navigate('Master');
  };

  const handleReport = () => {
    setDashboardScreen(false);
    setMasterScreen(false);
    setReportScreen(true);
    setChatScreen(false);
    navigation.navigate('Report');
  };

  const handleChat = () => {
    setDashboardScreen(false);
    setMasterScreen(false);
    setReportScreen(false);
    setChatScreen(true);
    navigation.navigate('Chat');
  };

  return (
    <View style={styles.footerContainer}>

      <Pressable
        onPress={handleDashboard}
        style={[styles.iconContainer, dashboardScreen && { borderTopColor: "#D19D2C", borderTopWidth: 4, marginTop: -7, overflow: "hidden" }]}>
        {/* <MaterialIcons name="dashboard-customize" size={24} color={dashboardScreen ? "#D19D2C" : "#465267"} /> */}
        <Image style={{tintColor : reportScreen ? "#D19D2C" : "#465267"}} source={require('../assets/icon/dashboard.png')} />
        <Text style={[styles.iconText, { color: dashboardScreen ? "#D19D2C" : "#465267" }]}>Dashboard</Text>
      </Pressable>
      <Pressable
        onPress={handleMaster}
        style={[styles.iconContainer, masterScreen && { borderTopColor: "#D19D2C", borderTopWidth: 4, marginTop: -7, overflow: "hidden" }]}>
        {/* <Feather
          name="credit-card"
          size={24}
          color={masterScreen ? "#D19D2C" : "#465267"}
        /> */}
        <Image style={{tintColor : reportScreen ? "#D19D2C" : "#465267"}} source={require('../assets/icon/master.png')} />
        <Text style={[styles.iconText, { color: masterScreen ? "#D19D2C" : "#465267" }]}>Master</Text>
      </Pressable>
      <TouchableOpacity
        onPress={handleReport}
        style={[styles.iconContainer, reportScreen && { borderTopColor: "#D19D2C", borderTopWidth: 4, marginTop: -7, overflow: "hidden" }]}>
        {/* <FontAwesome5
          name="clipboard-list"
          size={24}
          color={reportScreen ? "#D19D2C" : "#465267"}
        /> */}
        <Image style={{tintColor : reportScreen ? "#D19D2C" : "#465267"}} source={require('../assets/icon/report.png')} />
        <Text style={[styles.iconText, { color: reportScreen ? "#D19D2C" : "#465267" }]}>Report</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleChat}
        style={[styles.iconContainer, chatScreen && { borderTopColor: "#D19D2C", borderTopWidth: 4, marginTop: -7, overflow: "hidden" }]}>
        {/* <Ionicons
          name="chatbox-ellipses-outline"
          size={24}
          color={chatScreen ? "#D19D2C" : "#465267"}
        /> */}
        <Image style={{tintColor : reportScreen ? "#D19D2C" : "#465267"}} source={require('../assets/icon/chat.png')} />
        <Text style={[styles.iconText, { color: chatScreen ? "#D19D2C" : "#465267" }]}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    width: "100%",
    backgroundColor: "#141F35",
    paddingVertical: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 99,
    paddingBottom: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  iconContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 10,
    borderRadius: 8,
  },
  iconText: {
    fontSize: 11,
    fontWeight: "bold",
  },
});

export default Footer;

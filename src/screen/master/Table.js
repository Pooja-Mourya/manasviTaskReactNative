import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Table() {
  const [flag, setFlag] = useState(false);
  const [flag1, setFlag1] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = await AsyncStorage.getItem("@MySuperStore:key");
        if (value !== null) {
          const authData = JSON.parse(value);
          getdata(authData?.access_token);
        } else {
          console.error("Authentication token not found.");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [data]);

  const getdata = async (authToken) => {
    try {
      const response = await axios.get('https://ntc98.com/api/Shift/GetAll?pageIndex=0&pageSize=all',
        {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });
      setData(response.data.items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

// TODO filters  
const handleActive = () => {
  setFlag(!flag);
  flag && setData(data.filter(item => item.recrdState === 'Active'));
};

const handleInactive = () => {
  setFlag1(!flag1);
  flag1 && setData(data.filter(item => item.recrdState === 'InActive'));
};

  const Toggler = ({ text, onPress, flagState }) => {
    return (
      <Pressable onPress={onPress} style={{ flexDirection: "row", color: "white", alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "#EDBE58", marginBottom: 2 }}> {text} </Text>
        {/* <Feather name={flagState ? "toggle-left" : "toggle-right"} size={24} color={flagState ? "red" : "green"} /> */}
        <Text>flag</Text>
      </Pressable>
    )
  }
  return (
    <View>
      <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: 18, borderRadius: 10 }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#0C1B3D", borderBottomWidth: 2, borderBottomColor: '#FBCE6B', width: "95%", gap: 0, borderTopEndRadius: 10, borderTopStartRadius: 10, paddingHorizontal: 20, paddingVertical: 5 }}>
          <Toggler text="Active" onPress={handleActive} flagState={flag} />
          <Toggler text="Inactive" onPress={handleInactive} flagState={flag1} />
          <Text style={{ color: "#FFFFFF33" }}>NEED HELP?</Text>
        </View>
      </View>
      <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        {data && data.map((item) => {
          const dateObj = new Date(item.openDate);
          const formattedDate = `${dateObj.getDate()}-${dateObj.getMonth() + 1}-${String(dateObj.getFullYear()).slice(-2)}`;
          const updateDateObj = new Date(item.updateDate);
          const formattedUpdateDate = `${updateDateObj.getDate()}-${updateDateObj.getMonth() + 1}-${String(updateDateObj.getFullYear()).slice(-2)} ${updateDateObj.getHours()}:${updateDateObj.getMinutes()}`;
          const formattedCreatedByName = item.createdByName ? item.createdByName.split(" ")[0] + item.createdByName.split(" ")[1].charAt(0) : "";
          return (
            <View key={item.id} style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#0C1B3D", borderBottomWidth: 0.5, width: 380, gap: 1, borderRadius: 0, paddingHorizontal: 20, paddingVertical: 5 }}>
              <Text style={{ color: "#FFFFFF", width:"5%"}}>{item.order}</Text>
              <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "space-between", width: "25%", }}>
                <Text style={{ color: "#FFFFFF" }}>{item.name}</Text>
                <Text style={{ color: "#FFFFFF33", backgroundColor: "#0D1934", paddingHorizontal: 10 }}>{formattedCreatedByName}</Text>
              </View>
              <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center",  width: "25%",}}>
                <Text style={{ color: "#FFFFFF" }}></Text>
                <Text style={{ color: "#FFFFFF33",backgroundColor: "#0D1934", paddingHorizontal: 10 }}>{item.openDate ? formattedDate : ""}</Text>
              </View> 
              <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center" , width:"12%" }}>
                <Text style={{ color: "#FFFFFF" }}></Text> 
                <Text style={{ color: "#EDBE58", backgroundColor: "#0D1934", paddingHorizontal: 10 ,  fontSize:10}}>{item.isNextDay === true ? "YES" : "NO"}</Text>
              </View>
              <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "flex-start" ,  paddingHorizontal:5,  width: "32%",}}>
                <Text style={{ color: "#FFFFFF",   fontSize:12 }}>{item?.updatedByName}</Text>
                <Text style={{ color: "#FFFFFF33" }}>{formattedUpdateDate}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

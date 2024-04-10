import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
// import { Feather } from '@expo/vector-icons';
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LedgerTable() {
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
      const response = await axios.get('https://ntc98.com/api/Ledger/GetAllLedger/0/All/%20/%20/Active?party=%20',
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
  // console.log("data", data);

  const Toggler = ({ text, onPress, flagState }) => {
    return (
      <Pressable onPress={onPress} style={{ flexDirection: "row", color: "white", alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "#EDBE58", marginBottom: 2 }}> {text} </Text>
        {/* <Feather name={flagState ? "toggle-left" : "toggle-right"} size={24} color={flagState ? "red" : "green"} /> */}
        
      </Pressable>
    )
  }

  const shifttable = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        shouldRasterizeIOS={false}
        style={{ flexDirection: 'row', backgroundColor: "#141F35" }}

      >
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#0C1B3D", borderBottomWidth: .5, minWidth: 360, borderRadius: 0, paddingHorizontal: 20, paddingVertical: 5, }}>
          <Text style={{ color: "#FFFFFF" }}>1</Text>
          <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
            <Text style={{ color: "#FFFFFF" }}>AFZ</Text>
            <Text style={{ color: "#FFFFFF33", backgroundColor: "#0D1934", paddingHorizontal: 10 }}>SGSA</Text>
          </View>
          <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
            <Text style={{ color: "#FFFFFF" }}>Fanter</Text>
            <Text style={{ color: "#FFFFFF33", backgroundColor: "#0D1934", paddingHorizontal: 10 }}>DEV</Text>
          </View>
          <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
            <Text style={{ color: "#FFFFFF" }}>95</Text>
            <Text style={{ color: "#EDBE58", backgroundColor: "#0D1934", paddingHorizontal: 10 }}>9.5</Text>
          </View>
          <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
            <Text style={{ color: "#FFFFFF" }}></Text>
            <Text style={{ color: "#EDBE58", backgroundColor: "#0D1934", paddingHorizontal: 10 }}></Text>
          </View>
          <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
            <Text style={{ color: "#FFFFFF" }}>SG Super</Text>
            <Text style={{ color: "#FFFFFF33" }}>03-15-2024</Text>
          </View>
          <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
            <Text style={{ color: "#FFFFFF" }}>SG Super</Text>
            <Text style={{ color: "#FFFFFF33" }}>03-15-2024</Text>
          </View>
        </View>
      </ScrollView>
    );
  }

  return (
    <View>
      <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: 1, borderRadius: 10 }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#0C1B3D", borderBottomWidth: 2, borderBottomColor: '#FBCE6B', width: "90%", gap: 0, borderTopEndRadius: 10, borderTopStartRadius: 10, paddingHorizontal: 20, paddingVertical: 5, borderTopWidth: .2, borderTopColor: "white" }}>
          <Toggler text="Active" onPress={() => setFlag(!flag)} flagState={flag} />
          <Toggler text="Inactive" onPress={() => setFlag1(!flag1)} flagState={flag1} />
          <Text style={{ color: "#FFFFFF33", width: "45%" }}></Text>
        </View>
      </View>

      <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      {/* {data&&data.map((item, index) => (


  <ScrollView
    key={item.id}
    horizontal
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    shouldRasterizeIOS={false}
    style={{ flexDirection: 'row', backgroundColor: "#141F35" }}
  >
    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#0C1B3D", borderBottomWidth: .5, minWidth: 360, borderRadius: 0, paddingHorizontal: 20, paddingVertical: 5 }}>
      <Text style={{ color: "#FFFFFF" }}>{index + 1}</Text>
      <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
        <Text style={{ color: "#FFFFFF" }}>{item.name}</Text>
        <Text style={{ color: "#FFFFFF33", backgroundColor: "#0D1934", paddingHorizontal: 10 }}>{item.userName}</Text>
      </View>
      <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
        <Text style={{ color: "#FFFFFF" }}>{item.groupName}</Text>
        <Text style={{ color: "#FFFFFF33", backgroundColor: "#0D1934", paddingHorizontal: 10 }}>{item.agentName}</Text>
      </View>
      <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
        <Text style={{ color: "#FFFFFF" }}>{item.daraRate}</Text>
        <Text style={{ color: "#EDBE58", backgroundColor: "#0D1934", paddingHorizontal: 10 }}>{item.daraRate}</Text>
      </View>
      <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
        <Text style={{ color: "#FFFFFF" }}></Text>
        <Text style={{ color: "#EDBE58", backgroundColor: "#0D1934", paddingHorizontal: 10 }}></Text>
      </View>
      <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
        <Text style={{ color: "#FFFFFF" }}>{item.createdByName}</Text>
        <Text style={{ color: "#FFFFFF33" }}>{item.createDate}</Text>
      </View>
      <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
        <Text style={{ color: "#FFFFFF" }}>{item.updatedByName}</Text>
        <Text style={{ color: "#FFFFFF33" }}>{item.updateDate}</Text>
      </View>
    </View>
  </ScrollView>
))} */}
{shifttable()}
{shifttable()}
{shifttable()}
{shifttable()}
{shifttable()}
{shifttable()}
{shifttable()}
{shifttable()}
{shifttable()}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

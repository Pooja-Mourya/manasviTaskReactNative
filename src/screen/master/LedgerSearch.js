import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Modal, Alert } from 'react-native';
// import { EvilIcons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import AddLedgers from './AddLedgers';


export default function LedgerSearch() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center",}}>
       <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", width: responsiveWidth (90), }}>
        <View style={{ borderColor: "#22355C", borderWidth: 1, borderRadius: 7, width: responsiveWidth(75), backgroundColor: "#0F1E3E", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: 6, marginHorizontal: "2%" }}>
          {/* <EvilIcons name="search" size={24} color="white" /> */}
          <TextInput style={{ paddingHorizontal: 10, color: "#FBCE6B" }} placeholder='Search..' placeholderTextColor='#ffffff' />
        </View>
        <Pressable onPress={() => setModalVisible(true)} style={{ borderColor: "#22355C", borderWidth: 1, borderRadius: 7, width: responsiveWidth(15), backgroundColor: "#0F1E3E", flexDirection: "row", alignItems: "center", justifyContent: "center", padding: 8, marginHorizontal: 4 }}>
          {/* <AntDesign name="plus" size={24} color="white" /> */}
        </Pressable>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalView}>
          <View
            style={{  backgroundColor: 'transparent',
            width:"100%",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            paddingBottom:10,
            marginBottom:10,
            paddingVertical:20,   borderBottomColor:"#D19D2C",
            borderBottomWidth:3,}}>
            <Text style={{textAlign:"center", color:"#F4BA00"}}></Text>
            <Text style={{textAlign:"center", color:"#F4BA00", fontSize:20, fontWeight:600}}>Add Ledger</Text>
            <Text   onPress={() => setModalVisible(!modalVisible)} style={styles.textStyle}>
                 {/* <AntDesign name="closecircleo" size={24} color="#F4BA00" /> */}
                 </Text>
          </View>
          <View style={styles.modalBody}>
      <AddLedgers />
    </View>
        </View>
      </Modal>

      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", flex: 1, width: responsiveWidth (92), marginVertical:"2%" }}>
        <View style={{ borderColor: "#22355C", borderWidth: 1, borderRadius: 7, width: responsiveWidth(40), backgroundColor: "#0F1E3E", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: 6, marginHorizontal: 0 }}>
          {/* <MaterialIcons name="view-day"  size={24} color="#E9E9E982" /> */}
          <TextInput style={{ paddingHorizontal: 10, color: "#FBCE6B" }} placeholder='Find Name..' placeholderTextColor='#E9E9E982' />
        </View>
        <View style={{ borderColor: "#22355C", borderWidth: 1, borderRadius: 7,  width: responsiveWidth(40), backgroundColor: "#0F1E3E", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: 6, marginHorizontal: 0 }}>
          {/* <MaterialIcons name="view-day"  size={24} color="#E9E9E982" /> */}
          <TextInput style={{ paddingHorizontal: 10, color: "#FBCE6B" }} placeholder='All Group..' placeholderTextColor='#E9E9E982' />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  modalView: {
    margin: 10,
    backgroundColor: "#121A2C",
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height:5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginBottom: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(4),
  },
  button: {
    backgroundColor: 'blue',
    padding: responsiveHeight(2),
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
  },
  modalBody:{
 

  }
})
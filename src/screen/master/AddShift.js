import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Pressable, } from 'react-native';
// import { Feather, Entypo, MaterialIcons } from '@expo/vector-icons';
import { InputField , DropdownField , Checkbox } from '../../component/FormComponent';
import * as Animatable from 'react-native-animatable';


const AddShift = () => {
  const [highlightedOption, setHighlightedOption] = useState(1);
  const [isChecked, setIsChecked] = useState(false);
  const [enable, setEnable] = useState(false)
  const shiftOptions = [
    { name: "Info", id: 1 },
    { name: "Time", id: 2 },
    { name: "Company Config", id: 3 },
    { name: "Enable/Disable", id: 4 }
  ];

  const handlePress = (id) => {
    setHighlightedOption(id);
  };

  return (
    <View style={styles.centeredView}>
      <ScrollView style={styles.mainContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          {shiftOptions.map((item) => (
            <TouchableOpacity key={item.id} style={{}} onPress={() => handlePress(item.id)}>
              <View style={[styles.option, { paddingHorizontal: 10 }, { borderBottomColor: highlightedOption === item.id ? '#EDBE58' : 'transparent' }]}>
                <Text style={[styles.optionText, { color: highlightedOption === item.id ? '#EDBE58' : '#ffffff' }]}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
        {highlightedOption === 1 && (
          <Animatable.View animation="slideInUp" style={{ marginVertical: 20 }}>
            <InputField label="Shift Name" text='Shift Name' type="text" id="name" />
            <DropdownField label="Shift Working For" options={["Both", "Mobile", "Web"]} />
            <Checkbox label="Next Day"
              checked={isChecked}
              onChange={setIsChecked} />
            <InputField label="Date Time Update" text='12/03/2024 09:24' type="time" id="role" />
          </Animatable.View>
        )}
        {highlightedOption === 2 && (
          <Animatable.View animation="slideInUp" style={{ marginVertical: 20 }}>
            <InputField label="Shift Date Open" text='12/03/2024 09:24' type="time" id="role" />
            <InputField label="Auditor" text='09:24' type="time" id="role" />
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <InputField style={{ width: "47%" }} label="Auditor" text='09:24' type="time" id="role" />
              <InputField style={{ width: "47%" }} label="Auditor" text='09:24' type="time" id="role" />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <InputField style={{ width: "47%" }} label="Auditor" text='09:24' type="time" id="role" />
              <InputField style={{ width: "47%" }} label="Auditor" text='09:24' type="time" id="role" />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <InputField style={{ width: "47%" }} label="Auditor" text='09:24' type="time" id="role" />
              <InputField style={{ width: "47%" }} label="Auditor" text='09:24' type="time" id="role" />
            </View>
          </Animatable.View>
        )}
        {highlightedOption === 3 && (
          <Animatable.View animation="slideInUp" style={{ marginVertical: 20 }}>
            <InputField label="Shift Name" text='Shift Name' type="text" id="name" />
            <InputField label="Shift Name" text='Shift Name' type="text" id="name" />
            <InputField label="Shift Name" text='Shift Name' type="text" id="name" />
            <InputField label="Shift Name" text='Shift Name' type="text" id="name" />
            <InputField label="Shift Name" text='Shift Name' type="text" id="name" />
            <InputField label="Shift Name" text='Shift Name' type="text" id="name" />
          </Animatable.View>
        )}
        {highlightedOption === 4 && (
          <Animatable.View animation="slideInUp" style={{ marginVertical: 20 }}>
            <View style={{ marginVertical: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text style={styles.inputLabel}>Status</Text>

              <Pressable
                onPress={() => setEnable(!enable)}
              >
                <Text>enable</Text>
                {/* <MaterialIcons name={enable ? "toggle-on" : "toggle-off"} size={84} color={enable ? "green" : "red"} /> */}
              </Pressable>
            </View>
            <View style={{ marginVertical: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text style={styles.inputLabel}>Current Status</Text>
              <Text style={styles.inputLabel}>{enable ? "Enable" : "Disable"}</Text>
            </View>
          </Animatable.View>
        )}
        {highlightedOption !== 4 ? (<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "70%", marginHorizontal: "5%" }}>
          <TouchableOpacity style={[styles.actionButton, { backgroundColor: "#FBCE6B" }]}>
            {/* <Feather name="check-square" size={24} color="black" /> */}
            <Text>checkbox</Text>
            <Text style={styles.actionButtonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, { backgroundColor: "#FFFFFF", boxShadow: '0px 0px 13.3px 0px rgba(0,0,0,0.61) inset' }]}>
            {/* <Entypo name="cross" size={24} color="black" /> */}
            <Text>cross</Text>
            <Text style={[styles.actionButtonText, { color: "#000" }]}>Clear</Text>
          </TouchableOpacity>
        </View>) : null}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,

  },
  mainContainer: {
    flex: 1,
    width: '97%',
    margin: 0,
    marginBottom: "25%"
  },
  inputContainer: {
    marginBottom: 20,

  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
    color: '#fff',
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#22355C',
    borderRadius: 7,
    padding: 10,
    color: '#FBCE6B',
    backgroundColor: "#182A4E",
    margin: 0,

  },
  actionButton: {
    backgroundColor: '#0F1E3E',
    borderRadius: 7,
    padding: 10,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between"
  },
  actionButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 5
  },
  scrollViewContent: {
    flexDirection: 'row',
    backgroundColor: "#212A3D", paddingVertical: 5, borderRadius: 20,
  },
  option: {
    borderRadius: 4,
    paddingVertical: 1,
    paddingHorizontal: 4,
    // marginHorizontal: 12,
    borderBottomWidth: 2,

  },
  optionText: {
    fontWeight: 'bold',
    fontSize: 18,

  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#212A3D",
    marginRight: 10,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  checked: {
    backgroundColor: "#212A3D",
  },
  label: {
    fontSize: 16,
    color: '#000',
  },
});

export default AddShift;

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MyCheckBox = ({ label, initialValue, onChange }) => {
  const [checked, setChecked] = useState(initialValue);

  const handleCheck = () => {
    const newValue = !checked;
    setChecked(newValue);
    onChange(newValue);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleCheck}>
      <View style={[styles.checkbox, checked && styles.checked]}>
        {/* {checked && <AntDesign name="check" size={16} color="white" />} */}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderColor: '#ffffff7a',
  },
  checked: {
    backgroundColor: '#FBCE6B',
    borderColor: '#FBCE6B',
  },
  label: {
    color: '#ffffff7a',
    fontSize: 13,
  },
});

export default MyCheckBox;
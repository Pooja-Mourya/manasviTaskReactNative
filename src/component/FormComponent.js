import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import { FontAwesome } from '@expo/vector-icons'; 
// import { Dropdown } from 'react-native-material-dropdown';

export const InputField = ({ label, type, text, style }) => (
    <View style={[styles.inputContainer, style]}>
        <Text style={styles.inputLabel}>{label}</Text>
        <TextInput
            style={styles.inputField}
            secureTextEntry={type === "password"}
            keyboardType={type === "email" ? "email-address" : "default"}
            autoCapitalize="none"
            placeholder={text}
            placeholderTextColor="#526999"
            textContentType={type === "email" ? "emailAddress" : "none"}
            accessibilityLabel={label}
            accessibilityHint={`Enter your ${label}`}
        />
    </View>
);

export const Checkbox = ({ label, onChange, checked }) => {
    const toggleCheckbox = () => {
        onChange(!checked);
    };

    return (
        <TouchableOpacity style={[styles.checkboxContainer, { marginVertical: 15 }]} onPress={toggleCheckbox}>
            <Text style={styles.inputLabel}>{label}</Text>
            <View style={[styles.checkbox, checked && styles.checked]} >
                {checked &&  <Image style={{}} source={require('../assets/icon/check-mark.png')} />}
            </View>
        </TouchableOpacity>
    );
};


let data = [{
    value: 'Banana',
  }, {
    value: 'Mango',
  }, {
    value: 'Pear',
  }];

export const DropdownField = ({ label, options }) => (
    
    <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>{label}</Text>
        {/* <Picker style={styles.inputField}>
            {options.map((option, index) => (
                <Picker.Item label={option} value={option} key={index} />
            ))}
        </Picker> */}
     
    </View>
);

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 1,
        marginBottom:"20%"
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

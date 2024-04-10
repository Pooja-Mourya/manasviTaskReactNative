import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Pressable, } from 'react-native';
import { InputField, DropdownField } from '../../component/FormComponent';
import * as Animatable from 'react-native-animatable';
import { responsiveWidth } from 'react-native-responsive-dimensions';
const AddLedgers = () => {
    return (
        <View style={styles.centeredView}>
            <ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={false}>
                <Animatable.View animation="slideInUp" style={{ marginVertical: 20 }}>
                    <InputField label="Ledger Name" text='Ledger Name' type="text" id="name" />
                    <InputField label="Group" text='Distributor' type="text" id="name" />
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <InputField style={{ width: "47%" }} label="Real Name" text='Name' type="time" id="role" />
                        <InputField style={{ width: "47%" }} label="Grantor Name" text='Name' type="time" id="role" />
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <InputField style={{ width: "20%" }} label="Rebate" text='' type="time" id="role" />
                        <InputField style={{ width: "20%" }} label="D-Rate" text='' type="time" id="role" />
                        <InputField style={{ width: "20%" }} label="D-Comm" text='' type="time" id="role" />
                        <InputField style={{ width: "20%" }} label="A-Comm" text='' type="time" id="role" />
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <InputField style={{ width: "40%" }} label="3rd Party Comm" text='' type="time" id="role" />
                        <InputField style={{ width: "28%" }} label="D-Comm" text='' type="time" id="role" />
                        <InputField style={{ width: "28%" }} label="A-Comm" text='' type="time" id="role" />
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <InputField style={{ width: "70%" }} label="Hissa" text='' type="time" id="role" />
                        <DropdownField style={{ width: "25%" }} label="Auditor" options={['%' , "%" , "%" , ]} type="time" id="role" /> 
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <InputField style={{ width: "70%" }} label="3rd Party Name" text='' type="time" id="role" />
                        <DropdownField style={{ width: "25%" }} label="Auditor" options={['%' , "%" , "%" , ]} type="time" id="role" /> 
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <InputField style={{ width: "47%" }} label="Agent Name" text='Name' type="time" id="role" />
                        <InputField style={{ width: "47%" }} label="Ref-Ledger" text='Name' type="time" id="role" />
                    </View>
                    <InputField label="Dealing Type" text='Name' type="text" id="name" />
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <InputField style={{ width: "30%" }} label="Limit Type" text='09:24' type="time" id="role" />
                        <InputField style={{ width: "30%" }} label="Dibba" text='09:24' type="time" id="role" />
                        <InputField style={{ width: "30%" }} label="Dibba Amm." text='09:24' type="time" id="role" />
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <InputField style={{ width: "47%" }} label="Mobile" text='+91 83196****96' type="time" id="role" />
                        <InputField style={{ width: "47%" }} label="Address" text='***** India' type="time" id="role" />
                    </View>
                </Animatable.View>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", width: responsiveWidth(90)}}>
                    <TouchableOpacity style={[styles.actionButton, { backgroundColor: "#FBCE6B" }]}>
                        <Text style={styles.actionButtonText}>Add</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: "4%",
        marginBottom:"20%"
    },
    mainContainer: {
        flex: 1,
        width: responsiveWidth(90),
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
        width: responsiveWidth(90),
        borderRadius: 7,
        padding: 10,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "center"
    },
    actionButtonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 5,
        textAlign:"center"
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

export default AddLedgers;

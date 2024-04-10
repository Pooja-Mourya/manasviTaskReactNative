import React, { useEffect, useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import Logout from '../screen/auth/Logout';


    const Sidebar = () => {
       
        const [selectedItem, setSelectedItem] = useState(null);
        const toggleOptions = (item) => {
            setSelectedItem(selectedItem === item ? null : item);
        };

    const menuItems = [
        { label: 'Activity', options: ['Transaction', 'Declare Transaction', 'Duplicate Trans.', 'Missed Trans.', 'Declare Trans- Audit'] },
        { label: 'Result', options: ['Transaction', 'Declare Transaction', 'Duplicate Trans.', 'Missed Trans.', 'Declare Trans- Audit'] },
        { label: 'Report', options: ['Transaction', 'Declare Transaction', 'Duplicate Trans.', 'Missed Trans.', 'Declare Trans- Audit'] },
        { label: 'User', options: ['Transaction', 'Declare Transaction', 'Duplicate Trans.', 'Missed Trans.', 'Declare Trans- Audit'] },
        { label: 'Admin Report', options: ['Transaction', 'Declare Transaction', 'Duplicate Trans.', 'Missed Trans.', 'Declare Trans- Audit'] },
        { label: 'Track Report', options: ['Transaction', 'Declare Transaction', 'Duplicate Trans.', 'Missed Trans.', 'Declare Trans- Audit'] },
        { label: 'Utilities', options: ['Transaction', 'Declare Transaction', 'Duplicate Trans.', 'Missed Trans.', 'Declare Trans- Audit'] },
    ];

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
              
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                    
                        <View style={{position:"relative", right:10}}>
                            {menuItems.map((menuItem) => (
                                <View style={{position:"relative", right:20, top:30}} key={menuItem.label}>
                                    <Pressable onPress={() => toggleOptions(menuItem.label)}>
                                        <Text style={{ alignItems: "center", flexDirection: "row", justifyContent: "space-between" }}>
                                            {selectedItem === menuItem.label && (
                                                // <AntDesign  name="arrowright" size={24} color="#EDBE58" />
                                                <Text>Icon</Text>
                                            )}
                                            <Text style={[styles.menuItemText, selectedItem === menuItem.label && { color: "#EDBE58" , paddingBottom:10}]}>
                                                {menuItem.label}
                                            </Text>
                                        </Text>
                                    </Pressable>
                                    {selectedItem === menuItem.label && (
                                        <View style={styles.optionsContainer}>
                                            {menuItem.options.map((option) => (
                                                <Text key={option} style={styles.optionText}>
                                                    {option}
                                                </Text>
                                            ))}
                                        </View>
                                    )}
                                </View>
                            ))}
                        </View>
                      
                <View style={styles.logoutContainer}>
                    <Logout/>
                    {/* <Pressable onPress={() => console.log('Logout pressed')}>
                        <Text style={styles.logoutText}>
                            <MaterialIcons name="logout" size={24} color="white" /> <Text>Logout</Text>
                        </Text>
                    </Pressable> */}
                </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#0a142c47',
    },
    modalView: {
        backgroundColor: '#0a142ccf',
        borderRadius: 2,
        paddingVertical: 30,
        alignItems: 'center',
        height: 820,
        width: '80%',
        right: -90,
        top: 1,
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        padding: 10,
    },
    menuItem: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 10,
    },
    menuItemText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',

    },
    optionsContainer: {
        marginTop: 10,
        marginLeft: 20,
    },
    optionText: {
        color: 'white',
        fontSize: 16,
        marginTop: 5,
    },
 
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    logoutContainer: {
      bottom:-300
    },
    logoutText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
});

export default Sidebar;

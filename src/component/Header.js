import React, { useState } from 'react';
import {
    View,
    ImageBackground,
    Image,
    Pressable,
    StyleSheet,
    TouchableOpacity,
    Modal,
    SafeAreaView,
    StatusBar,
    Text,
} from 'react-native';

const Header = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleMenu = () => {
        setModalVisible(true);
    };

    const handleClose = () => {
        setModalVisible(false);
    };

    return (
        <>
            <View style={styles.headerContainer}>
                <SafeAreaView style={styles.container}>
                <StatusBar animated={true} backgroundColor="#F4BA00" />
                <ImageBackground
                    source={require('../assets/icon/logo.png')}
                    style={styles.headerBackground}>
                    <View style={styles.overlay} />
                    <View style={styles.headerContent}>
                        <Image style={styles.logo} source={require('../assets/icon/logo.png')} />
                        <Pressable onPress={handleMenu} style={styles.menuButton}>
                        <Image style={{}} source={require('../assets/icon/menu.png')} />
                        </Pressable>
                    </View>
                </ImageBackground></SafeAreaView>
            </View>

            {modalVisible && (
                <Modal animationType="fade" transparent={true}>
                    <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
                        {/* Icon for close button */}
                    </TouchableOpacity>
                    {/* Sidebar component */}
                </Modal>
            )}
        </>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        position: 'absolute',
        zIndex: 99,
        backgroundColor: '#212A3D',
        justifyContent: 'center',
        height: 80,
        width: '100%',
    },
    headerBackground: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 20,
        position: 'relative',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#F4BA00',
        opacity: 0.78,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
    },
    menuButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    logo: {
        width: 72,
        height: 71,
    },
    closeButton: {
        position: 'absolute',
        top: '3%',
        left: '25%',
        zIndex: 9,
    },
});

export default Header;

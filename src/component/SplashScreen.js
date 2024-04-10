import React, { useEffect } from "react";
import { StyleSheet, View, Pressable, Text, Animated, SafeAreaView, StatusBar } from "react-native";

export default function SplashScreen({ navigation }) {
    const fadeAnim = new Animated.Value(0);

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
        }).start(() => {
            navigation.navigate('Login');
        });
    }, [fadeAnim, 2000]);

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
                <StatusBar animated={true} backgroundColor="#F4BA00" />
                <View style={styles.logoContainer}>
                    <Pressable style={styles.logoPressable}>
                        <Animated.Image
                            style={{ ...styles.logo, opacity: fadeAnim }}
                            source={require("../assets/icon/c_logo.png")}
                        />
                    </Pressable>
                    <View style={styles.titleContainer}>
                        {/* <Text style={styles.title}>Manvika Tiffins Services</Text> */}
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
    },
    logoContainer: {
        alignItems: "center",
    },
    logoPressable: {
        borderRadius: 50,
        overflow: "hidden",
    },
    logo: {
        width: 150,
        height: 150,
    },
    titleContainer: {
        marginTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333", // Set your text color
    },
});
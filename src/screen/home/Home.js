import {
    StyleSheet,
    ScrollView,
    
} from "react-native";
import React, { useState } from "react";
import Hero from "../../component/Hero";
import Card from "../../component/Cart";
import {LinearGradient} from "react-native-linear-gradient"
import Header from "../../component/Header";

const Index = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <LinearGradient colors={['#141F35', '#141F35']} style={{ flex: 1 }}>
            <Header/>
            <ScrollView style={{ zIndex: 1, marginTop: 80 }}>
                <Hero />
                <Card />
            </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Index
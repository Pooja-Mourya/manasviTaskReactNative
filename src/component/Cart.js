import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';

const { width: screenWidth } = Dimensions.get('window');

export default function Card() {
    const [carddata, setCarddata] = useState([])


    const [highlightedOption, setHighlightedOption] = useState(1);

    const handlePress = (optionIndex) => {
        setHighlightedOption(optionIndex);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const value = await AsyncStorage.getItem("@MySuperStore:key");
                if (value !== null) {
                    const authData = JSON.parse(value);
                    GetShiftResultDetails(authData?.access_token);
                } else {
                    console.error("Authentication token not found.");
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const GetShiftResultDetails = async (authToken) => {
        try {
            const response = await axios.get(
                'https://ntc98.com/api/Dashboard/GetShiftResultDetails',
                {
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                }
            );

            console.log("response", response.data);
            setCarddata(response?.data)

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // console.log("carddata", carddata)

    return (
        <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 5, marginVertical: 10 }}>
                <TouchableOpacity onPress={() => handlePress(1)}>
                    <View style={[styles.option, { borderColor: highlightedOption === 1 ? '#FBCE6B' : '#212A3D' }]}>
                        <Text style={{ color: highlightedOption === 1 ? '#FBCE6B' : '#ABABAB' }}>Option 1</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress(2)}>
                    <View style={[styles.option, { borderColor: highlightedOption === 2 ? '#FBCE6B' : '#212A3D' }]}>
                        <Text style={{ color: highlightedOption === 2 ? '#FBCE6B' : '#ABABAB' }}>Option 2</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress(3)}>
                    <View style={[styles.option, { borderColor: highlightedOption === 3 ? '#FBCE6B' : '#212A3D' }]}>
                        <Text style={{ color: highlightedOption === 3 ? '#FBCE6B' : '#ABABAB' }}>Option 3</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.container}>

                {carddata.map((items) => (
                    <View key={items.id} style={styles.cardContainer} >
                        <View style={{ padding: 4, backgroundColor: "#FCC417", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%" }}>
                            <Text style={styles.cardText}>{items.name.toUpperCase()}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 10, margin: 0 }}>


                            <View style={{ overflow: "hidden", flexDirection: "column", justifyContent: "space-between", alignItems: "center", }}>

                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
                                    <Text style={{ color: "white", paddingHorizontal: 5 }}>Actual Collection</Text>
                                    <View style={{ backgroundColor: "#182A4E", borderColor: "#22355C", borderWidth: 1, padding: 10, borderRadius: 8 }}>
                                        <Text style={{ fontSize: 12, color: "white", }}>{items.actualCollection}</Text>
                                    </View>
                                </View>
                                <View style={styles.hr} />
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
                                    <Text style={{ color: "white", paddingHorizontal: 5 }}>Total Collection </Text>
                                    <Text style={{ fontSize: 12, color: "white", }}> {` `}</Text>
                                    <View style={{ backgroundColor: "#182A4E", borderColor: "#22355C", borderWidth: 1, padding: 10, borderRadius: 8 }}>
                                        <Text style={{ fontSize: 12, color: "white", }}> {`${items.totalCollection}`}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                ))}


                {/* // TODO Add card data 
               
                {carddata.map((item, index) => (
                    <View style={styles.cardContainer} key={index}>
                        <View style={{ padding: 4, backgroundColor: "#FCC417", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%" }}>
                            <Text style={styles.cardText}>{`${item.place}`}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: 0 }}>
                            <View style={{ flexDirection: "column", justifyContent: "space-between", alignItems: "center", padding: 0, borderRightWidth: 2, borderRightColor: "#22355C", }}>
                                <View style={{ overflow: "hidden", borderBottomColor: "#22355C", borderBottomWidth: 2, flexDirection: "column", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", paddingHorizontal: 20, }}>
                                    <View style={{ marginTop: 10 }}>
                                        <Text style={styles.date}>{`${item.date}`}</Text>
                                    </View>
                                
                                </View>

                                <View style={{ flexDirection: "column", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", paddingHorizontal: 20, }}>
                                    <View style={{ alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                                        <Text style={styles.status}>{` ${item.status}`}</Text>
                                    </View>

                                </View>
                                </View>
                                <View style={styles.number}>
                                <Text style={{ fontSize: 30, color: "white", fontWeight: "bold" }}>{`${item.number}`}</Text>
                                </View>
                                </View>
                                </View>
                                ))}
                            */}


            </View>
        </>
    );
}

const styles = StyleSheet.create({
    hr: {
        borderBottomColor: '#22355C',
        borderBottomWidth: 2,
        width: 400,
        marginVertical: 5
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    cardContainer: {
        backgroundColor: '#0E1D3D',
        marginVertical: 10,
        borderRadius: 8,
        // borderWidth: 1,
        borderColor: '#016c63',
        alignItems: "center",
        width: screenWidth <= 600 ? '48%' : '100%',
        overflow: "hidden",
        borderRadius: 10
    },
    cardText: {
        fontSize: 16,
        marginVertical: 5,
        fontWeight: "bold"
    },
    number: {
        fontSize: 30,
        padding: 10,
        margin: 10,
        color: 'white',
        minWidth: 32,
        borderRadius: 10,
        marginLeft: 5,
        backgroundColor: '#182A4E',
        borderWidth: 1,
        borderColor: '#22355C',
    },

    status: {
        color: "#838A99",
        fontSize: 20,
        marginVertical: 5,
        textAlign: "center",
        marginHorizontal: "10%"
    },
    date:
    {
        padding: 0,
        paddingBottom: 10,
        color: "white",
        fontWeight: "900",
        fontSize: 12
    },
    option: {
        backgroundColor: '#212A3DF2',
        width: 106,
        height: 41,
        gap: 0,
        borderRadius: 9,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        borderWidth: 1,
    },
});

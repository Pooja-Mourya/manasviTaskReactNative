import * as React from "react";
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";

const InputField = ({ label, type, id }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.inputLabel}>{label}</Text>
    <TextInput
      style={styles.inputField}
      secureTextEntry={type === "password"}
      keyboardType={type === "email" ? "email-address" : "default"}
      autoCapitalize="none"
      placeholder={label}
      placeholderTextColor="#526999"
      textContentType={type === "email" ? "emailAddress" : "none"}
      accessibilityLabel={label}
    //   accessibilityHint={Enter your ${label}}
    />
  </View>
);

const IconButton = ({ source }) => (
  <Image resizeMode="auto" source={{ uri: source }} style={styles.iconButton} />
);


export default function Ledgers() {
    const icons = [ {uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/3a5ffc3c1225826fba87bf180b7e18a13c6c52ea9e110e2fa7d820def822baa5?apiKey=7c5e078517c04404806eb8c5139c4c6a&"}, {uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/180060ca6aa156a34f0fbf5b85641d93ac119645b2ebb84269742751b025439d?apiKey=7c5e078517c04404806eb8c5139c4c6a&"}, {uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/645ecd00f3f8c0ac14f7353dd1b76c74ccb3bcbd12c46853024e253944cced53?apiKey=7c5e078517c04404806eb8c5139c4c6a&"}, {uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/3765f0892e86179a45fd2d5fb7015c84f9d1d0e83191eb8e177eb8aea7d06cf2?apiKey=7c5e078517c04404806eb8c5139c4c6a&"}, {uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2d27b7db1f09b5956f7678a613f73bc9a272cd0f26f4ab1b5afa93a66fbc89cf?apiKey=7c5e078517c04404806eb8c5139c4c6a&"} ];
  
    return (
        <ScrollView style={styles.mainContainer}>
    
          <Text style={styles.headerText}>Add Staff</Text>
          <InputField label="Name" type="text" id="name" />
          <InputField label="Role" type="text" id="role" />
          <InputField label="User Name" type="text" id="username" />
          <View style={styles.doubleInputContainer}>
            <InputField label="Password" type="password" id="password" />
            <InputField label="Mobile No." type="text" id="mobile" />
          </View>
          <Text style={styles.warningText}>Maximum 16 Characters Allowed</Text>
        
          <InputField label="Address" type="text" id="address" />
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Add</Text>
          </TouchableOpacity>
        </ScrollView>
      );
}

const styles = StyleSheet.create({
    mainContainer: {
        borderRadius: 38,
        backgroundColor: "#0A142C",
        display: "flex",
        // maxWidth: 355,
        flexDirection: "column",
        // alignItems: "center",
      },
      mainImage: {
        overflow: "hidden",
        alignSelf: "stretch",
        position: "relative",
        display: "flex",
        aspectRatio: "4",
        width: "100%",
        alignItems: "stretch",
        justifyContent: "space-between",
        // padding: 18,
      },
      topBar: {
        alignSelf: "start",
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
      },
      timeStyle: {
        fontFamily: "SF Pro Text, sans-serif",
        color: "#141F35",
        fontWeight: "600",
      },
      iconsContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 16,
      },
      smallIconContainer: {
        display: "flex",
        flexDirection: "column",
      },
      iconButton: {
        width: 30,
        aspectRatio: 1,
        margin: 5,
      },
      headerText: {
        fontWeight: "600",
        fontSize: 15,
        color: "#EDBE58",
        alignSelf: "stretch",
        textAlign: "center",
        paddingVertical: 17,
      },
      inputContainer: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: "rgba(34, 53, 92, 1)",
        borderRadius: 7,
        backgroundColor: "#182A4E",
        padding: 17,
      },
      inputLabel: {
        color: "#526999",
        marginBottom: 8,
      },
      inputField: {
        color: "#F5F5F5",
        paddingVertical: 10,
        minWidth:"100%"
      },
      doubleInputContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      },
      warningText: {
        marginTop: 14,
        color: "#F32727",
        fontSize: 10,
      },
     addButton: {
        backgroundColor: "#EDBE58",
        borderRadius: 7,
        marginTop: 20,
        padding: 18,
      },
      addButtonText: {
        color: "#0A142C",
        fontWeight: "600",
      },
      actionButton: {
        backgroundColor: "#EDBE58",
        borderRadius: 7,
        marginTop: 20,
        padding: 18,
      },
      actionButtonText: {
        color: "#0A142C",
        fontWeight: "600",
      },
    });


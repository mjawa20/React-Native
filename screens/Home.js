import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { TouchableOpacity, StatusBar, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import BottomNav from "../components/BottomNav";
import Nav from "../components/Nav";

const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <Text style={styles.greet}>Halo, User</Text>
            <Text style={{ fontSize: 17, paddingTop: 5 }}>Welcome To SmartDoorlock</Text>
            <View style={styles.navigation}>
                <TouchableOpacity style={styles.box} onPress={() => navigation.push("Device")}>
                    <Icon name="devices" type="MaterialCommunityIcons" size={70} />
                    <Text style={styles.menu}>Devices Manager</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                    <Icon name="account" type="material-community" size={70} />
                    <Text style={styles.menu}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 25,
        paddingTop: 35,
    },
    greet: {
        fontSize: 33,
        fontWeight: "bold",
    },
    box: {
        width: "48%",
        height: "100%",
        marginTop: 50,
        backgroundColor: "#dadadada",
        alignContent: "center",
        justifyContent: "center",
    },
    navigation: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 250,
    },
    menu: {
        textAlign: "center",
        marginTop: 10,
        fontSize: 17,
    },
});

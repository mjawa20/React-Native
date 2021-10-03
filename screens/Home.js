import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import BottomNav from "../components/BottomNav";
import Nav from "../components/Nav";
const Home = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" backgroundColor="#0094da" />
            <Nav />
            <ScrollView style={styles.main}>
                <Text>main</Text>
            </ScrollView>
            <BottomNav />
        </View>
    );
};

export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0094da",
    },
    main: {
        backgroundColor: "white",
    },
});

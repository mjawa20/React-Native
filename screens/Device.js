import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import KeyButton from "../components/KeyButton";

const Device = () => {
    return (
        <View style={styles.container}>
            <KeyButton />
            <View style={{ width: 300, height: 250, backgroundColor: "white" }}>
                <Button title="Loading button" loading />
            </View>
        </View>
    );
};

export default Device;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
});

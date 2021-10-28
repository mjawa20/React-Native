import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";

const KeyButton = () => {
    return (
        <View style={styles.lock}>
            <Icon name="lock" type="material-community" size={70} color="#d84c4e" />
            <Text style={styles.status}>Door Is Locked</Text>
        </View>
    );
};

export default KeyButton;

const styles = StyleSheet.create({
    lock: {
        backgroundColor: "transparent",
        justifyContent: "center",
        width: 230,
        height: 230,
        marginVertical: 50,
        borderColor: "#d84c4e",
        borderWidth: 20,
        borderRadius: 200,
    },
    status: {
        textAlign: "center",
        marginTop: 10,
        color: "#d84c4e",
        fontWeight: "700",
        fontSize: 15,
    },
});

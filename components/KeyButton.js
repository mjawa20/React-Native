import React, { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";

const KeyButton = () => {
    const [lock, setLock] = useState(true);
    const [loader, setLoader] = useState(false);

    const post = () => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ key: lock ? 1 : 0 }),
        };
        setLoader(true);
        setTimeout(async () => {
            await fetch("http://192.168.1.6:3000/key", requestOptions)
                .then(setLock(lock ? false : true))
                .then(setLoader(false));
        }, 2500);
    };
    console.log(loader);

    return loader ? (
        <View style={{ width: 230, height: 300, justifyContent: "center" }}>
            <ActivityIndicator color="black" size="large" />
        </View>
    ) : (
        <TouchableOpacity
            onPress={post}
            style={[styles.lock, { borderColor: lock ? "#d84c4e" : "#209741" }]}
        >
            <Icon
                name={lock ? "lock" : "lock-open-variant"}
                type="material-community"
                size={70}
                color={lock ? "#d84c4e" : "#209741"}
            />
            <Text style={[styles.status, { color: lock ? "#d84c4e" : "#209741" }]}>
                Tap to {lock ? "open" : "lock"}
            </Text>
        </TouchableOpacity>
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

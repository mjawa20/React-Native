import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const BottomNav = () => {
    return (
        <View style={styles.container}>
            <Icon type="material-community" name="home-outline" size={28} />
        </View>
    );
};

export default BottomNav;

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: "row",
        alignItems: "center",
    },
});

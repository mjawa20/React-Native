import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const BottomNav = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Icon
                type="material-community"
                name="home-outline"
                size={28}
                color="white"
                onPress={() => navigation.push("Qr")}
            />
            <Icon type="material-community" name="home-outline" size={28} color="white" />
        </View>
    );
};

export default BottomNav;

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 15,
    },
});

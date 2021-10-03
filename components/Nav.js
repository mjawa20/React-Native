import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Input, Icon } from "react-native-elements";

const nav = () => {
    const [text, onChangeText] = React.useState("Useless Text");

    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 8,
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "white",
                    marginRight: 10,
                    padding: 4,
                    borderRadius: 5,
                }}
            >
                <Icon
                    name="search"
                    color="gray"
                    type="material"
                    size={24}
                    style={{ marginRight: 10, marginLeft: 5 }}
                />
                <TextInput style={{ flex: 0.8 }} placeholder={"Enter Search Term"} />
            </View>
            <Icon type="material-community" name="cart-outline" color="white" size={22} />
        </View>
    );
};

export default nav;

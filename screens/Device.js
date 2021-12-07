import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import KeyButton from "../components/KeyButton";

const Device = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getMovies = async () => {
        try {
            const response = await fetch("http://192.168.1.6:3000/key");
            const json = await response.json();
            setData(response);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);
    console.log(data);
    return (
        <View style={styles.container}>
            <KeyButton />
            <View style={{ width: 300, height: 250, backgroundColor: "white" }}>
                {isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <FlatList
                        data={data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <Text>
                                {item.title}, {item.releaseYear}
                            </Text>
                        )}
                    />
                )}
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

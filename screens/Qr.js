import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, StatusBar } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useNavigation } from "@react-navigation/native";

export default function Qr() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState("Not yet scanned");

    const askForCameraPermission = () => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    };

    useEffect(() => {
        askForCameraPermission();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setText(data);
        console.log("Type: " + type + "\nData: " + data);
    };

    if (hasPermission === false) {
        return (
            <View style={styles.container}>
                <Text style={{ margin: 10 }}>No access to camera</Text>
                <Button title={"Allow Camera"} onPress={() => askForCameraPermission()} />
            </View>
        );
    }
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="transparent" translucent={true} />
            <View style={styles.barcodebox}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={{ height: "100%", width: "100%" }}
                />
            </View>
            <View style={styles.absolute}>
                <View style={styles.focus}></View>
                <Icon
                    type="antdesign"
                    name="arrowleft"
                    size={45}
                    color="white"
                    onPress={() => navigation.goBack()}
                />
            </View>
            {/* <Text style={styles.maintext}>{text}</Text>
                {scanned && (
                    <Button
                        title={"Scan again?"}
                        onPress={() => setScanned(false)}
                        color="tomato"
                    />
                )} */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    focus: {
        position: "relative",
        width: 250,
        height: 250,
        borderRadius: 30,
        borderWidth: 8,
        borderColor: "white",
        borderStyle: "dashed",
        marginBottom: 50,
    },
    absolute: {
        position: "absolute",
        flex: 1,
        justifyContent: "center",
        height: "100%",
    },
    barcodebox: {
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: 500,
    },
});

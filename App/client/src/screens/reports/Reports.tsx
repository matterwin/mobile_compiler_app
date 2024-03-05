import React from "react";
import { SafeAreaView, Button, Text, View } from "react-native";
import { COLORS } from "../../constants";

const Reports = () => {
    return(
        <SafeAreaView style={{ backgroundColor: COLORS.deepgreen, flex: 1 }}>
            <Text>Test Screen</Text>
            {/* <Button onPress={() => FIREBASE_GET_AUTH.signOut()} title="Logout" /> */}
        </SafeAreaView>
    );
}

export default Reports;
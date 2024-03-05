import React from "react";
import { SafeAreaView, Button, Text, View, StyleSheet} from "react-native";

const Test2 = () => {
    return(
            <View style={[styles.container, { paddingTop: 50 }]}>
            <Text>Test2 Screen</Text>
            {/* <Button onPress={() => FIREBASE_GET_AUTH.signOut()} title="Logout" /> */}
            </View>
    );
}

export default Test2;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0b2226',
    },
});
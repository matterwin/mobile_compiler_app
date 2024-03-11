import React, { useState } from "react";
import { StyleSheet, Button, Text, View, Platform, StatusBar, TouchableOpacity } from "react-native";
import BottomSheetWrapper from "../../components/BottomSheetWrapper";
import { COLORS } from "../../constants";
import TabNavigator from "../../navigation/TabNavigator.tsx";
import Icon from 'react-native-vector-icons/Ionicons';

const Sheet = () => {
    const [current, setCurrent] = useState('barcode');

    return(
        <>
          <TabNavigator />
        </>
    ); 
}

export default Sheet;

const styles = StyleSheet.create({
    floatingIcon: {
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        padding: 10,
        paddingHorizontal: 8,
        borderRadius: 100,
        right: 10,
        gap: 0,
        bottom: '10%'
    },
    circle: {
        backgroundColor: 'rgba(30, 255, 255, 0.05)',
        padding: 10,
        borderRadius: 100,
    }
});

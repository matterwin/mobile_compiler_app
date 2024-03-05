import React, { useState } from "react";
import { StyleSheet, Button, Text, View, Platform, StatusBar, TouchableOpacity } from "react-native";
import BottomSheetWrapper from "../../components/BottomSheetWrapper";
import SheetNavigator from "../../navigation/SheetNavigator";
import { COLORS } from "../../constants";
import Icon from 'react-native-vector-icons/Ionicons';

const VisualIcon = (props: {current: string}) => (
    <View style={[styles.circle, { backgroundColor: (props.current === 'barcode') ? COLORS.orange : 'transparent' }]}>
        <Icon name="barcode" size={25} color="white" />
    </View>
);

const CellIcon = (props: {current: string}) => (
    <View style={[styles.circle, { backgroundColor: (props.current === 'grid') ? COLORS.orange : 'transparent' }]}>
        <Icon name="grid" size={25} color="white" />
    </View>
);

const JSONIcon = (props: {current: string}) => (
    <View style={[styles.circle, { backgroundColor: (props.current === 'code') ? COLORS.orange : 'transparent' }]}>
        <Icon name="code" size={25} color="white" />
    </View>
);

const Sheet = () => {
    const [current, setCurrent] = useState('barcode');

    return(
        <>
            <BottomSheetWrapper>
                <SheetNavigator />
                <View style={styles.floatingIcon}>
                    <TouchableOpacity onPress={() => setCurrent('barcode')}>
                        <VisualIcon current={current}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCurrent('grid')}>
                        <CellIcon current={current}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCurrent('code')}>
                        <JSONIcon current={current}/>
                    </TouchableOpacity>
                </View>
            </BottomSheetWrapper>
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
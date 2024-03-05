import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

type Props = {
    children: JSX.Element | JSX.Element[];
}

const Safezone = ({ children } : Props) => {
    return(
        <SafeAreaView style={styles.container}>
            { children }
        </SafeAreaView>
    );
}

export default Safezone;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
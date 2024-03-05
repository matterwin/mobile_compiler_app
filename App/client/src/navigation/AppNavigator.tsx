import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigator from './BottomNavigator';

const Stack = createStackNavigator();

const commonOptions = {
    title: null,
    headerStyle: {
      backgroundColor: 'transparent',
      elevation: 0,
      shadowOpacity: 0,
    },
    headerShown: false,
};

const AppNavigator = () => {

  return (
    <Stack.Navigator initialRouteName='BottomNav'>
      <Stack.Screen name={"BottomNav"} component={BottomNavigator} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({

});
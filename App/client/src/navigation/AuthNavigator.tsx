import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Register } from '../screens';
import AppNavigator from './AppNavigator';

const Stack = createStackNavigator();

function AuthNavigator() {
    return(
        <Stack.Navigator initialRouteName={"Login"}>
            <Stack.Screen name={"Login"} component={Login} options={{ headerShown: false }}/>
            <Stack.Screen name={"Register"} component={Register} options={{ headerShown: false }}/>
            <Stack.Screen name={"AppNav"} component={AppNavigator} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}

export default AuthNavigator;
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import BottomNavigator from './BottomNavigator';
import { COLORS } from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

function RootNavigator() {
    return(
        <Stack.Navigator 
            initialRouteName={"BottomNav"}
            screenOptions={() => ({
                headerLeftContainerStyle: {
                    paddingLeft: 15
                },
                headerRightContainerStyle: {
                    paddingRight: 15
                },
                headerTintColor: COLORS.white,
            })}
        >
            <Stack.Screen 
                name={"BottomNav"} 
                component={BottomNavigator} 
                options={() => ({ 
                    headerShown: false,
                    headerTransparent: true,
                    headerRight: () => 
                        <View style={styles.circleBg}>
                            <Icon name="notifications-outline" size={26} color={COLORS.grey} />
                        </View>
                })}
                
            />
        </Stack.Navigator>
    );
}

export default RootNavigator;

const styles = StyleSheet.create({
    circleBg: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: 5,
        borderRadius: 100
    }
});
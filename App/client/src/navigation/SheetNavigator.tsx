import React, { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Test from '../screens/sheet/Test';
import Test2 from '../screens/sheet/Test2';
import { Dimensions, StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import { COLORS } from '../constants';
import { useNavigation } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

function SheetNavigator() {
  const [tabs, setTabs] = useState([
    { name: 'Test', component: Test },
    { name: 'Test1', component: Test2 }
  ]);

  const navigation = useNavigation();  

  const addNewTab = () => {
    const newTabName = `New Tab ${tabs.length + 1}`;
    const newTab = { name: newTabName, component: Test2 };

    setTabs(prevTabs => {
      const updatedTabs = [...prevTabs, newTab];
      return updatedTabs;
    });

    setTimeout(() => {
      navigation.navigate(newTabName as never);
    }, 0);
  };

  return (
    <>
      <Tab.Navigator
        initialRouteName='Test'
        screenOptions={() => ({
          tabBarShowLabel: true,
          tabBarShowIcon: true,
          tabBarLabelStyle: {
            fontSize: 14
          },
          tabBarScrollEnabled: true,
          tabBarItemStyle: {
            height: 45,
            marginTop: 40,
            width: 150,
          },
          tabBarActiveTintColor: COLORS.white,
          tabBarInactiveTintColor: COLORS.grey,
          tabBarIndicatorStyle: {
            // width: 30,
            // left: (100 - 20) / 2,
            backgroundColor: COLORS.orange
          },
          tabBarContentContainerStyle: {
            paddingHorizontal: 0,
            // width: 20,
          },
          tabBarGap: 0,
          tabBarStyle: {
            width: Dimensions.get('window').width,
            backgroundColor: COLORS.teal + 'AA',
            borderBottomWidth: 1,
            borderColor: COLORS.tealwhite,
            position: 'absolute',
          }
        })}
      >
        {tabs.map((tab, index) => (
          <Tab.Screen
            key={index}
            name={tab.name}
            component={tab.component}
            options={{
              swipeEnabled: index !== tabs.length - 1,
            }}
          />
        ))}
        <Tab.Screen
          name="+"
          options={{ swipeEnabled: false }}
          listeners={({ navigation }) => ({
            tabPress: event => {
              event.preventDefault();
              addNewTab();
            },
          })}
        >
          {() => null}
        </Tab.Screen>
      </Tab.Navigator>
    </>
  );
}

export default SheetNavigator;

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 50,
    backgroundColor: COLORS.orange,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 24,
    color: COLORS.white,
  },
});
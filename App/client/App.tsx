import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Splash } from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigation/AuthNavigator';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import { COLORS } from './src/constants';
import RootNavigator from './src/navigation/RootNavigator';
import store from './src/redux/store';
import {
  useFonts,
  Mukta_200ExtraLight,
  Mukta_300Light,
  Mukta_400Regular,
  Mukta_500Medium,
  Mukta_600SemiBold,
  Mukta_700Bold,
  Mukta_800ExtraBold,
} from '@expo-google-fonts/mukta';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [fontsLoaded, fontError] = useFonts({
    Mukta_200ExtraLight,
    Mukta_300Light,
    Mukta_400Regular,
    Mukta_500Medium,
    Mukta_600SemiBold,
    Mukta_700Bold,
    Mukta_800ExtraBold,
  });
  
  useEffect(() => {
    setLoading(false);
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUser(user);
    });
  },[])
  
  if (!fontsLoaded && !fontError) {
    return null;
  }
  
  if(loading){
    return (
      <Splash />
      );
  }
    
  return (
    <NavigationContainer>
      {user ? <RootNavigator /> : <AuthNavigator />}
      <StatusBar style="light" translucent={true}/>
    </NavigationContainer>
  );
}

const AppWrapper = () => {
  return (
    // <Provider store={store}>
      <App />
    // </Provider>
  );
}

export default AppWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.deepgreen,
  },
});
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBheuLWVTIUCSxQfJxHCDsEfxD-iHEhGEI",
  authDomain: "finance-47e6b.firebaseapp.com",
  projectId: "finance-47e6b",
  storageBucket: "finance-47e6b.appspot.com",
  messagingSenderId: "385055411517",
  appId: "1:385055411517:web:650f17b6a205a6db674954"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
 persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
export const FIREBASE_GET_AUTH = getAuth(FIREBASE_APP);
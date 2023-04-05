//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Router from './Router';
import SplashScreen from './src/screens/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingPage from './src/screens/LandingPage';
import LoginPage from './src/screens/LoginScreen/LoginPage';
import SignUpPage from './src/screens/SignUpPage';
import BottomTab from './src/screens/BottomTab/BottomTab';
import { NativeBaseProvider, extendTheme } from 'native-base';
import FavouriteScreen from './src/screens/TopTabScreens/FavouriteScreen';
import InboxScreen from './src/screens/BottomTabScreens/InboxScreen';

// create a component
const App = () => {
  return (
    <Router/>
  );
};

// define your styles


//make this component available to the app
export default App;

//import liraries
//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingPage from './src/screens/LandingPage';
import LoginPage from './src/screens/LoginScreen/LoginPage';
import SignUpPage from './src/screens/SignUpPage';
import BottomTab from './src/screens/BottomTab/BottomTab';
import {NativeBaseProvider, extendTheme} from 'native-base';
import FavouriteScreen from './src/screens/TopTabScreens/FavouriteScreen';
import InboxScreen from './src/screens/BottomTabScreens/InboxScreen';
import MessagesScreen from './src/screens/TopTabScreens/MessagesScreen';
import NotificationsScreen from './src/screens/TopTabScreens/NotificationsScreen';
import SellingScreen from './src/screens/TopTabScreens/SellingScreen';
import BuyingScreen from './src/screens/TopTabScreens/BuyingScreen';
import ArtDetailsHome from './src/screens/ArtDetails/ArtDetailsHome';
import PortfolioScreen from './src/screens/PortfoilioScreen/PortfolioScreen';
import ArtworkScreen from './src/screens/TopTabScreens/ArtworkScreen';
import ImageSlider from './src/components/ImageSlider';
import OwnedArtworkScreen from './src/screens/TopTabScreens/OwnedArtworkScreen';
import AmountSlider from './src/components/AmountSlider';
import UploadScreen from './src/screens/TopTabScreens/UploadArtwork/UploadScreen';
import ViewArtworkSeller from './src/screens/TopTabScreens/ArtWorkScreens/ViewArtworkSeller';
import ViewArtworkBuyer from './src/screens/TopTabScreens/ArtWorkScreens/ViewArtworkBuyer';
import ConnectedPOP from './src/screens/ConnectedPOP';
import QRScanner from './src/components/QRScanner';
import ResetPass from './src/screens/LoginScreen/ResetPass';
import TimePass from './src/screens/TimePass';
import ForgotPass from './src/screens/LoginScreen/ForgotPass';
import EnterOtp from './src/screens/LoginScreen/EnterOtp';

// create a component
const Router = () => {
  const newColorTheme = {
    brand: {
      900: '#5B8DF6',
      800: '#ffffff',
      700: '#cccccc',
    },
  };

  const theme = extendTheme({
    colors: newColorTheme,
  });

  const Stack = createNativeStackNavigator();

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
             <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="EnterOtp" component={EnterOtp} />
            <Stack.Screen name="ForgotPass" component={ForgotPass} />
         

          <Stack.Screen name="TimePass" component={TimePass} />

          <Stack.Screen name="PortfolioScreen" component={PortfolioScreen} />
          <Stack.Screen name="ResetPass" component={ResetPass} />
          <Stack.Screen name="ConnectedPOP" component={ConnectedPOP} />
          <Stack.Screen name="BottomTab" component={BottomTab} />
          <Stack.Screen name="ArtDetailsHome" component={ArtDetailsHome} />
          <Stack.Screen name="QRScanner" component={QRScanner} />
          <Stack.Screen name="ViewArtworkBuyer" component={ViewArtworkBuyer} />
          <Stack.Screen
            name="ViewArtworkSeller"
            component={ViewArtworkSeller}
          />
          <Stack.Screen name="UploadScreen" component={UploadScreen} />
          <Stack.Screen name="AmountSlider" component={AmountSlider} />
          <Stack.Screen name="ImageSlider" component={ImageSlider} />
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="InboxScreen" component={InboxScreen} />
          <Stack.Screen name="FavouriteScreen" component={FavouriteScreen} />
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
          <Stack.Screen name="SignUpPage" component={SignUpPage} />
          <Stack.Screen
            name="OwnedArtworkScreen"
            component={OwnedArtworkScreen}
          />
          <Stack.Screen
            name="NotificationsScreen"
            component={NotificationsScreen}
          />
          <Stack.Screen name="SellingScreen" component={SellingScreen} />
          <Stack.Screen name="BuyingScreen" component={BuyingScreen} />
          <Stack.Screen name="ArtworkScreen" component={ArtworkScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default Router;

//import liraries
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let Token = await AsyncStorage.getItem('LoginToken').then(
      setTimeout(() => {
        Token === null
          ? navigation.replace('LandingPage')
          : navigation.replace('BottomTab');
      }, 4000),
    );
  };

  const SplashScreenImage = require('../../assets/images/SplashScreen.png');

  return (
    <View style={styles.container}>
      <Image style={styles.splashImageStyle} source={SplashScreenImage} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  splashImageStyle: {
    height: hp('100%'),
    width: wp('100%'),
  },
});

//make this component available to the app
export default SplashScreen;

//import liraries
import React, {Component} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Avatar} from 'react-native-elements';

// create a component
const ConnectedPOP = ({navigation}) => {
  setTimeout(() => {
      navigation.replace('InboxScreen');
    }, 4000);

  return (
      <ImageBackground
        resizeMode="stretch"
        style={{
          flex:1,
          height:hp('100%'),
          width: wp('100%'),
          alignItems: 'center',
          justifyContent: 'center',
        }}
        source={require('../../assets/images/BackgroundImages/ConnectedBG.png')}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: wp('80%'),
          }}>
          <View style={{position:"relative",left:("-10%")}}>
            <Avatar
              size={120}
              rounded
              source={require('../../assets/images/UserOne.png')}
            />
          </View>
          <View style={{position:"relative",right:("-10%")}}>
          <Avatar
            size={120}
            rounded
            source={require('../../assets/images/UserTwo.png')}
          />
          </View>
        </View>
      </ImageBackground>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:hp("100%"),
    width:wp("100%")
  },
});

//make this component available to the app
export default ConnectedPOP;

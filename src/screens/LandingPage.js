//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Image
} from 'react-native';
import ButtonTouch from '../components/Button';
import {styles_login} from './LoginScreen/LoginSignUpStyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// create a component
const LandingPage = ({navigation}) => {
  return (
    <View style={styles_login.container}>
      <ImageBackground
        style={{height: hp('100%'), width: wp('100%')}}
        resizeMode={'stretch'}
        source={require('../../assets/images/BackgroundImages/LandingPage.png')}>
          <View style={styles.HomeTextView}>
        <Image
          style={{height: hp('8%'), width: wp('33%')}}
          resizeMode={"contain"}
          source={require('../../assets/images/HeaderImage/HeaderImage.png')}
        />
      </View>
        <View style={[styles_login.HeaderText,{height:hp("20%"),position:"absolute",top:hp("40%"),alignSelf:"center"}]}>
          <Text style={[styles_login.HeaderTextStyle,{fontSize:wp(8),color:"#fff",fontFamily:"Rubik-Bold",}]}>
            Enter the new
          </Text>
          <Text style={[styles_login.HeaderTextStyle,{fontSize:wp(8),color:"#fff",fontFamily:"Rubik-Bold"}]}>
            digital world of art
          </Text>
        </View>
        <View
          style={{
            width: wp('100%'),
            alignItems: 'center',
            position: 'absolute',
            bottom: hp('8.5%'),
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({

                routes: [{ name: 'LoginPage' }],
                });
            }}
            style={styles_login.LoginButtonStyle}>
            <Text style={{color: '#fff',fontWeight:"bold"}}>LOGIN</Text>
          </TouchableOpacity>
          <ButtonTouch
            onpress={() => {
              navigation.reset({

                routes: [{ name: 'SignUpPage' }],
                });
            }}
            styletext={{fontWeight:"bold"}}
            TextName={'CREATE ACCOUNT'}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  HomeTextView: {
    alignItems: 'center',
    marginVertical: 25,
  },
});

// define your styles

//make this component available to the app
export default LandingPage;

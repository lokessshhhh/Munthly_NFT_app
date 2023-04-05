//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Input from '../../components/input';
import ButtonTouch from '../../components/Button';
import {styles_login} from './LoginSignUpStyle';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useState} from 'react';
import axios from 'axios';
import BaseURl from '../../Geners/BaseUrl';
import FlashMessage from 'react-native-flash-message';
import {showMessage} from 'react-native-flash-message';
import ProgressIndicator from '../../components/ProgressIndicator';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// create a component
const ForgotPass = ({navigation}) => {
  const EmailValidation = async () => {
    Email == ''
      ? (setTimeout(() => {
          SetEmailIndicator(false);
        }, 500),
        showMessage({
          message: 'Please Enter Email',
          floating: true,
          titleStyle: {
            color: '#5360EE',
          },
          style: {
            marginBottom: 40,
            backgroundColor: '#fff',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 10},
            shadowOpacity: 1,
            shadowRadius: 10,
            elevation: 10,
          },
        }))
      : await axios
          .post(BaseURl + 'api/v1/auth/forgotpassword', {
            email: Email,
          })
          .then(response => {
            response.data.success === true
              ? (navigation.replace('EnterOtp',{Email: Email}),
                SetEmailIndicator(false),
                showMessage({
                  message: 'Verification OTP sent to the Email Address',
                  type: 'success',
                  floating: true,
                  autoHide: true,
                  duration: 1100,
                  style: {
                    marginBottom: 40,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 10},
                    shadowOpacity: 1,
                    shadowRadius: 10,
                    elevation: 10,
                  },
                }))
              : response.data.error === 'User not found with this email'
              ? (SetEmailIndicator(false),
                showMessage({
                  message: 'User not found with this email',
                  floating: true,
                  titleStyle: {
                    color: '#5360EE',
                  },
                  style: {
                    marginBottom: 40,
                    backgroundColor: '#fff',
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 10},
                    shadowOpacity: 1,
                    shadowRadius: 10,
                    elevation: 10,
                  },
                }))
              : (SetEmailIndicator(false),
                showMessage({
                  message: 'System Error',
                  floating: true,
                  titleStyle: {
                    color: '#5360EE',
                  },
                  style: {
                    marginBottom: 40,
                    backgroundColor: '#fff',
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 10},
                    shadowOpacity: 1,
                    shadowRadius: 10,
                    elevation: 10,
                  },
                }));
          })
          .catch(error => {
            error.response.data.error === 'User not found with this email'
              ? (SetEmailIndicator(false),
                showMessage({
                  message: 'User not found with this email',
                  floating: true,
                  titleStyle: {
                    color: '#5360EE',
                  },
                  style: {
                    marginBottom: 40,
                    backgroundColor: '#fff',
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 10},
                    shadowOpacity: 1,
                    shadowRadius: 10,
                    elevation: 10,
                  },
                }))
              : console.log(error);
          });
  };

  const [Email, SetEmail] = useState('');
  const [EmailIndicator, SetEmailIndicator] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAwareScrollView>
      <TouchableWithoutFeedback
       onPress={Keyboard.dismiss}
      >
  <ImageBackground
        resizeMode="stretch"
        style={styles.container}
        source={require('../../../assets/images/BackgroundImages/LoginPage.png')}>
        <View style={styles_login.HomeTextView}>
          <TouchableOpacity
            onPress={() => {
              navigation.replace('LoginPage');
            }}
            style={{
              position: 'absolute',
              left: wp('3.3%'),
            }}>
            <Image
              style={[styles_login.BackArrow, {tintColor: '#fff'}]}
              source={require('../../../assets/images/BackArrow.png')}
            />
          </TouchableOpacity>

          <Text
            style={[
              styles_login.HeaderTextStyle,
              {fontSize: 24, fontFamily: 'Rubik-SemiBold', color: '#fff'},
            ]}>
            Reset Password
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            height: '100%',
            justifyContent: 'center',
            paddingBottom: hp('15%'),
          }}>
          <Text
            style={[
              styles_login.HeaderTextStyle,
              {
                fontSize: 18,
                marginBottom: 50,
                alignSelf: 'flex-start',
                marginLeft: wp('5%'),
              },
            ]}>
            Enter Registered {'\n'}Email Address Below
          </Text>

          <Input
            Inputstyle={{height: hp('6%')}}
            value={Email}
            onChangeText={Email => SetEmail(Email)}
            placeholder={'EMAIL'}
          />
          {EmailIndicator === true ? (
            <ProgressIndicator/>
          ) : EmailIndicator === false ? (
            <ButtonTouch
              onpress={() => {
                EmailValidation();
                SetEmailIndicator(true);
              }}
              TextName={'GET OTP'}
            />
          ) : (
            <ButtonTouch
              onpress={() => {
                SetEmailIndicator(true);
                EmailValidation();
              }}
              TextName={'GET OTP'}
            />
          )}
        </View>
        <FlashMessage position="bottom" />
      </ImageBackground>
      </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
     
    
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: hp('100%'),
    width: wp('100%'),
  },
});

//make this component available to the app
export default ForgotPass;

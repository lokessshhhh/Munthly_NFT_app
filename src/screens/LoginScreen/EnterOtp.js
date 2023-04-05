//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Input from '../../components/input';
import ButtonTouch from '../../components/Button';
import {styles_login} from './LoginSignUpStyle';
import {SafeAreaView} from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';
import {showMessage} from 'react-native-flash-message';
import BaseURl from '../../Geners/BaseUrl';
import axios from 'axios';
import ProgressIndicator from '../../components/ProgressIndicator';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// create a component
const EnterOtp = ({navigation,route}) => {
  const [OTP, SetOTP] = useState('');
  const [OTPIndicator, SetOTPIndicator] = useState(false);



  const OTPValidation = async () => {
    OTP == ''
      ? (setTimeout(() => {
          SetOTPIndicator(false);
        }, 500),
        showMessage({
          message: 'Please Enter OTP',
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
          .get(BaseURl + 'api/v1/auth/validatetoken/' + OTP)
          .then(response => {
            response.data.success === true
              ? (navigation.replace('ResetPass', {code: OTP}),
                SetOTPIndicator(false),
                showMessage({
                  message: 'OTP Verified',
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
                }),
                console.log(response.data))
              : response.data.success === false
              ? (SetOTPIndicator(false),
                showMessage({
                  message: 'Invalid OTP',
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
              : (SetOTPIndicator(false),
                showMessage({
                  message: 'Invalid OTP',
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
            error.response.data.error === 'Invalid token'
              ? (SetOTPIndicator(false),
                showMessage({
                  message: 'Invalid OTP',
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
              navigation.replace('ForgotPass');
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
            Enter OTP
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
            Enter the OTP we sent {'\n'}on {route.params.Email}
          </Text>
          <Input
            maxLength={6}
            keyboardType={'numeric'}
            Inputstyle={{height: hp('6%')}}
            value={OTP}
            onChangeText={OTP => SetOTP(OTP)}
            placeholder={'OTP'}
          />
          {OTPIndicator === true ? (
            <ProgressIndicator/>
          ) : OTPIndicator === false ? (
            <ButtonTouch
              onpress={() => {
                OTPValidation();
                SetOTPIndicator(true);
              }}
              TextName={'SUBMIT'}
            />
          ) : (
            <ButtonTouch
              onpress={() => {
                OTPValidation();
                SetOTPIndicator(true);
              }}
              TextName={'SUBMIT'}
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
export default EnterOtp;

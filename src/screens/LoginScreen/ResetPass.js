//import liraries
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Input from '../../components/input';
import ButtonTouch from '../../components/Button';
import {styles_login} from './LoginSignUpStyle';
import {SafeAreaView} from 'react-native-safe-area-context';
import {showMessage, hideMessage} from 'react-native-flash-message';
import FlashMessage from 'react-native-flash-message';
import BaseURl from '../../Geners/BaseUrl';
import axios from 'axios';
import ProgressIndicator from '../../components/ProgressIndicator';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// create a component
const ResetPass = ({navigation, route}) => {
  const [PasswordIndicator, SetPasswordIndicator] = useState(false);
  const [Password, SetPassword] = useState('');
  const [ConPassword, SetConPassword] = useState('');

  const PasswordValidation = async () => {
    Password == '' || ConPassword == ''
      ? (setTimeout(() => {
          SetPasswordIndicator(false);
        }, 500),
        showMessage({
          message: 'All fields must be filled',
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
      : Password !== ConPassword
      ? (setTimeout(() => {
          SetPasswordIndicator(false);
        }, 500),
        showMessage({
          message: 'Both Passwords Must Match',
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
      : Password.length <= 8 || ConPassword.length <= 8
      ? (setTimeout(() => {
          SetPasswordIndicator(false);
        }, 500),
        showMessage({
          message: 'Password Must Be Minimum 8 Characters',
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
          .put(BaseURl + 'api/v1/auth/resetpassword/' + route.params.code, {
            password: Password,
          })
          .then(response => {
            response.data.success === true
              ? (setTimeout(() => {
                  navigation.replace('LoginPage');
                }, 1000),
                SetPasswordIndicator(false),
                showMessage({
                  message: 'Password Changed Successfully',
                  type: 'success',
                  floating: true,
                  autoHide: true,
                  duration: 900,
                  style: {
                    marginBottom: 40,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 10},
                    shadowOpacity: 1,
                    shadowRadius: 10,
                    elevation: 10,
                  },
                }))
              : response.data.success === false
              ? (SetPasswordIndicator(false),
                showMessage({
                  message: 'Something Went Wrong',
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
              : (SetPasswordIndicator(false),
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
            error.response.data.error === 'Invalid token'
              ? (SetPasswordIndicator(false),
                showMessage({
                  message: 'OTP Expired',
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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ImageBackground
            resizeMode="stretch"
            style={styles.container}
            source={require('../../../assets/images/BackgroundImages/LoginPage.png')}>
            <View style={styles_login.HomeTextView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.replace('EnterOtp');
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
                Set Password
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                height: '100%',
                justifyContent: 'center',
                paddingBottom: hp('20%'),
              }}>
              <Text
                style={[
                  styles_login.HeaderTextStyle,
                  {
                    fontSize: 18,
                    marginBottom: 40,
                    alignSelf: 'flex-start',
                    marginLeft: wp('5%'),
                  },
                ]}>
                Enter New {'\n'}Password Below
              </Text>
              <Input
                Inputstyle={{height: hp('6%')}}
                value={Password}
                onChangeText={Password => SetPassword(Password)}
                placeholder={'PASSWORD'}
              />
              <Input
                Inputstyle={{height: hp('6%')}}
                value={ConPassword}
                onChangeText={ConPassword => SetConPassword(ConPassword)}
                placeholder={'CONFIRM PASSWORD'}
              />
              {PasswordIndicator === true ? (
                <ProgressIndicator />
              ) : PasswordIndicator === false ? (
                <ButtonTouch
                  onpress={() => {
                    PasswordValidation();
                    SetPasswordIndicator(true);
                  }}
                  TextName={'RESET PASSWORD'}
                />
              ) : (
                <ButtonTouch
                  onpress={() => {
                    PasswordValidation();
                    SetPasswordIndicator(true);
                  }}
                  TextName={'RESET PASSWORD'}
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
export default ResetPass;

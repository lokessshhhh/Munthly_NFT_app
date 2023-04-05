//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {styles_login} from './LoginScreen/LoginSignUpStyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Input from '../components/input';
import ButtonTouch from '../components/Button';
import CreateAccButton from '../components/CreateAccButton';
import axios from 'axios';
import BaseURl from '../Geners/BaseUrl';
import {showMessage, hideMessage} from 'react-native-flash-message';
import FlashMessage from 'react-native-flash-message';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ProgressIndicator from '../components/ProgressIndicator';

const SignUpPage = ({navigation}) => {
  const [SignupIndicator, SetSignupIndicator] = useState(false);
  const [Name, SetName] = useState('');
  const [Email, SetEmail] = useState('');
  const [Mobile, SetMobile] = useState('');
  const [UserName, SetUserName] = useState('');
  const [Password, SetPassword] = useState('');
  const [conPassword, SetconPassword] = useState('');

  const SignUpValidation = async () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    {
      Name == '' ||
      Email == '' ||
      Mobile == '' ||
      UserName == '' ||
      Password == '' ||
      conPassword == ''
        ? (setTimeout(() => {
            SetSignupIndicator(false);
          }, 500),
          showMessage({
            message: 'All fields must be filled',
            floating: true,
            style: {
              marginBottom: 40,
              backgroundColor: '#5360EE',
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 10},
              shadowOpacity: 1,
              shadowRadius: 10,
              elevation: 10,
            },
          }))
        : reg.test(Email) === false
        ? (setTimeout(() => {
            SetSignupIndicator(false);
          }, 500),
          showMessage({
            message: 'Please Enter A Valid Email',
            floating: true,
            style: {
              marginBottom: 40,
              backgroundColor: '#5360EE',
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 10},
              shadowOpacity: 1,
              shadowRadius: 10,
              elevation: 10,
            },
          }))
        : Password !== conPassword
        ? (setTimeout(() => {
            SetSignupIndicator(false);
          }, 500),
          showMessage({
            message: 'Both Password Fields Must Match',
            floating: true,
            style: {
              marginBottom: 40,
              backgroundColor: '#5360EE',
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 10},
              shadowOpacity: 1,
              shadowRadius: 10,
              elevation: 10,
            },
          }))
        : Password.length < 8 && conPassword.length < 8
        ? (setTimeout(() => {
            SetSignupIndicator(false);
          }, 500),
          showMessage({
            message: 'Password Must be More than 8 characters',
            floating: true,
            style: {
              marginBottom: 40,
              backgroundColor: '#5360EE',
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 10},
              shadowOpacity: 1,
              shadowRadius: 10,
              elevation: 10,
            },
          }))
        : await axios
            .post(BaseURl + 'api/v1/auth/register', {
              fullName: Name,
              email: Email,
              mobile: Mobile,
              username: UserName,
              password: Password,
            })
            .then(response => {
              if (response.data.success === true) {
                SetSignupIndicator(false),
                  showMessage({
                    message: 'Sign-Up Successful',
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
                  }),
                  setTimeout(() => {
                    navigation.reset({
                      routes: [{name: 'LoginPage'}],
                    });
                  }, 1000);
              }
            })
            .catch(error => {
              console.log(error);
              // Check if it's HTTP 400  error
              if (error.response.data.error === 'username is not available') {
                SetSignupIndicator(false),
                  showMessage({
                    message: 'Username Already Exists',
                    floating: true,
                    style: {
                      marginBottom: 40,
                      backgroundColor: '#5360EE',
                      shadowColor: '#000',
                      shadowOffset: {width: 0, height: 10},
                      shadowOpacity: 1,
                      shadowRadius: 10,
                      elevation: 10,
                    },
                  });
              }
              // You can get response data (mostly the reason would be in it)
              if (
                error.response.data.error ===
                'User with this email already exists'
              ) {
                SetSignupIndicator(false),
                  showMessage({
                    message: 'Email Already Exists',
                    floating: true,
                    style: {
                      marginBottom: 40,
                      backgroundColor: '#5360EE',
                      shadowColor: '#000',
                      shadowOffset: {width: 0, height: 10},
                      shadowOpacity: 1,
                      shadowRadius: 10,
                      elevation: 10,
                    },
                  });
                console.log('error email');
              }
            });
    }
  };

  return (
    <KeyboardAwareScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={{flex: 1}}>
          <ImageBackground
            style={{height: hp('100%'), width: wp('100%')}}
            resizeMode={'stretch'}
            source={require('../../assets/images/BackgroundImages/SignUp.png')}>
            <View style={styles_login.HomeTextView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.replace('LandingPage');
                }}
                style={{
                  position: 'absolute',
                  left: wp('3.3%'),
                }}>
                <Image
                  style={[styles_login.BackArrow, {tintColor: '#fff'}]}
                  source={require('../../assets/images/BackArrow.png')}
                />
              </TouchableOpacity>

              <Text
                style={[
                  styles_login.HeaderTextStyle,
                  {fontSize: 24, fontFamily: 'Rubik-SemiBold', color: '#fff'},
                ]}>
                Get Started
              </Text>
            </View>

            <Text
              style={[
                styles_login.HeaderTextStyle,
                {
                  marginTop: hp('11%'),
                  paddingLeft: wp('5%'),
                  color: '#5360EE',
                  fontFamily: 'Rubik-SemiBold',
                  fontSize: 30,
                  paddingBottom: hp('1.7%'),
                },
              ]}>
              Sign Up
            </Text>

            <Input
              value={Name}
              onChangeText={Name => SetName(Name)}
              placeholder={'FULL NAME'}
            />
            <Input
              value={Email}
              onChangeText={Email => SetEmail(Email)}
              placeholder={'EMAIL ADDRESS'}
            />
            <Input
            keyboardType={"numeric"}
              maxLength={10}
              value={Mobile}
              onChangeText={Mobile => SetMobile(Mobile)}
              placeholder={'MOBILE NUMBER'}
            />
            <Input
              value={UserName}
              onChangeText={UserName => SetUserName(UserName)}
              placeholder={'USERNAME'}
            />
            <Input
              secureTextEntry={true}
              value={Password}
              onChangeText={Password => SetPassword(Password)}
              placeholder={'PASSWORD'}
            />
            <Input
              secureTextEntry={true}
              value={conPassword}
              onChangeText={conPassword => SetconPassword(conPassword)}
              placeholder={'REPEAT PASSWORD'}
            />
            <View
              style={{
                width: wp('100%'),
                alignItems: 'center',
                marginTop: hp('2%'),
              }}>
              {SignupIndicator === true ? (
                <ProgressIndicator />
              ) : SignupIndicator === false ? (
                <ButtonTouch
                  onpress={() => {
                    // navigation.navigate('LoginPage');
                    SignUpValidation();
                    SetSignupIndicator(true);
                  }}
                  TextName={'CREATE ACCOUNT'}
                />
              ) : (
                <ButtonTouch
                  onpress={() => {
                    // navigation.navigate('LoginPage');
                    SignUpValidation();
                    SetSignupIndicator(true);
                  }}
                  TextName={'CREATE ACCOUNT'}
                />
              )}
              <CreateAccButton
                onpressAcc={() => {
                  navigation.replace('LoginPage');
                }}
                AccText={'OR LOGIN'}
              />
            </View>

            <FlashMessage position="bottom" />
          </ImageBackground>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default SignUpPage;

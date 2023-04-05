//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {styles_login} from './LoginSignUpStyle';
import Input from '../../components/input';
import ButtonTouch from '../../components/Button';
import CreateAccButton from '../../components/CreateAccButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import BaseURl from '../../Geners/BaseUrl';
import FlashMessage from 'react-native-flash-message';
import {showMessage} from 'react-native-flash-message';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProgressIndicator from '../../components/ProgressIndicator';

// create a component

const LoginPage = ({navigation}) => {
  const [LoginEmail, SetLoginEmail] = useState('');
  const [LoginPassword, SetLoginPassword] = useState('');
  const [LoginIndicator, SetLoginIndicator] = useState(false);

  const LoginValidation = async () => {
    LoginEmail == '' || LoginPassword == ''
      ? (setTimeout(() => {
          SetLoginIndicator(false);
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
      : await axios
          .post(BaseURl + 'api/v1/auth/login', {
            email: LoginEmail,
            password: LoginPassword,
          })
          .then(async response => {
            response.data.success === true
              ? (setTimeout(() => {
                  SetLoginIndicator(false);
                  navigation.reset({

                    routes: [{ name: 'BottomTab' }],
                    });
                }, 1000),
                showMessage({
                  message: 'Login Successful',
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
                await AsyncStorage.setItem('LoginToken', response.data.token))
              : response.data.success === false
              ? (showMessage({
                  message: 'Please Enter Valid Email Or Password',
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
                }),
                SetLoginIndicator(false))
              : (showMessage({
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
                }),
                SetLoginIndicator(false));
          })
          .catch(error => {
            showMessage({
              message: 'Please Enter Valid Email Or Password',
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
            }),
              SetLoginIndicator(false);
            console.log(error);
          });
  };

  return (
    // <View style={styles.container}>
    <KeyboardAwareScrollView>
      <TouchableWithoutFeedback
       onPress={Keyboard.dismiss}
      >
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          style={{height: hp('100%'), width: wp('100%')}}
          resizeMode={'stretch'}
          source={require('../../../assets/images/BackgroundImages/LoginPage.png')}>
          <View style={styles_login.HomeTextView}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('LandingPage');
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
              Welcome Back
            </Text>
          </View>
          <Text
            style={[
              styles_login.HeaderTextStyle,
              {
                marginTop: hp('22%'),
                paddingLeft: wp('5%'),
                color: '#5360EE',
                fontFamily: 'Rubik-SemiBold',
                fontSize: 30,
                paddingBottom: hp('3%'),
              },
            ]}>
            Login
          </Text>
          <View>
            <Input
              value={LoginEmail}
              onChangeText={LoginEmail => SetLoginEmail(LoginEmail)}
              placeholder={'EMAIL'}
            />
            <Input
            secureTextEntry={true}
              onChangeText={LoginPassword => SetLoginPassword(LoginPassword)}
              placeholder={'PASSWORD'}
              Inputstyle={{marginBottom: 3}}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.replace('ForgotPass');
              }}>
              <Text
                style={[
                  styles_login.HeaderTextStyle,
                  {
                    fontSize: 15,
                    flexDirection: 'row',
                    alignSelf: 'flex-end',
                    marginRight: wp('5%'),
                    marginVertical: 5,
                    paddingBottom: hp('3%'),
                    color: '#5360EE',
                  },
                ]}>
                FORGOT PASSWORD?
              </Text>
            </TouchableOpacity>

            <View
              style={{
                width: wp('100%'),
                alignItems: 'center',
              }}>
              {LoginIndicator === true ? (
               <ProgressIndicator/>
              ) : LoginIndicator === false ? (
                <ButtonTouch
                  onpress={() => {
                    LoginValidation();
                    SetLoginIndicator(true);
                    //  navigation.navigate('BottomTab');
                  }}
                  TextName={'LOGIN'}
                />
              ) : (
                <ButtonTouch
                  onpress={() => {
                    LoginValidation();
                    SetLoginIndicator(true);
                    //  navigation.navigate('BottomTab');
                  }}
                  TextName={'LOGIN'}
                />
              )}
              <CreateAccButton
                onpressAcc={() => {
                  navigation.replace('SignUpPage');
                }}
                AccText={'OR CREATE ACCOUNT'}
              />
            </View>
          </View>
          <FlashMessage position="bottom" />
        </ImageBackground>
      </SafeAreaView>
      </TouchableWithoutFeedback>

     
    </KeyboardAwareScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default LoginPage;

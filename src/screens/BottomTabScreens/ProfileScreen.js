//import liraries
import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  Modal,
  TouchableWithoutFeedback,
  TextInput,
  Button,
  ActivityIndicator
} from 'react-native';
import {styles_login} from '../LoginScreen/LoginSignUpStyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Avatar} from 'react-native-elements';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SellingScreen from '../TopTabScreens/SellingScreen';
import BuyingScreen from '../TopTabScreens/BuyingScreen';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import ImagePicker from 'react-native-image-crop-picker';
import BaseURl from '../../Geners/BaseUrl';
import axios from 'axios';
import  AsyncStorage  from '@react-native-async-storage/async-storage';

// create a component
const ProfileScreen = ({navigation}) => {
  const Menutouchable = useRef();

  const Tab = createMaterialTopTabNavigator();

  const [Menuvisible, setMenuVisible] = useState(false);
  const [EditProfile, setEditProfile] = useState(false);
  const [UserName, setUserName] = useState('Ingredia Nutrisha');
  const [UserEmail, setUserEmail] = useState('ingredia@email.com');
  const [ProfileURL, setProfileURL] = useState('');
  

  const hideMenu = () => setMenuVisible(false);

  const showMenu = () => setMenuVisible(true);

  const profilePicker = () => {
    ImagePicker.openPicker({}).then(image => {
      console.log(image.path);
      setProfileURL(image.path);
    });
  };

  const SaveData = () => {
    setEditProfile(false)
  };

  const UserLogout = async () => {
    await axios
    .get(BaseURl + 'api/v1/auth/logout')
    .then((response)=>{
       AsyncStorage.removeItem('LoginToken'),
      navigation.replace("LandingPage"),
      showMessage({
        message: 'Logged Out',
        type: 'success',
        floating: true,
        autoHide: true,
        duration: 900,
        style: {
          marginBottom:40,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 10},
          shadowOpacity: 1,
          shadowRadius: 10,
          elevation: 10,
        },
      })
    })
    .catch((error)=>{
        console.log(error,"===errrr===")
    })
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles_login.HomeTextView}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              position: 'absolute',
              left: wp('3.3%'),
            }}>
            <Image
              style={styles_login.BackArrow}
              source={require('../../../assets/images/BackArrow.png')}
            />
          </TouchableOpacity>

          <Text style={[styles_login.HeaderTextStyle, {fontSize: 18}]}>
            Profile
          </Text>
          <TouchableOpacity
            hitSlop={{top: 5, bottom: 5, left: 10, right: 10}}
            onPress={() => {
              showMenu();
            }}
            style={{
              position: 'absolute',
              right: wp('3.3%'),
            }}>
            <View
              style={{
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Menu
                style={{padding: 20, marginBottom: 0, paddingBottom: 0}}
                visible={Menuvisible}
                anchor={
                  <Image
                    style={styles_login.BackArrow}
                    source={require('../../../assets/images/MenuDots.png')}
                  />
                }
                onRequestClose={hideMenu}>
                <MenuItem
                  onPress={() => {
                    setEditProfile(true);
                  }}
                  textStyle={[
                    styles_login.HeaderTextStyle,
                    {fontSize: 18, fontWeight: '650'},
                  ]}>
                  Edit Profile
                </MenuItem>

                <Modal
                  style={{alignSelf:"center"}}
                  animationType="fade"
                  transparent={true}
                  visible={EditProfile}>
                  <TouchableWithoutFeedback
                    onPress={() => {
                      setEditProfile(false);
                    }}>
                    <View style={styles.centeredView}>
                      <View style={styles.modalView}>
                        <View
                          style={{
                            alignItems: 'center',
                          }}>
                            <Text style={[styles_login.HeaderTextStyle,{fontSize:17,paddingVertical:10}]}>Press the contents you want to edit</Text>
                          <TouchableOpacity
                            onPress={() => {
                              profilePicker();
                            }}>
                            <Avatar
                              size={140}
                              rounded
                              source={
                                ProfileURL === ''
                                  ? require('../../../assets/images/UserOne.png')
                                  : {uri: ProfileURL}
                              }
                            />
                          </TouchableOpacity>
                          <TextInput
                            style={[
                              styles_login.HeaderTextStyle,
                              {fontSize: 22, paddingTop: 15},
                            ]}
                            placeholder="Edit Name"
                            value={UserName}
                            onChangeText={UserName => {
                              setUserName(UserName);
                            }}
                          />
                          <TextInput
                            style={[
                              styles_login.HeaderTextStyle,
                              {
                                fontSize: 15,
                                color: '#96A0A1',
                                paddingTop: 0,
                                paddingBottom: 10,
                              },
                            ]}
                            placeholder="Edit Name"
                            value={UserEmail}
                            onChangeText={UserEmail => {
                              setUserEmail(UserEmail);
                            }}
                          />
                          <Button 
                          onPress={()=>{
                            SaveData()
                          }}
                          title="Save" />
                        </View>
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                </Modal>

                <MenuItem
                  textStyle={[
                    styles_login.HeaderTextStyle,
                    {fontSize: 18, fontWeight: '650'},
                  ]}
                  onPress={() => {
                    navigation.navigate('PortfolioScreen');
                  }}>
                  Portfolio
                </MenuItem>
                <MenuItem
                  textStyle={[
                    styles_login.HeaderTextStyle,
                    {fontSize: 18, fontWeight: '650'},
                  ]}
                  onPress={hideMenu}>
                  Privacy Policy
                </MenuItem>
                <MenuItem
                  onPress={() => {
                    UserLogout();
                  }}
                  textStyle={[
                    styles_login.HeaderTextStyle,
                    {fontSize: 18, fontWeight: '650'},
                  ]}>
                  Logout
                </MenuItem>
              </Menu>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Avatar
            size={140}
            rounded
            source={
              ProfileURL === ''
                ? require('../../../assets/images/UserOne.png')
                : {uri: ProfileURL}
            }
          />
         
          <Text
            style={[
              styles_login.HeaderTextStyle,
              {fontSize: 22, paddingTop: 10},
            ]}>
            {UserName}
          </Text>
          <Text
            style={[
              styles_login.HeaderTextStyle,
              {fontSize: 15, color: '#96A0A1'},
            ]}>
            {UserEmail}
          </Text>
        </View>

        <Tab.Navigator
          swipeEnabled={false}
          tabBarOptions={{
            pressColor: 'transparent',
            style: {
              elevation: 0, // for Android
              shadowOffset: {
                width: 0,
                height: 0, // for iOS
              },
            },
          }}
          screenOptions={{
            tabBarIndicatorStyle: {
              backgroundColor: 'transparent',
              elevation: 0,
            },
          }}>
          <Tab.Screen
            name="Selling"
            component={SellingScreen}
            options={{
              tabBarLabel: ({focused}) => (
                <Text
                  focused={focused}
                  style={{
                    fontSize: 15,
                    textTransform: 'none',
                    paddingBottom: 6,
                    marginBottom: 0,
                    borderBottomWidth: 1,
                    fontFamily: 'Rubik-Regular',
                    borderColor: focused ? '#303536' : '#96A0A1',
                    color: focused ? '#303536' : '#96A0A1',
                  }}>
                  {'     '}
                  Selling{'     '}
                </Text>
              ),
            }}
          />
          <Tab.Screen
            name="Buying"
            component={BuyingScreen}
            options={{
              tabBarLabel: ({focused}) => (
                <Text
                  focused={focused}
                  style={{
                    fontSize: 15,
                    textTransform: 'none',
                    paddingBottom: 6,
                    marginBottom: 0,
                    borderBottomWidth: 1,
                    fontFamily: 'Rubik-Regular',
                    borderColor: focused ? '#303536' : '#96A0A1',
                    color: focused ? '#303536' : '#96A0A1',
                  }}>
                  {'     '}
                  Buying{'     '}
                </Text>
              ),
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  MenuTextStyle: {
    fontSize: 20,
    paddingVertical: 5,
    marginBottom: 5,
    fontWeight: '600',
  },
  centeredView: {
    flex: 1,
    justifyContentL:"center",

    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    width: wp('90%'),
marginTop:20,
       justifyContentL:"center",
        padding:15,
        borderRadius:20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

//make this component available to the app
export default ProfileScreen;

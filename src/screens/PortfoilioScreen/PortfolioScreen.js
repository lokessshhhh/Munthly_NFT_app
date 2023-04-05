//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Avatar} from 'react-native-elements';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {styles_login} from '../LoginScreen/LoginSignUpStyle';
import ArtworkScreen from '../TopTabScreens/ArtworkScreen';

// create a component
const PortfolioScreen = ({navigation}) => {

  const Tab = createMaterialTopTabNavigator();

  function SettingsScreen() {
    return (
      <View style={{ alignItems: 'center'}}>
        <Text>Test</Text>
      </View>
    );
  }

  function FeedScreen() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Test</Text>
      </View>
    );
  }

  return (
    <View 
    style={styles.container}>
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
          Portfolio
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          padding: 15,
        }}>
        <Avatar
          size={140}
          rounded
          source={require('../../../assets/images/UserOne.png')}
        />
        <View style={{paddingLeft: 17}}>
          <Text
            style={[
              styles_login.HeaderTextStyle,
              {fontSize: 22, paddingTop: 10},
            ]}>
            Ingredia Nutrisha
          </Text>
          <Text
            style={[
              styles_login.HeaderTextStyle,
              {fontSize: 15, color: '#96A0A1'},
            ]}>
            ingredia@email.com
          </Text>
        </View>
      </View>

      <View style={{height:hp("90%"),width: wp('100%'),paddingBottom:170}}>
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
            tabBarActiveTintColor: '#000000',
            tabBarInactiveTintColor: '#96A0A1',
            tabBarIndicatorStyle: {
              backgroundColor: 'transparent',
              elevation: 0,
            },
            tabBarLabelStyle: {
              position: 'relative',
              right: wp('28%'),
              fontSize: 15,
              textTransform: 'none',
              paddingBottom: 4,
              marginBottom: 0,
              borderBottomWidth: 1,
              fontFamily: 'Rubik-Regular',
              borderColor: '#000000',
            },
          }}>
          <Tab.Screen name="     Artwork     " component={ArtworkScreen} />
        </Tab.Navigator>
      </View>
    </View>
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
export default PortfolioScreen;

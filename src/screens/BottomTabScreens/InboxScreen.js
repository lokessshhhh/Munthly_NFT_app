//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image,SafeAreaView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {styles_login} from '../LoginScreen/LoginSignUpStyle';
import MessagesScreen from '../TopTabScreens/MessagesScreen';
import NotificationsScreen from '../TopTabScreens/NotificationsScreen';
// create a component
const InboxScreen = ({navigation}) => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <SafeAreaView style={styles.container}>
  <View style={{flex:1}}>
      <View style={styles_login.HomeTextView}>
        <TouchableOpacity
           onPress={()=>{
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
          Inbox
        </Text>
      </View>
      <View>
        
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: '#96A0A1',
          tabBarIndicatorStyle: {
            backgroundColor: 'black',
          },
          tabBarLabelStyle: {
            textTransform: 'none',
          },
        }}>
        <Tab.Screen name="Messages" component={MessagesScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
      </Tab.Navigator>
    </View>
    </SafeAreaView>
  
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
export default InboxScreen;

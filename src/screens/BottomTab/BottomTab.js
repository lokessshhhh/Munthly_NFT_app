//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../BottomTabScreens/HomeScreen';
import CollectionScreen from '../BottomTabScreens/CollectionScreen';
import InboxScreen from '../BottomTabScreens/InboxScreen';
import ProfileScreen from '../BottomTabScreens/ProfileScreen';
import QRScanner from '../../components/QRScanner';

// create a component
const BottomTab = () => {
  function SettingsScreen() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>thrth</Text>
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

  function MainScreen() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Main</Text>
      </View>
    );
  }

  const Tab = createBottomTabNavigator();

  return (

       <Tab.Navigator
     
     screenOptions={{
       headerShown:false,

       tabBarStyle: {
         height: 65,
         paddingHorizontal: 3,
         paddingTop: 11,
       },
     }}>
     <Tab.Screen
       options={{
         tabBarIcon: ({color, focused}) => (
           <Image
             style={focused ? styles.pressed : styles.notpressed}
             source={require('../../../assets/images/BottomTabIcons/home.png')}
           />
         ),
         tabBarLabel: '',
       }}
       name="Home"
       component={HomeScreen}></Tab.Screen>
     <Tab.Screen
       options={{
         tabBarIcon: ({color, focused}) => (
           <Image
             style={focused ? styles.pressed : styles.notpressed}
             source={require('../../../assets/images/BottomTabIcons/Book.png')}
           />
         ),
         tabBarLabel: '',
       }}
       name="MyCollection"
       component={CollectionScreen}></Tab.Screen>
     <Tab.Screen
       options={{
         tabBarIcon: ({color, focused}) => (
           <Image
             style={focused ? styles.pressed : styles.notpressed}
             source={require('../../../assets/images/BottomTabIcons/Frame.png')}
           />
         ),
         tabBarLabel: '',
       }}
       name="QRScanner"
       component={QRScanner}></Tab.Screen>
     <Tab.Screen
       options={{
         tabBarIcon: ({color, focused}) => (
           <Image
             style={focused ? styles.pressed : styles.notpressed}
             source={require('../../../assets/images/BottomTabIcons/Mail.png')}
           />
         ),
         tabBarLabel: '',
       }}
       name="MainScreen"
       component={InboxScreen}></Tab.Screen>
     <Tab.Screen
       options={{
         headershowm: false,
         tabBarIcon: ({color, focused}) => (
           <Image
             style={focused ? styles.pressed : styles.notpressed}
             source={require('../../../assets/images/BottomTabIcons/user.png')}
           />
         ),
         tabBarLabel: '',
       }}
       name="Profile"
       component={ProfileScreen}></Tab.Screen>
   </Tab.Navigator>

   
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  notpressed: {
    height: 20,
    width: 20,
    tintColor: 'grey',
  },
  pressed: {
    height: 20,
    width: 20,
    tintColor: '#5360EE',
  },
});

//make this component available to the app
export default BottomTab;

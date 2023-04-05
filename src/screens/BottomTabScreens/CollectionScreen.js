//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {styles_login} from '../LoginScreen/LoginSignUpStyle';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FavouriteScreen from '../TopTabScreens/FavouriteScreen';
import OwnedArtworkScreen from '../TopTabScreens/OwnedArtworkScreen';
import { SafeAreaView } from 'react-native-safe-area-context';

// create a component
const CollectionScreen = ({navigation}) => {
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
        <Text>NO</Text>
      </View>
    );
  }

  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex:1}}>
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
          My Collection
        </Text>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#5360EE',
          tabBarInactiveTintColor: '#96A0A1',
          tabBarIndicatorStyle: {
            backgroundColor: '#5360EE',
          },
          tabBarLabelStyle:{
            textTransform:"none",
            fontSize:16
          }
        }}>
        <Tab.Screen name="Owned" component={OwnedArtworkScreen}/>
        <Tab.Screen name="Favourited" component={FavouriteScreen}/>
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
});

//make this component available to the app
export default CollectionScreen;

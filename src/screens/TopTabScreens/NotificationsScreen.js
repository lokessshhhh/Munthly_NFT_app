//import liraries
import {FlatList} from 'native-base';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {styles_login} from '../LoginScreen/LoginSignUpStyle';

const NotificationList = [
  {
    // image: require('../../../assets/images/GreyColor.png'),
    Notification: '1',
  },
  {
    // image: require('../../../assets/images/GreyColor.png'),
    Notification: '1',
  },
  {
    // image: require('../../../assets/images/GreyColor.png'),
    Notification: '1',
  },
  {
    // image: require('../../../assets/images/GreyColor.png'),
    Notification: '1',
  },
  {
    // image: require('../../../assets/images/GreyColor.png'),
    Notification: '1',
  },
  {
    // image: require('../../../assets/images/GreyColor.png'),
    Notification: '1',
  },
  {
    // image: require('../../../assets/images/GreyColor.png'),
    Notification: '1',
  },
  {
    // image: require('../../../assets/images/GreyColor.png'),
    Notification: '1',
  },
  {
    // image: require('../../../assets/images/GreyColor.png'),
    Notification: '1',
  },
  {
    // image: require('../../../assets/images/GreyColor.png'),
    Notification: '1',
  },
  {
    // image: require('../../../assets/images/GreyColor.png'),
    Notification: '1',
  },
  {
    // image: require('../../../assets/images/GreyColor.png'),
    Notification: '1',
  },
  {
    // image: require('../../../assets/images/GreyColor.png'),
    Notification: '1',
  },
];

// create a component
const NotificationsScreen = () => {
  const NotificationsListView = () => {
    return (
      <View style={styles.NotificationMainView}>
        <Avatar
          size={55}
          rounded
          source={require('../../../assets/images/UserTwo.png')}
        />
        <View style={{paddingLeft: 20,paddingRight:60}}>
          <Text style={[styles_login.HeaderTextStyle, {fontSize: 17,flexWrap:"wrap"}]}>
            Your artwork ‘Redemtion’ has been purchased!
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={NotificationList} renderItem={NotificationsListView} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  NotificationMainView: {
    flexDirection: 'row',
    padding: 15,
    width: wp('100%'),
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#e8e7e6',
    paddingVertical: 15,
    alignItems:"center"
  },
});

//make this component available to the app
export default NotificationsScreen;

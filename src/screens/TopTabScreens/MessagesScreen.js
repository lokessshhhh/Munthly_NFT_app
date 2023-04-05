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

const ArtistNameList = [
  {
    // image: require('../../../assets/images/GreyColor.png'),
    title: 'Artist Name',
  },
  {
    // image: require('../../../assets/images/GreyColor.png'),
    title: 'Artist Name',
  },
  {
    // image: require('../../../assets/images/GreyColor.png'),
    title: 'Artist Name',
  },
  {
    // image: require('../../../assets/images/GreyColor.png'),
    title: 'Artist Name',
  },
  {
    // image: require('../../../assets/images/GreyColor.png'),
    title: 'Artist Name',
  },
  {
    // image: require('../../../assets/images/GreyColor.png'),
    title: 'Artist Name',
  },
  {
    // image: require('../../../assets/images/GreyColor.png'),
    title: 'Artist Name',
  },
  {
    // image: require('../../../assets/images/GreyColor.png'),
    title: 'Artist Name',
  },
  {
    // image: require('../../../assets/images/GreyColor.png'),
    title: 'Artist Name',
  },
  {
    // image: require('../../../assets/images/GreyColor.png'),
    title: 'Artist Name',
  },
  {
    // image: require('../../../assets/images/GreyColor.png'),
    title: 'Artist Name',
  },
  {
    // image: require('../../../assets/images/GreyColor.png'),
    title: 'Artist Name',
  },
  {
    // image: require('../../../assets/images/GreyColor.png'),
    title: 'Artist Name',
  },
];

// create a component
const MessagesScreen = () => {
  const ArtistNameListView = () => {
    return (
      <View style={styles.MessageMainView}>
        <Avatar
          size={55}
          rounded
          source={require('../../../assets/images/UserOne.png')}
        />
        <View style={{paddingLeft: 12}}>
          <Text
            style={[
              styles_login.HeaderTextStyle,
              {fontSize: 17,paddingBottom:5},
            ]}>
            Artist Name
          </Text>
          <Text
            style={[
              styles_login.HeaderTextStyle,
              {fontSize: 17, color: '#96A0A1'},
            ]}>
            Artwork Name
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList 
        showsVerticalScrollIndicator={false}
      data={ArtistNameList} renderItem={ArtistNameListView} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  MessageMainView: {
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
export default MessagesScreen;

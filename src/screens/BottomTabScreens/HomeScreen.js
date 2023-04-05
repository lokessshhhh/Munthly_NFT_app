//import liraries
import React, {useEffect,useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, BackHandler} from 'react-native';
import {styles_login} from '../LoginScreen/LoginSignUpStyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FlatList, ScrollView} from 'native-base';
import axios from 'axios';
import BaseURl from '../../Geners/BaseUrl';
import ProgressIndicator from '../../components/ProgressIndicator';

const ArtistPageList = [
  {
    image: require('../../../assets/images/SampleImages/Image.png'),
    title: 'Bobbi Essers',
  },
  {
    image: require('../../../assets/images/SampleImages/Image1.png'),
    title: 'Bobbi Essers',
  },
  {
    image: require('../../../assets/images/SampleImages/Image.png'),
    title: 'Bobbi Essers',
  },
  {
    image: require('../../../assets/images/SampleImages/Image1.png'),
    title: 'Bobbi Essers',
  },
  {
    image: require('../../../assets/images/SampleImages/Image.png'),
    title: 'Bobbi Essers',
  },
  {
    image: require('../../../assets/images/SampleImages/Image1.png'),
    title: 'Bobbi Essers',
  },
  {
    image: require('../../../assets/images/SampleImages/Image.png'),
    title: 'Bobbi Essers',
  },
  {
    image: require('../../../assets/images/SampleImages/Image1.png'),
    title: 'Bobbi Essers',
  },
];

// create a component
const HomeScreen = ({navigation}) => {
  const [MyUserData, SetMyUserData] = useState([]);
  const [HomeIndicator, SetHomeIndicator] = useState(true);

  useEffect(() => {
    RetriveData();
  }, []);




  console.log(ArtistPageList.image,"imae=====")

  const RetriveData = async () => {
    await axios
      .get(BaseURl + 'api/v1/artworks')
      .then(response => {
        setTimeout(() => {
          SetHomeIndicator(false);
        }, 100);
        SetMyUserData(response.data.data);
      })
      .catch(error => {
        console.log(error, '===err====');
      });
  };

  const ArtistList = ({item}) => {
    return (
      <View
        style={{
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            // RetriveData();
            console.log(item._id);
            navigation.navigate('ArtDetailsHome', {UserId: item._id});
          }}>
          <View style={styles.ArtistImageBGstyle}>
            <Image
              style={{height: '100%', width: '100%'}}
              source={require('../../../assets/images/SampleImages/Image1.png')}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.ArtistNameView}>
          <Text
            style={[
              styles_login.HeaderTextStyle,
              {fontSize: 22, marginVertical: hp('2.5%')},
            ]}>
            {item.artist}
          </Text>
          <Text
            style={[
              styles_login.HeaderTextStyle,
              {fontSize: 13, marginBottom: hp('1.3%')},
            ]}>
            {item.artistBio}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.HomeTextView}>
        <Image
          style={{height: hp('7%'), width: wp('33%')}}
          resizeMode={'contain'}
          source={require('../../../assets/images/HeaderImage/HeaderImage.png')}
        />
      </View>

      <ScrollView>
        <View
          style={[
            styles_login.HeaderText,
            {
              top: hp('2%'),
              paddingBottom: hp('3.5%'),
              alignItems: 'flex-start',
              marginLeft: wp('5%'),
            },
          ]}>
          <Text
            style={[
              styles_login.HeaderTextStyle,
              {fontSize: 35, fontFamily: 'Rubik-Bold'},
            ]}>
            Enter the new{'\n'}digital world of art
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: wp('5%'),
            paddingTop: 10,
          }}>
          <Text style={[styles_login.HeaderTextStyle, {fontSize: 25}]}>
            Artist Of The
          </Text>
          <Text
            style={[
              styles_login.HeaderTextStyle,
              {
                fontSize: 25,
                marginLeft: 8,
                fontFamily: 'Rubik-Bold',
                color: '#5360EE',
              },
            ]}>
            Munth
          </Text>
        </View>
        {/* <ArtistList/> */}

        {HomeIndicator === false ? (
          <FlatList data={MyUserData} renderItem={ArtistList} />
        ) : HomeIndicator === true ? (
          <View style={styles.ProgressindicatorView}>
            <View style={{marginBottom:hp("40%")}}>
            <ProgressIndicator />

            </View>
          </View>
        ) : (
          <FlatList data={MyUserData} renderItem={ArtistList} />
        )}
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  HomeTextView: {
    alignItems: 'center',
    marginVertical: 25,
  },
  ArtistNameView: {
    justifyContent: 'flex-start',
    width: wp('95%'),
    marginLeft: wp('10%'),
    marginTop: hp('2%'),
    paddingRight: wp('10%'),
  },
  ArtistImageBGstyle: {
    backgroundColor: 'lightgrey',
    height: wp('90%'),
    width: wp('95%'),
    borderRadius: 18,
    justifyContent: 'flex-end',
    marginTop: hp('2%'),
    overflow: 'hidden',
  },
  ProgressindicatorView:{
    justifyContent:"center",alignItems:"center",height:hp("100%")
  }
});

//make this component available to the app
export default HomeScreen;

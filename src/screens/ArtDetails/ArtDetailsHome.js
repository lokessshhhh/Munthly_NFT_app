//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Avatar} from 'react-native-elements';
import {styles_login} from '../LoginScreen/LoginSignUpStyle';
import ImageSlider from '../../components/ImageSlider';
import {FlatList, ScrollView} from 'native-base';
import ButtonTouch from '../../components/Button';
import AmountSlider from '../../components/AmountSlider';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import BaseURl from '../../Geners/BaseUrl';
import {useEffect} from 'react';
import ProgressIndicator from '../../components/ProgressIndicator';

// create a component
const ArtDetailsHome = ({navigation, route}) => {
  const [SliderValue, SetSliderValue] = useState(0);
  const [ProductPrice, SetProductPrice] = useState(0);
  const [UserData, SetUserData] = useState([]);
  const [SingleIndicator, SetSingleIndicator] = useState(true);

  useEffect(() => {
    RetriveUserData();
  }, []);

  const RetriveUserData = async () => {
    await axios
      .get(BaseURl + 'api/v1/artworks/' + route.params.UserId)
      .then(response => {
        setTimeout(() => {
          SetSingleIndicator(false);
        }, 100);
        SetUserData(response.data.data);
        SetProductPrice(response.data.data.price);
        console.log(response.data.data, '========res======');
      })
      .catch(error => {
        console.log(error, '===err====');
      });
  };

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
            Buy Artwork
          </Text>
        </View>
        {SingleIndicator === true ? (
          <View style={{height: hp('100%'),justifyContent:"center"}}>
            <View style={{marginBottom:hp("20%")}}>
            <ProgressIndicator />
            </View>
          
          </View>
        ) : SingleIndicator === false ? (
          <ScrollView style={{height: hp('100%')}}>
            <ImageSlider />
            <View style={{alignItems: 'center'}}>
              <Text
                style={[
                  styles_login.HeaderTextStyle,
                  {
                    fontSize: 23,
                    alignSelf: 'flex-start',
                    paddingLeft: wp('5%'),
                    paddingVertical: hp('1%'),
                  },
                ]}>
                {UserData.title}
              </Text>
              <View style={styles.MessageMainView}>
                <Avatar
                  size={57}
                  rounded
                  source={require('../../../assets/images/UserOne.png')}
                />
                <View style={{paddingLeft: 12}}>
                  <Text
                    style={[
                      styles_login.HeaderTextStyle,
                      {fontSize: 15, color: '#96A0A1', flexWrap: 'wrap'},
                    ]}>
                    {UserData.artist}
                  </Text>
                  <Text
                    style={[
                      styles_login.HeaderTextStyle,
                      {fontSize: 15, color: '#96A0A1'},
                    ]}>
                    Painter
                  </Text>
                </View>
                <View
                  style={{
                    position: 'absolute',
                    right: wp('0%'),
                    width: wp('40%'),
                    paddingLeft: wp('4%'),
                  }}>
                  <Text style={[styles_login.HeaderTextStyle, {fontSize: 18}]}>
                    Price From:
                  </Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text
                      style={[
                        styles_login.HeaderTextStyle,
                        {
                          fontSize: hp(2.7),
                          fontWeight: '600',
                          flexWrap: 'wrap',
                        },
                      ]}>
                      ¢ {ProductPrice}
                    </Text>
                    <Text
                      style={[
                        styles_login.HeaderTextStyle,
                        {fontSize: 15, marginLeft: 7, color: '#96A0A1'},
                      ]}>
                      per month
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'flex-start',
                marginTop: hp('1%'),
                paddingBottom: 30,
                borderBottomWidth: 1,
                borderColor: '#e8e7e6',
                width: wp('90%'),
                marginLeft: wp('5%'),
              }}>
              <Text
                style={[
                  styles_login.HeaderTextStyle,
                  {fontSize: 22, marginBottom: 20},
                ]}>
                Description
              </Text>
              <View style={styles.ArrowListView}>
                <Text
                  style={[
                    styles_login.HeaderTextStyle,
                    styles.DescriptionCategory,
                  ]}>
                  Medium:
                </Text>
                <Text
                  style={[
                    styles_login.HeaderTextStyle,
                    styles.DescriptionCategory,
                  ]}>
                  {UserData.medium}
                </Text>
              </View>
              <View style={styles.ArrowListView}>
                <Text
                  style={[
                    styles_login.HeaderTextStyle,
                    styles.DescriptionCategory,
                  ]}>
                  Size:
                </Text>
                <Text
                  style={[
                    styles_login.HeaderTextStyle,
                    styles.DescriptionCategory,
                  ]}>
                  {UserData.size}
                </Text>
              </View>
              <View style={styles.ArrowListView}>
                <Text
                  style={[
                    styles_login.HeaderTextStyle,
                    styles.DescriptionCategory,
                  ]}>
                  Year:
                </Text>
                <Text
                  style={[
                    styles_login.HeaderTextStyle,
                    styles.DescriptionCategory,
                  ]}>
                  {UserData.year}
                </Text>
              </View>
              <View style={styles.ArrowListView}>
                <Text
                  style={[
                    styles_login.HeaderTextStyle,
                    styles.DescriptionCategory,
                  ]}>
                  Origin:
                </Text>
                <Text
                  style={[
                    styles_login.HeaderTextStyle,
                    styles.DescriptionCategory,
                  ]}>
                  {UserData.origin}
                </Text>
              </View>

              <View style={[styles.ArrowListView, {marginTop: hp('1.8%')}]}>
                <Text
                  style={[
                    styles_login.HeaderTextStyle,
                    styles.DescriptionCategory,
                  ]}>
                  Artist Bio:
                </Text>
                <Text
                  style={[
                    styles_login.HeaderTextStyle,
                    styles.DescriptionCategory,
                    {width: '80%'},
                  ]}>
                  {UserData.artistBio}
                </Text>
              </View>
            </View>
            <View style={{alignItems: 'center', paddingVertical: hp('2.5%')}}>
              <Text style={[styles_login.HeaderTextStyle, {fontSize: 20}]}>
                How Many Munths:
              </Text>
              <Text
                style={[
                  styles_login.HeaderTextStyle,
                  {paddingTop: 23, fontSize: 35},
                ]}>
                {SliderValue == '0'
                  ? `¢ ${ProductPrice}`
                  : SliderValue == '3'
                  ? `¢ ${ProductPrice * 3}`
                  : SliderValue == '6'
                  ? `¢ ${ProductPrice * 6}`
                  : SliderValue == '12'
                  ? `¢ ${ProductPrice * 12}`
                  : SliderValue == '24'
                  ? `¢ ${ProductPrice * 24}`
                  : null}
              </Text>
              <Text
                style={[
                  styles_login.HeaderTextStyle,
                  {fontSize: 15, color: '#96A0A1', marginBottom: 23},
                ]}>
                per month
              </Text>
              <View style={{alignItems: 'center'}}>
                <Text style={[styles_login.HeaderTextStyle, {fontSize: 15}]}>
                  {SliderValue} months
                </Text>
              </View>
              <AmountSlider
                onValuesChange={value => SetSliderValue(value.toString())}
              />
              <Text
                style={[
                  styles_login.HeaderTextStyle,
                  {
                    fontSize: 10,
                    color: '#96A0A1',
                    paddingHorizontal: wp('18%'),
                    paddingVertical: hp('5%'),
                  },
                ]}>
                Upon purchase, an NFT proof-of-ownership will be added to your
                wallet
              </Text>
              <ButtonTouch
                style={{marginVertical: 20}}
                onpress={() => {
                  navigation.navigate('ConnectedPOP');
                }}
                TextName={'BUY NOW'}
              />
            </View>
          </ScrollView>
        ) : (
          <ScrollView style={{height: hp('100%')}}>
            <ImageSlider />
            <View style={{alignItems: 'center'}}>
              <Text
                style={[
                  styles_login.HeaderTextStyle,
                  {
                    fontSize: 23,
                    alignSelf: 'flex-start',
                    paddingLeft: wp('5%'),
                    paddingVertical: hp('1%'),
                  },
                ]}>
                {UserData.title}
              </Text>
              <View style={styles.MessageMainView}>
                <Avatar
                  size={57}
                  rounded
                  source={require('../../../assets/images/UserOne.png')}
                />
                <View style={{paddingLeft: 12}}>
                  <Text
                    style={[
                      styles_login.HeaderTextStyle,
                      {fontSize: 15, color: '#96A0A1', flexWrap: 'wrap'},
                    ]}>
                    {UserData.artist}
                  </Text>
                  <Text
                    style={[
                      styles_login.HeaderTextStyle,
                      {fontSize: 15, color: '#96A0A1'},
                    ]}>
                    Painter
                  </Text>
                </View>
                <View
                  style={{
                    position: 'absolute',
                    right: wp('0%'),
                    width: wp('40%'),
                    paddingLeft: wp('4%'),
                  }}>
                  <Text style={[styles_login.HeaderTextStyle, {fontSize: 18}]}>
                    Price From:
                  </Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text
                      style={[
                        styles_login.HeaderTextStyle,
                        {
                          fontSize: hp(2.7),
                          fontWeight: '600',
                          flexWrap: 'wrap',
                        },
                      ]}>
                      ¢ {ProductPrice}
                    </Text>
                    <Text
                      style={[
                        styles_login.HeaderTextStyle,
                        {fontSize: 15, marginLeft: 7, color: '#96A0A1'},
                      ]}>
                      per month
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'flex-start',
                marginTop: hp('1%'),
                paddingBottom: 30,
                borderBottomWidth: 1,
                borderColor: '#e8e7e6',
                width: wp('90%'),
                marginLeft: wp('5%'),
              }}>
              <Text
                style={[
                  styles_login.HeaderTextStyle,
                  {fontSize: 22, marginBottom: 20},
                ]}>
                Description
              </Text>
              <View style={styles.ArrowListView}>
                <Text
                  style={[
                    styles_login.HeaderTextStyle,
                    styles.DescriptionCategory,
                  ]}>
                  Medium:
                </Text>
                <Text
                  style={[
                    styles_login.HeaderTextStyle,
                    styles.DescriptionCategory,
                  ]}>
                  {UserData.medium}
                </Text>
              </View>
              <View style={styles.ArrowListView}>
                <Text
                  style={[
                    styles_login.HeaderTextStyle,
                    styles.DescriptionCategory,
                  ]}>
                  Size:
                </Text>
                <Text
                  style={[
                    styles_login.HeaderTextStyle,
                    styles.DescriptionCategory,
                  ]}>
                  {UserData.size}
                </Text>
              </View>
              <View style={styles.ArrowListView}>
                <Text
                  style={[
                    styles_login.HeaderTextStyle,
                    styles.DescriptionCategory,
                  ]}>
                  Year:
                </Text>
                <Text
                  style={[
                    styles_login.HeaderTextStyle,
                    styles.DescriptionCategory,
                  ]}>
                  {UserData.year}
                </Text>
              </View>
              <View style={styles.ArrowListView}>
                <Text
                  style={[
                    styles_login.HeaderTextStyle,
                    styles.DescriptionCategory,
                  ]}>
                  Origin:
                </Text>
                <Text
                  style={[
                    styles_login.HeaderTextStyle,
                    styles.DescriptionCategory,
                  ]}>
                  {UserData.origin}
                </Text>
              </View>

              <View style={[styles.ArrowListView, {marginTop: hp('1.8%')}]}>
                <Text
                  style={[
                    styles_login.HeaderTextStyle,
                    styles.DescriptionCategory,
                  ]}>
                  Artist Bio:
                </Text>
                <Text
                  style={[
                    styles_login.HeaderTextStyle,
                    styles.DescriptionCategory,
                    {width: '80%'},
                  ]}>
                  {UserData.artistBio}
                </Text>
              </View>
            </View>
            <View style={{alignItems: 'center', paddingVertical: hp('2.5%')}}>
              <Text style={[styles_login.HeaderTextStyle, {fontSize: 20}]}>
                How Many Munths:
              </Text>
              <Text
                style={[
                  styles_login.HeaderTextStyle,
                  {paddingTop: 23, fontSize: 35},
                ]}>
                {SliderValue == '0'
                  ? `¢ ${ProductPrice}`
                  : SliderValue == '3'
                  ? `¢ ${ProductPrice * 3}`
                  : SliderValue == '6'
                  ? `¢ ${ProductPrice * 6}`
                  : SliderValue == '12'
                  ? `¢ ${ProductPrice * 12}`
                  : SliderValue == '24'
                  ? `¢ ${ProductPrice * 24}`
                  : null}
              </Text>
              <Text
                style={[
                  styles_login.HeaderTextStyle,
                  {fontSize: 15, color: '#96A0A1', marginBottom: 23},
                ]}>
                per month
              </Text>
              <View style={{alignItems: 'center'}}>
                <Text style={[styles_login.HeaderTextStyle, {fontSize: 15}]}>
                  {SliderValue} months
                </Text>
              </View>
              <AmountSlider
                onValuesChange={value => SetSliderValue(value.toString())}
              />
              <Text
                style={[
                  styles_login.HeaderTextStyle,
                  {
                    fontSize: 10,
                    color: '#96A0A1',
                    paddingHorizontal: wp('18%'),
                    paddingVertical: hp('5%'),
                  },
                ]}>
                Upon purchase, an NFT proof-of-ownership will be added to your
                wallet
              </Text>
              <ButtonTouch
                style={{marginVertical: 20}}
                onpress={() => {
                  navigation.navigate('ConnectedPOP');
                }}
                TextName={'BUY NOW'}
              />
            </View>
          </ScrollView>
        )}
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
  MessageMainView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#e8e7e6',
    paddingVertical: 5,
    paddingBottom: 10,
    width: wp('90%'),
  },
  DescriptionCategory: {
    paddingLeft: 10,
    fontSize: 15,
    color: '#96A0A1',
    marginVertical: 0,
    flexWrap: 'wrap',
    alignSelf:"flex-start"
  },
  ArrowListView: {
    flexDirection: 'row',
    borderColor: '#D8D8D8',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
});

//make this component available to the app
export default ArtDetailsHome;

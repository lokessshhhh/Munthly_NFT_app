//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import {styles_login} from '../../../../src/screens/LoginScreen/LoginSignUpStyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Avatar} from 'react-native-elements';
import ImageSlider from '../../../components/ImageSlider';
import {ScrollView} from 'native-base';

// create a component
const ViewArtworkBuyer = ({navigation}) => {
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
              source={require('../../../../assets/images/BackArrow.png')}
            />
          </TouchableOpacity>
          <Text style={[styles_login.HeaderTextStyle, {fontSize: 18}]}>
            Artwork Name
          </Text>
        </View>
        <ScrollView>
          <ImageSlider />
          <View style={{width: wp('100%')}}>
            <View
              style={{
                justifyContent: 'flex-start',
                marginTop: hp('1%'),
                paddingBottom: 30,
                width: wp('90%'),
                marginLeft: wp('5%'),
              }}>
              <Text style={[styles_login.HeaderTextStyle, {fontSize: 24}]}>
                Self-Portrait II
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 5,
                  borderBottomWidth: 1,
                  paddingBottom: 8,
                  borderColor: '#D8D8D8',
                }}>
                <View>
                  <Text style={{marginBottom: hp('1%')}}>Creator</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      height: hp('8%'),
                    }}>
                    <Avatar
                      size={50}
                      rounded
                      source={require('../../../../assets/images/SplashScreen.png')}
                    />
                    <View style={{paddingLeft: 15}}>
                      <Text
                        style={[
                          styles_login.HeaderTextStyle,
                          {
                            fontSize: 17,
                            color: '#303536',
                            alignSelf: 'flex-start',
                          },
                        ]}>
                        Elliot McDonald
                      </Text>
                    </View>
                  </View>
                </View>
                <View>
                  <Text style={{marginBottom: hp('1%')}}>Status</Text>
                  <View
                    style={{
                      alignItems: 'center',
                      flexDirection: 'row',
                      height: hp('8%'),
                    }}>
                    <Text
                      style={[styles_login.HeaderTextStyle, {fontSize: 18}]}>
                      Sold
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  borderBottomWidth: 1,
                  paddingBottom: 20,
                  borderColor: '#D8D8D8',
                }}>
                <Text
                  style={[
                    styles_login.HeaderTextStyle,
                    {fontSize: 22, marginVertical: 20},
                  ]}>
                  Description
                </Text>
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
                  Size:
                </Text>
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
                  Origin:
                </Text>
                <Text
                  style={[
                    styles_login.HeaderTextStyle,
                    styles.DescriptionCategory,
                    {marginTop: hp('2%')},
                  ]}>
                  Artist Bio:{'\n'}Bobbi Essers, artist and painter from
                  Utrecht, Netherlands. Essers is graduatiing from HKU Fine Arts
                  in June 2022. Discover her paintings, and why she was selected
                  to be this munth’s highlighted artsist.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
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
  DescriptionCategory: {
    fontSize: 15,
    color: '#96A0A1',
    marginVertical: 0,
    flexWrap: 'wrap',
  },
  MessageMainView: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderColor: 'black',
    paddingVertical: 5,
    paddingBottom: 10,
    width: wp('90%'),
    alignItems: 'center',
  },
});

//make this component available to the app
export default ViewArtworkBuyer;

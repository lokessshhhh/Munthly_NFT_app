//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity,Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ButtonTouch from '../../components/Button';
import {FlatGrid} from 'react-native-super-grid';
import { useState } from 'react';

// create a component
const SellingScreen = ({navigation}) => {



  const items = [
    {name: 'TURQUOISE',image: require('../../../assets/images/SampleImages/Image.png')},
    {name: 'EMERALD', code: '#2ecc71',image: require('../../../assets/images/SampleImages/Image1.png')},
    {name: 'PETER RIVER', code: '#3498db',image: require('../../../assets/images/SampleImages/Image1.png')},
    {name: 'AMETHYST', code: '#9b59b6',image: require('../../../assets/images/SampleImages/Image.png')},
    {name: 'WET ASPHALT', code: '#34495e',image: require('../../../assets/images/SampleImages/Image.png')},
    {name: 'GREEN SEA', code: '#16a085',image: require('../../../assets/images/SampleImages/Image1.png')},
    {name: 'NEPHRITIS', code: '#27ae60',image: require('../../../assets/images/SampleImages/Image1.png')},
    {name: 'BELIZE HOLE', code: '#2980b9',image: require('../../../assets/images/SampleImages/Image.png')},
    {name: 'WISTERIA', code: '#8e44ad',image: require('../../../assets/images/SampleImages/Image.png')},
    {name: 'MIDNIGHT BLUE', code: '#2c3e50',image: require('../../../assets/images/SampleImages/Image1.png')},
    {name: 'SUN FLOWER', code: '#f1c40f',image: require('../../../assets/images/SampleImages/Image1.png')},
    {name: 'CARROT', code: '#e67e22',image: require('../../../assets/images/SampleImages/Image.png')},
    {name: 'ALIZARIN', code: '#e74c3c',image: require('../../../assets/images/SampleImages/Image.png')},
    {name: 'CLOUDS', code: '#ecf0f1',image: require('../../../assets/images/SampleImages/Image1.png')},
    {name: 'CONCRETE', code: '#95a5a6',image: require('../../../assets/images/SampleImages/Image1.png')},
    {name: 'ORANGE', code: '#f39c12',image: require('../../../assets/images/SampleImages/Image.png')},
    {name: 'PUMPKIN', code: '#d35400',image: require('../../../assets/images/SampleImages/Image.png')},
    {name: 'POMEGRANATE', code: '#c0392b',image: require('../../../assets/images/SampleImages/Image1.png')},
    {name: 'SILVER', code: '#bdc3c7',image: require('../../../assets/images/SampleImages/Image1.png')},
    {name: 'ASBESTOS', code: '#7f8c8d',image: require('../../../assets/images/SampleImages/Image.png')},
  ]

  return (
    <View style={styles.container}>
      <View
        style={{
          height: '100%',
          alignItems: 'center',
        }}>
        <ButtonTouch
         styletext={{ fontSize:14,
          fontWeight:"bold",}}
          onpress={() => {
            navigation.navigate('UploadScreen');
          }}
          style={{height: hp("4.5%"), paddingVertical: 0, marginTop: 0 , marginBottom:20}}
          TextName={'UPLOAD ARTWORK'}
        />
        <FlatGrid
          itemDimension={130}
          data={items}
          style={styles.gridView}
          // staticDimension={300}
          // fixed
          spacing={13}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ViewArtworkSeller');
                console.log(index, 'Index');
              }}>
              <View
                style={[
                  styles.itemContainer,
                  {backgroundColor: 'lightgrey'},
                ]}>
                  <Image
                  style={{height:"100%",width:"100%"}}
                  source={item.image}
                  />
                </View>
            </TouchableOpacity>
          )}
        />
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
  gridView: {
    marginTop: -10,
    flex: 1,
  },
  itemContainer: {
    overflow:"hidden",
    justifyContent: 'flex-end',
    borderRadius: 15,
    height: 170,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});

//make this component available to the app
export default SellingScreen;

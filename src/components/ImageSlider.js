import React, {Component, useRef} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const SLIDER_WIDTH = wp('95%');
export const SLIDER_HEIGHT = wp('95%');
export const ITEM_WIDTH = wp('95%');

const ImageList = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/12996081/pexels-photo-12996081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/325181/pexels-photo-325181.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/122744/pexels-photo-122744.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/226473/pexels-photo-226473.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
  {
    id: 5,
    url: 'https://images.pexels.com/photos/226473/pexels-photo-226473.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
];

// create a component
const ImageSlider = () => {
  const [Index, setindex] = useState(0);
  const isCarousel = useRef(null);

  const _renderItem = ({item}) => {
    return (
      <View
        style={{
          width: SLIDER_WIDTH,
          height: SLIDER_HEIGHT,
          // width:wp("95%"),
          borderRadius: 15,
          backgroundColor: 'lightgrey',
          alignItems: 'center',
        }}>
        <Image
          source={{uri: item.url}}
          style={{height: '100%', width: '100%', borderRadius: 15}}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        onScrollAnimationEnd={true}
        useScrollView
        // activeSlideAlignment="start"
        // inactiveSlideScale={5}
        // inactiveSlideOpacity={1}
        enableMomentum={true}
        decelerationRate={5000}
        lockScrollWhileSnapping={false}
        removeClippedSubviews={true}
        ref={isCarousel}
        data={ImageList}
        renderItem={_renderItem}
        sliderWidth={SLIDER_WIDTH}
        sliderHeight={SLIDER_HEIGHT}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index => setindex(index)}
      />
      <View
        style={styles.dotView}>
        {ImageList.map(({}, index: number) => (
          <View>
            <TouchableOpacity 
            key={index.toString()} 
            style={[styles.dotCircle,{backgroundColor: index == Index ? "#5360EE" : "#D1E0E2"}]} />
          </View>
        ))}
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  dotCircle: {
    height: 9,
    width: 9,
    backgroundColor: 'black',
    borderRadius: 100,
    marginHorizontal: 4,
  },
  dotView:{
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
  }
});

//make this component available to the app
export default ImageSlider;

// //import liraries
// import React, { Component } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Carousel from 'react-native-snap-carousel';

// // create a component
// const ImageSlider = () => {
//   return (
//     <View style={styles.container}>
//       <Text>ImageSlider</Text>
//     </View>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#2c3e50',
//   },
// });

// //make this component available to the app
// export default ImageSlider;

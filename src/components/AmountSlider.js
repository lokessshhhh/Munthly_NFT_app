//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {useState} from 'react';
import {styles_login} from '../../src/screens/LoginScreen/LoginSignUpStyle';

// create a component
const AmountSlider = ({onValuesChange}) => {

  const [SliderValue, SetSliderValue] = useState(0);
  const [selectedmonth, Setselectedmonth] = useState(0);

  return (
    <View style={styles.container}>
      
      <MultiSlider
      step={3}
      showSteps={true}
      showStepMarkers={true}
      customMarker={e => (
        <View
          style={{
            marginTop: 15,
            height: 27,
            width: 27,
            borderRadius: 18,
            backgroundColor: '#E7ECF0',
            borderWidth: 1,
            borderColor: '#5360EE',
          }}></View>
      )}
        trackStyle={{
          height: 13,
          backgroundColor: '#E7ECF0',
          borderWidth: 0.5,
          borderRadius: 10,
          borderColor: '#5360EE',
        }}
        selectedStyle={{
          height: 13,
          backgroundColor: '#5360EE',
          borderWidth: 0.5,
          borderRadius: 10,
          borderColor: '#979797',
        }}
        containerStyle={{
          height: 40,
        }}
        touchDimensions={{
          height: 40,
          width: 40,
          borderRadius: 20,
          slipDisplacement: 40,
        }}
        values={[1]}
        onValuesChange={onValuesChange}
        onValuesChangeFinish={() => {
          Setselectedmonth(SliderValue);
        }}
        min={3}
        max={24}
        optionsArray={[0, 3, 6, 12, 24]}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default AmountSlider;

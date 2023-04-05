//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

// create a component
const ButtonTouch = ({TextName,onpress,style,styletext}) => {
    return (
        <TouchableOpacity
        onPress={onpress}
        style={[{
          width: '90%',
          // height:40,
          // borderWidth: 1,
          
          borderRadius: 20,
          paddingVertical: 14,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#5360EE',
          marginTop: 8,
  
        }, style]}
        >
        <Text style={[{color: '#fff'},styletext]}>{TextName}</Text>
      </TouchableOpacity>
    );
};

// define your styles

//make this component available to the app
export default ButtonTouch;

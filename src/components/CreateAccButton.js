//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// create a component
const CreateAccButton = ({AccText,onpressAcc}) => {
  return (
    <TouchableOpacity
    onPress={onpressAcc}
    >
      <Text style={{paddingTop: 20, color: '#303536', fontSize: 14}}>
        {AccText}
      </Text>
    </TouchableOpacity>
  );
};

// define your styles


//make this component available to the app
export default CreateAccButton;

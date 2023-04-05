//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';

// create a component
const Input = ({placeholder, value,Inputstyle, onChangeText,keyboardType,maxLength ,secureTextEntry}) => {
  return (
    <TextInput
    secureTextEntry={secureTextEntry}
    maxLength={maxLength}
    keyboardType={keyboardType}
    placeholderTextColor={"#979797"}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={[{  paddingLeft:20,
        color:"black",
        height:heightPercentageToDP("5%"),
        borderWidth: 1,
        width: '90%',
        paddingVertical: 6,
        borderRadius: 16,
        marginBottom:heightPercentageToDP("2%"),
        alignSelf:'center',
        borderColor:"#374A55"},Inputstyle]}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  InputStyle: {
  
  },
});

//make this component available to the app
export default Input;

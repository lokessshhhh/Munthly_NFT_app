//import liraries
import { Card } from 'native-base';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {showMessage} from 'react-native-flash-message';
import { widthPercentageToDP } from 'react-native-responsive-screen';

// create a component
const TimePass = () => {
    return (
        <View style={styles.container}>
           <TouchableOpacity
           onPress={()=>{
            showMessage({
                message: 'Login Successful',
                type: 'success',
                floating: true,
                autoHide: true,
                duration: 900,
                style: {
                  marginBottom: 40,
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 10},
                  shadowOpacity: 1,
                  shadowRadius: 10,
                  elevation: 10,
                },
              })
           }}
           >
           <Text>TimePass</Text>

           </TouchableOpacity>
           <Card style={{width:widthPercentageToDP("100%")}}>
           <FlashMessage position="bottom" />
           </Card>
             
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
export default TimePass;

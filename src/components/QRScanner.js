//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet,Alert} from 'react-native';
import { CameraScreen } from 'react-native-camera-kit';



// create a component
const QRScanner = () => {
 

  return (

  <CameraScreen
    // Barcode props
    scanBarcode={true}
    onReadCode={(event) => Alert.alert('QR code found')} // optional
    showFrame={true} // (default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
    laserColor='red' // (default red) optional, color of laser in scanner frame
    frameColor='white' // (default white) optional, color of border of scanner frame
  />
  );
};

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default QRScanner;

import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles_login = StyleSheet.create({
    container: {
      flex:1,
        backgroundColor: '#fff',
      },
      HeaderText: {
        alignItems:"center",
        top: hp("36%"),
      },
      HeaderTextStyle: {
        fontFamily: 'Rubik-Regular',
        fontSize: 50,
        color: '#303536',
      },
      HomeHeaderStyale: {
        color: '#303536',
        paddingLeft: wp('4%'),
      },
      LoginButtonStyle:{
        width: '90%',
        borderWidth: 3,
        borderColor:"#fff",
        borderRadius: 20,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
      },
      HomeTextView: {
        justifyContent: 'center',
        marginVertical: 25,
        flexDirection: 'row',
      },
      BackArrow: {
        height: hp('3.3%'),
        width: hp('3.3%'),
        tintColor: '#303536',
      },
})
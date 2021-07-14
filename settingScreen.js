import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, View,StyleSheet } from 'react-native'

export default function settingScreen() {
    return (
       <View style={styles.container}>
           <Text style={styles.textStyle}>this is settings Screen</Text>
           <StatusBar style="auto" />
       </View>
    )
}
const styles = StyleSheet.create({
    container: {
      marginTop: 35,
      backgroundColor: '#cbcdcb',
      alignItems: 'center',
      height:800,
      alignContent: 'center',
    },
    container1: {
      flexDirection: 'row',
      backgroundColor: 'white',
      marginBottom: 2,
      width: 350,
      height: 50,
  
    },
    inputStyle: {
      height: 30,
      borderColor: 'black',
      borderWidth: 1,
      width: 170,
      paddingLeft: 20,
      alignContent: 'center',
      alignItems: 'center',
      marginLeft: 20
    },
    scrollViewStyle:
    {
      marginTop: 20,
      marginLeft: 20,
      height:650
    },
  
    textStyle: {
      fontSize: 20,
      color: "#fff"
  
    },
    textStyle1: {
      color: 'red'
    },
    textStyle2: {
      marginLeft: 10,
      color: 'black',
      fontSize: 20
    },
    imageStyle: {
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    buttonStyle: {
      width: 300,
      height: 40,
      marginRight:20,
      marginTop:10,
      marginBottom:10,
      backgroundColor:'green',
      alignSelf:'center',
      textDecorationColor:'white'
    }
  });
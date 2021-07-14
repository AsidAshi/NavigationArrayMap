import React from 'react';
import { Button } from 'react-native-paper';
import { Text, TextInput, View ,StyleSheet,TouchableOpacity, ToastAndroid} from 'react-native';


const addEmployScreen = () => {
  
  
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput style={styles.inputStyle} placeholder='enter name'>
      </TextInput>
      <TextInput style={styles.inputStyle} placeholder='enter id'>
      </TextInput>
      
      <Button style={styles.buttonStyle}  >
        <Text style={styles.textStyle}>ADD</Text>
        </Button>
    </View>
  );
}
const styles = StyleSheet.create({
  inputStyle: {
    height: 50,
    borderColor: 'black',
    borderWidth: 2,
    marginBottom:20,
    paddingLeft:30,
    width: 300,
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 20
  },
  buttonStyle: {
    width: 200,
    height: 40,
    marginTop:30,
    backgroundColor:'green',
    alignSelf:'center',
    textDecorationColor:'white'
},
textStyle: {
  fontSize: 20,
  color: "#fff"}
})

export default addEmployScreen;
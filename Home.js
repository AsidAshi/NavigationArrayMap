import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { StyleSheet, TextInput, View, Text, Image, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';



export default function Home({ navigation }) {
  const [Employees, setEmployees] = useState([])
  const [backUp, setbackUp] = useState([])
  const [Loading, setLoading] = useState(true)
  const [searchInput, setsearchInput] = useState("")

  const fetchData = () => {
    axios({
      "method": "GET",
      "url": "https://dummy.restapiexample.com/api/v1/employees"

    }).then((Response) => {
      setbackUp(Response.data.data)
      setEmployees(Response.data.data)
      setLoading(false)

    })

  }
  useEffect(() => {

    fetchData()

  }, [])

  useEffect(() => {
    // if (searchInput.length >= 1) {
    setEmployees(searching(searchInput))
    // }
    if (searchInput.length === 0) {
      setEmployees(backUp)
    }
  }, [searchInput])

  const searching = (String) => {
    if (String === '') {
      return (backUp)
    }
    const regex = new RegExp(`${String.trim()}`, 'i');
    return Employees.filter(
      (Employees => Employees.employee_name.search(regex) >= 0
      ));
  }
  return (
    <View >
      <ImageBackground source={require('./assets/d.jpg')} style={styles.imageStyle}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image
              source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png' }}
              style={{
                width: 35,
                height: 40,
                marginLeft:5

              }}
            /></TouchableOpacity>
          <Text style={styles.textStyle2}>Employees List</Text>
          <TextInput style={styles.inputStyle} placeholder={"search name"} value={searchInput} onChangeText={(searchInput) => setsearchInput(searchInput)}></TextInput>
        </View>
        <ScrollView style={styles.scrollViewStyle}>
          {
            !Loading ? (Employees && Employees.map((item, index) => {
              return (
                <View style={styles.container1} >
                  <Text style={styles.textStyle2} >{index + 1} - {item.employee_name}
                  </Text>

                </View>
              )
            })) : (<Text style={styles.textStyle1}>Loading...</Text>)
          }

        </ScrollView>
        <TouchableOpacity onPress={() => { navigation.navigate("add_new") }}>
          <Button style={styles.buttonStyle}  ><Text style={{ color: 'white', fontSize: 15 }}>ADD NEW</Text></Button>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </ImageBackground>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 35,
    backgroundColor: '#bababa',
    height: 50,
    alignItems: 'center',
    alignContent: 'center',
    width: 360,
    alignSelf:'center'
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
    marginLeft: 10
  },
  scrollViewStyle:
  {
    marginTop: 20,
    marginLeft: 20,
    height: 650
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
    width: 250,
    height: 40,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: 'green',
    alignSelf: 'center',
    textDecorationColor: 'white'
  }
});



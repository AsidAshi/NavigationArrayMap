import React,{BackHandler}from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';

import Home from './Home';
import addEmployScreen from './addEmployScreen'
import settingScreen from './settingScreen';
import aboutScreen from './aboutScreen';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';


const Stack = createStackNavigator()
const Drawer = createDrawerNavigator();

 const Root =()=> {
  return (
    <Stack.Navigator> 
      <Stack.Screen
        name="Home" component={Home} options={{headerShown:false}}
      />
      <Stack.Screen
    name="add_new" component={addEmployScreen} options={{headerShown:false}} />
       <Stack.Screen
        name="Settings" component={settingScreen} options={{headerShown:false}}
      />
     
       <Stack.Screen
        name="aboutScreen" component={aboutScreen} options={{headerShown:false}}
      />
     
    </Stack.Navigator>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={{height:500,marginTop:20}}>    
      <DrawerItem
        label="Settings"
        onPress={() => props.navigation.navigate('Settings')}
      />
      <DrawerItem
        label="About"
        onPress={() => props.navigation.navigate('aboutScreen')}></DrawerItem>
      
      <DrawerItem
        label="LogOut"
        onPress={() =>{ BackHandler.exitApp()}}
      />
    </DrawerContentScrollView>
  );
}

const CustomDrawerContents =  CustomDrawerContent

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props=><CustomDrawerContents {...props}/>}>
        <Drawer.Screen name="home" component={Root} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

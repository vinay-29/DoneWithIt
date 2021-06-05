import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Text,Image , Button} from 'react-native';
import constants from 'expo-constants';
import { useDimensions } from '@react-native-community/hooks';
import WelcomeScreen from './app/screen/WelcomeScreen';
import ViewImageScreen from './app/screen/ViewImageScreen';
import Profile from './app/screen/Profile';
 
export default function App() 
{

  
  console.log(require("./app/assets/splash.png"));
  console.log(useDimensions());
  return (
    
     <Profile/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    flexDirection:"column",
    marginTop:constants.statusBarHeight,
  },
  stretch: {
    width: 200,
    height: 200,
    marginTop : 100,
    resizeMode: 'stretch',
    transform: [{ rotate: '45deg' }]
    
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

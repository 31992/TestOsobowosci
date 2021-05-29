import React, { useState, Component } from 'react';
//import AsyncStorage from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Home from './screens/home';
import { AppNavigator } from './routes/drawer';
import { useEffect } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import _ from 'lodash';
import { View, Text, Button, Alert, Platform } from "react-native";
import NetInfo from '@react-native-community/netinfo';

const getFonts = () =>
  Font.loadAsync({
    'jet-thin': require('./assets/fonts/JetBrainsMono-Thin.ttf'),
  });

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [connection, setConnection] = useState(false);

  const checkConnected = () => {
      NetInfo.fetch().then(state => {
    console.log('Connection type', state.type);
    console.log('Is connected?', state.isConnected);
    if(state.isConnected){
      setConnection(true);
    }else{
      Alert.alert("No Internet Connection", [
        {
          text: "Try Again",
          onPress: checkConnected
        }
      ])
    }
  });
}

  if(connection){

      if (fontsLoaded) {
        return <AppNavigator />;
      } else {
        return (
          <AppLoading
            startAsync={(getFonts)}
            onFinish={() => setFontsLoaded(true)}
          />
        );
      }
  }else{
        checkConnected();
        return null;
  }
}

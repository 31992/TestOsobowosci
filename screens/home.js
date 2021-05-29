import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Modal,
  Button,
  FlatList,
} from 'react-native';
import CircleButton from '../components/CircleButton'
//tests
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Test from '../screens/test';
import Home from '../screens/home';
import Results from '../screens/results';
import HomeStack from '../routes/homeStack';
import { AppNavigator } from '../routes/drawer';
import AsyncStorage from '@react-native-community/async-storage';
import RNRestart from 'react-native-restart';
import _ from 'lodash';

export default function home({ navigation }) {

const [show, setShowState] = useState(true);

  const handleRegClick = () => {
      //storeData();
      setShowState(false);
  }


  const pressHandlerRes = () => {
    navigation.navigate('Results' );
  };
  
  //-----------------------------------------------------------------------------------
  
  //--------------------------------------------------------------------------------------------
  
 

  const selectedId = null;

  //przejscie do testu
  const setSelectedId = (id, name) => {
    navigation.navigate('Test', {type: name});
  }

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#006da2' : '#006da2';

    return (
      <CircleButton
        onPress={() => setSelectedId(item.id, item.name)}
        circleDiameter = {200}
      >
      <Text style={styles.textRound}>Rozpocznij test</Text>
      </CircleButton>
    );
  };

  const [tests, setTests] = useState([
  {
    "name": "TEST",
    "numberOfTasks": 10
  }
])

  return (
      <View>
      <FlatList
        data={_.shuffle(tests)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        style={styles.button2}
        onPress={() => pressHandlerRes()}>
        <Text style={styles.container2}>Globalne Rezultaty</Text>
      </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    fontFamily: 'jet-thin'
  },
  container2: {
    padding: 24,
    fontFamily: 'jet-thin',
    color: 'black',
  },
  button: {
    backgroundColor: '#006da2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  textRound: {
    color: 'black',
    fontSize: 22,
  },
  button2: {
    borderWidth: 3,
    borderColor: 'black',
    marginTop: '150px',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

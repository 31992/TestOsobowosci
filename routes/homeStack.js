//tworzenie nawigacji
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import Home from '../screens/home';
import Test from '../screens/test';
import Results from '../screens/results';
import Header from '../shared/header';
import HeaderTest from '../shared/headerTest';
import HeaderResults from '../shared/headerResults';
import TestStack from '../routes/testStack';
import ResultStack from '../routes/resultStack';

const { Navigator, Screen } = createStackNavigator();

export const HomeStack = ({ navigation }) => (

  <Navigator
    headerMode='screen'
    screenOptions={{
      headerStyle: {
        backgroundColor: '#eee',
      },
      headerTintColor: '#444',
      height: 60
    }}>

    <Screen
      name='Home'
      component={Home}
      options = {{
        headerTitle: () => <Header navigation={navigation}/>
       }}
    />

    <Screen
      name='Test'
      component={Test}
      options = {{
        headerTitle: () => <HeaderTest navigation={navigation}/>
       }}
    />

    <Screen
      name='Results'
      component={Results}
      options = {{
        headerTitle: () => <HeaderResults navigation={navigation}/>
       }}
    />

  </Navigator>
);

export default HomeStack;

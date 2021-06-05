import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Drawer } from 'react-native-paper';
import { Alert } from "react-native";

import Test from '../screens/test';
import Results from '../screens/results';
import HomeStack from '../routes/homeStack';
import TestStack from '../routes/testStack';
import ResultStack from '../routes/resultStack';

const { Navigator, Screen } = createDrawerNavigator();

export const RootDrawerNavigator = () => (

  <Navigator initialRouteName="Home" drawerContent={props => {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    )
  }}>
    <Screen name="Ekran Główny" component={HomeStack}/>
    <Screen name="Globalne Rezultaty" component={ResultStack} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <RootDrawerNavigator />
  </NavigationContainer>
);

export default AppNavigator;
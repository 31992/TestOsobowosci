import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { DrawerActions } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

export default function Header({ navigation }){

  const openMenu = () => {
      navigation.openDrawer()
    }
  return (
    <View style={styles.header}>
      <Icon name="bars" size={28} onPress={openMenu} style={styles.icon}/>
      <View>
        <Text style={styles.headerText}>Test Osobowosci</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontWeight: 'bold',
    fontFamily: 'jet-thin',
    fontSize: 15,
    color: '#333',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 16
  }
})

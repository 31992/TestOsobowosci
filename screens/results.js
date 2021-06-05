import Expo, { FileSystem } from "expo";
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
  ListItem,
  Container,
  Content,
  Body,
} from 'react-native';
import Home from '../screens/home';
import AsyncStorage from '@react-native-community/async-storage';
import { PieChart } from 'react-minimal-pie-chart';
//import * as SQLite from 'expo-sqlite';
//const db = SQLite.openDatabase("osobowosci.db");

export default function results({ route, navigation }) {
 
  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };

  const pressHandlerHome = () => {
    navigation.navigate('Home');
  };

  let Score = null;
  let Total = null;
  let Type = null;
  let Res2 = null;

  if (route.params) {
    Score = route.params.res;
    Total = route.params.total;
    Type = route.params.type;
    Res2 = route.params.download;
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    getDataUsingGet
    wait(200).then(() => setRefreshing(false));
  }, []);

  const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.text}>Nick: {item.nick}</Text>
      <Text style={styles.text}>Score: {item.score}</Text>
      <Text style={styles.text}>Total: {item.total}</Text>
      <Text style={styles.text}>Type: {item.type}</Text>
      <Text style={styles.text}>Date: {item.date}</Text>
    </TouchableOpacity>
  );

  const selectedId = null;
  const setSelectedId = () => {};
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#006da2' : '#006da2';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
      />
    );
  };

  this.state = {
    isFetching: false,
  };

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [sang, setSang] = useState(0);
  const [chol, setChol] = useState(0);
  const [mela, setMela] = useState(0);
  const [fleg, setFelg] = useState(0);

 const load = async() => {
  try{
      let sa = await AsyncStorage.getItem("Sangwinik");
      let ch = await AsyncStorage.getItem("Choleryk");
      let me = await AsyncStorage.getItem("Melancholik");
      let fl = await AsyncStorage.getItem("Flegmatyk");

      if(sa !== null){
          setSang(sa);
      }
      if(ch !== null){
          setChol(ch);
      }
      if(me !== null){
          setMela(me);
      }
      if(fl !== null){
          setFelg(fl);
      }
  }catch (err) {
      alert(err);
  }
}
  
  /*
  return(
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
            style={styles.button2}
            onPress={getDataUsingGet}>
            <Text style={styles.text}>Load List</Text>
          </TouchableOpacity>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
      </ScrollView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onRefresh={() => onRefresh()}
        refreshing={this.state.isFetching}
      />
      <TouchableOpacity style={styles.button}
                            onPress={()=> pressHandlerHome() }>
          <Text style={styles.container2}>Powrót</Text>
      </TouchableOpacity>
    </SafeAreaView>
    )
    */
    /*
    const [memberList, setMemberist] = useState([]);

    select = () => {
      this.executeSql("select * from NEW", []).then(memberlist =>
        this.setState({ memberlist })
      );
    };

    const getDataUsingGet = () => {
      this.select();
      db.transaction(
        tx => {
          tx.executeSql("DROP TABLE IF EXISTS NEW");
          tx.executeSql(
            "create table if not exists NEW (id integer primary key not null, amount integer);"
          );
        },
        null,
        this.insertmembersdata
      );
    }

    insertmembersdata = () => {
          db.transaction(
            tx => {
              tx.executeSql(
                "insert into NEW (amount) values (?)",
                [0]
              );
            },
            null,
            this.select()
          );
    };*/

const [showDownload, setShowDownload] = useState(false);

const getDataUsingGet = () => {
  load()
  setShowDownload(true);
}


if(showDownload)
{
    return(
    <SafeAreaView style={styles.container}>

      <Text style={styles.quest}>Sangwinik  <View style={styles.square1} /></Text>
      <Text style={styles.quest}>Choleryk  <View style={styles.square2} /></Text>
      <Text style={styles.quest}>Melancholik  <View style={styles.square3} /></Text>
      <Text style={styles.quest}>Flegmatyk   <View style={styles.square4} /></Text>
      
      <PieChart
        data={[
          { title: "Sangwinik", value: Math.round((Number(sang)/(Number(sang)+Number(chol)+Number(mela)+Number(fleg)))*100,3), color: '#E38627' },
          { title: "Choleryk", value: Math.round((Number(chol)/(Number(sang)+Number(chol)+Number(mela)+Number(fleg)))*100,3), color: 'crimson ' },
          { title: "Melancholik", value: Math.round((Number(mela)/(Number(sang)+Number(chol)+Number(mela)+Number(fleg)))*100,3), color: 'dodgerblue' },
          { title: "Flegmatyk", value: Math.round((Number(fleg)/(Number(sang)+Number(chol)+Number(mela)+Number(fleg)))*100,3), color: 'green' },
        ]}
        lineWidth={35}
        startAngle={0}  
        animate
        animationDuration={100}
        animationEasing='ease'
        radius={30}
        label={ (data) => data.dataEntry.value + ' %'}
        labelPosition={115}
        labelStyle={{
          fontSize: '5px',
          fontColor: 'black',
          fontWeight: '800',
          fontFamily: 'jet-thin',
        }}
      />;
      <TouchableOpacity style={styles.button}
                            onPress={()=> pressHandlerHome() }>
          <Text style={styles.container2}>Powrót</Text>
      </TouchableOpacity>
    </SafeAreaView>
    )
}else{
  getDataUsingGet();
  return null;
}
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  container2: {
    padding: 24,
    fontFamily: 'jet-thin',
    color: 'black',
  },
  item: {
    borderWidth: 3,
    borderColor: 'black',
    marginTop: '15px',
    marginLeft: '30px',
    marginRight: '30px',
    textAlignVertical: "center",
    textAlign: "center",
    justifyContent: 'center',
    padding: 12
  },
  button: {
    borderWidth: 3,
    borderColor: 'black',
    marginTop: '150px',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    justifyContent: 'center',
    padding: 12,
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
  quest: {
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 20,
    color: 'black',
    padding: 5
  },
   square1: {
    width: 15,
    height: 15,
    backgroundColor: "#E38627",
  },
  square2: {
    width: 15,
    height: 15,
    backgroundColor: "crimson",
  },
  square3: {
    width: 15,
    height: 15,
    backgroundColor: "dodgerblue",
  },
  square4: {
    width: 15,
    height: 15,
    backgroundColor: "green",
  },
});

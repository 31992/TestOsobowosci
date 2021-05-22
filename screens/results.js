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
} from 'react-native';
import Home from '../screens/home';

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

  //URL fetch

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getDataUsingGet = () => {
    //GET request
    fetch('https://tgryl.pl/quiz/results', {
      method: 'GET',
      //Request Type
    })
      .then((response) => response.json())
      // If response is in json then in success
      .then((responseJson) => {
        //Success
        setData(responseJson);
        console.log(responseJson);
      })
      // If response is not in json then in error
      .catch((error) => {
        //Error
        alert(JSON.stringify(error));
        console.error(error);
      });
  };

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
  title: {
    fontSize: 32,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#006da2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#006da2',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  button2: {
    justifyContent: 'center',
    padding: 12,
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
});

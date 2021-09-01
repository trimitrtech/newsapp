import React, {Component, useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image, RefreshControl } from 'react-native';
import ListItem from '../components/ListItem';
import { NEWS_LIST } from '../constants/endpoints';

const ListScreen = ({navigation}) => {
  const [list, setList] = useState([]);
  const [refreshing, setRefresh] = useState(false);
  useEffect(() => {
    onFetchNews();
  }, []);

  const onFetchNews = () => {
    setRefresh(true)
    fetch(NEWS_LIST, { method: 'GET', headers: {accept: 'application/json'}})
    .then(rawResponse => rawResponse.json())
    .then(response => {
      if(response.status === 'ok') {
        if(response.articles && response.articles.length > 0){
          setList(response.articles);
          setRefresh(false)
        }
      }
    });
  }

  const onNavigate = (item) => {
    navigation.navigate('Details', {newsItem: item});
  }
  return (
    <View style={style.container}>
      <FlatList 
        showsVerticalScrollIndicator={false}
        data={list}
        renderItem={(news) => <ListItem {...news} navigate={onNavigate} />}
        ListEmptyComponent={() => <View><Text>No Items found</Text></View>}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onFetchNews} />}
      />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  renderItem: {
    flexDirection: 'row',
    marginVertical: 5,
  }
})

export default ListScreen;
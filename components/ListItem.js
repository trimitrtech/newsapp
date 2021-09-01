import React, {Component, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { data } from './data/data';


const ListItem = (props) => {
const { item, index, navigate } = props;
    const onNavigate = () => {
        navigate(item);
    }
  return (
      <TouchableOpacity onPress={onNavigate}>
        <View key={index} style={style.renderItem}>
        <View>
            <Image
                style={{height: 100, width: 100}}
                source={{ uri: item.urlToImage}}
            />
        </View>
        <View style={{ marginLeft: 10, justifyContent:'center'}}>
            <Text style={{ width: 250}} numberOfLines={3}>{item.description}</Text>
        </View>
        </View>
    </TouchableOpacity>
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

export default ListItem;
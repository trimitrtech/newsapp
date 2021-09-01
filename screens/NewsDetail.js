import React, {Component, useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image, Linking, TouchableOpacity } from 'react-native';

const NewsDetails = (props) => {
    const [ newsItem, setNewsItem]= useState(null);
    useEffect(() => {
        console.log("News Details ", props);
        const { newsItem } = props.route.params;
        setNewsItem(newsItem);
    }, []);


    return (
        <View>
        {
            newsItem !== null
            ? 
            <View style={{marginHorizontal: 10 }}>
                <View>
                    <Image style={{ width: '100%', height: 250}} source={{ uri: newsItem.urlToImage}} />
                </View>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                    <Text style={{fontWeight:'bold', fontSize: 14, marginRight: 10}}>Author Name:</Text>
                    <Text style={{fontWeight:'bold', fontSize: 14}}>{newsItem.author}</Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                    <Text style={{fontWeight:'bold', fontSize: 14, marginRight: 10}}>Source:</Text>
                    <TouchableOpacity onPress={() => Linking.openURL(newsItem.url)}>
                        <Text style={{fontWeight:'bold', fontSize: 14}}>Redirect</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                    <Text style={{fontWeight:'bold', fontSize: 14, marginRight: 10}}>Published Date:</Text>
                    <Text style={{fontWeight:'bold', fontSize: 14}}>{(new Date(newsItem.publishedAt)).toDateString()}</Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                    <Text style={{fontWeight:'bold', fontSize: 14}}>{newsItem.title}</Text>
                </View>

                <View style={{flexDirection: 'row', marginTop: 10}}>
                    <Text style={{color: 'gray'}}>{newsItem.content}</Text>
                </View>
            </View>
            :
            <View><Text>News item is null</Text></View>
        }</View>
    )
}


export default NewsDetails;
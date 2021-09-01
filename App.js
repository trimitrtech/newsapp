import React, {Component, useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListScreen from './screens/ListScreen';
import NewsDetails from './screens/NewsDetail';
// DrawerNavigation, Tab Navigation, Stack Navgation etc.

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'List'} component={ListScreen} options={{title: 'News List'}} />
        <Stack.Screen name={'Details'} component={NewsDetails} options={{title: 'News Details'}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
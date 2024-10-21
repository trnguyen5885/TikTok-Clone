import {StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../secondScreens/Store/Home';

const Store = () => {
  return <Home />;
};

const styles = StyleSheet.create({});

export default Store;

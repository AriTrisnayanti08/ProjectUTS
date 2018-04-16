import React from 'react';
import { } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import HalamanHome from './HomeScreen.js';
import Data from './DataScreen.js';
import ReviewScreen from './ReviewScreen.js';
import EditDataActivity from './EditData.js';

export default class MainApp extends React.Component {
  render() {
    return (
      <HomeStack />
    );
  }
}

const HomeStack = StackNavigator({
  Home: { screen: HalamanHome },
  Input: { screen: Data },
  Data: { screen: ReviewScreen },
  Edit: { screen: EditDataActivity },
});

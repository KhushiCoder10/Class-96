import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';

import HomeScreen from './screens/HomeScreen';
import Science from './screens/Science';
import Math from './screens/Math';
import Nature from './screens/Nature';
import Suprising from './screens/Suprising';
import Weird from './screens/Weird';
import Funny from './screens/Funny';

export default class App extends React.Component {
  render() {
    return (
       <View>
        <AppContainer/>
       </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  Science: Science,
  Math: Math,
  Nature: Nature,
  Suprising: Suprising,
  Weird: Weird,
  Funny: Funny,
});

const AppContainer = createAppContainer(AppNavigator);
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SplashScreen from './js/native-module/SplashScreen'
import {StackNavigator} from 'react-navigation'
import MainPage from './js/MainPage'
import IndividualPage from './js/me/IndividualPage'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
        <Navigator></Navigator>
    );
  }

    componentDidMount(){
        if(Platform.OS === 'android')
            SplashScreen.hide();
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const RoutineConfigs = {
    MainPage:{
      screen:MainPage,
        navigationOptions : ({navigation}) => ({title:'主页', header:null}),
    },
    IndividualPage:{
        screen:IndividualPage,
        navigationOptions:({navigation})=>({title:'lll', header:null})
    }
}

const StackNavigatorConfigs={
  initialRouteName:'MainPage',
    initialRouteParams: {name:'Hello Wold'},
}

const Navigator =  StackNavigator(RoutineConfigs, StackNavigatorConfigs);

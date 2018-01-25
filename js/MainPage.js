import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {TabNavigator, TabBarBottom, TabBarTop} from 'react-navigation'
import Home from './navigator/Home'
import Found from './navigator/Found'
import Me from './navigator/Me'
import Message from './navigator/Message'
import TabItem from './navigator/TabItem'

/*export default class MainPage extends Component
{
    render()
    {
        return (
            <View style={{backgroundColor:'#ff0000'}}>

                <TabNavigation></TabNavigation>

            </View>
        );
    }
}*/

const TabRoutineConfigs = {
    Home:{
        screen:Home,
        navigationOptions:({navigation}) => (
            {
                title : '首页',
                titleBarLabel :'首页',
                tabBarIcon:({focused, tintColor})=>(
                        <TabItem focused={focused} tintColor={tintColor} name = 'md-home'/>
                )
            }
        )
    },
    Found:{
        screen:Found,
        navigationOptions:({navigation})=>({
            title:'发现',
            titleBarLabel:'发现',
            tabBarIcon:({focused, tintColor})=>(
                <TabItem focused = {focused} tintColor={tintColor} name='md-compass'></TabItem>
            )
        }),

    },
    Message:{
        screen:Message,
        navigationOptions:({navitation}) =>({
            title:'消息',
            titleBarLabel:'消息',
            tabBarIcon:({focused, tintColor}) => (
                <TabItem focused={focused} tintColor={tintColor} name='md-notifications'></TabItem>
            )
        }),

    },
    Me:{
        screen:Me,
        navigationOptions:({navigation})=>({
            title:'我',
            titleBarLabel:'我',
            tabBarIcon:({focused,tintColor})=>(
                <TabItem focused={focused} tintColor={tintColor} name='md-person'></TabItem>
            )
        }),

    }
}

const TabNavigatorConfigs = {
    initialRouteName:'Home',
    initialRouteParams:{name:'Hello, firstpage'},
    tabBarPosition:'bottom',
    tabBarOptions:{
        showIcon:true,
        activeTintColor: 'rgb(22,131,251)',
        inactiveTintColor:'#a9a9a9',
        indicatorStyle:{
            height:0
        },
        style:{
            backgroundColor:'#fff',
            height:60
        }
    },

}

const TabNavigation = TabNavigator(TabRoutineConfigs, TabNavigatorConfigs);

export default TabNavigation;
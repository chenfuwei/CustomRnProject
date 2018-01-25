import React, {Component} from 'react'
import {View, Text, StyleSheet,ScrollView} from 'react-native'
import ScrollableTabView from '../../node_modules/react-native-scrollable-tab-view'
import DefaultTabBar from '../../node_modules/react-native-scrollable-tab-view/DefaultTabBar'
import theme from '../config/theme'
import CustomTabBar from '../home/CustomTabBar'
import TestLab from '../config/Test'
import TabTopView from "./TabTopView";


export default class Home extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            tabNames:['首页', 'Android', 'IOS']
        }
    }

    render()
    {
        return (
            <TabTopView/>
           /* <View style={styles.container}>
                <Text>了就爱看时代峰峻</Text>
                <ScrollableTabView
                    style={{height:50, marginTop:100, backgroundColor:'#00ff00'}}
                    renderTabBar = {()=><DefaultTabBar/>}
                    tabBarBackgroundColor='rgb(22,131,251)'
                    tabBarActiveTextColor='white'
                    tabBarInactiveTextColor={'rgba(255,255,255,0.5)'}
                    tabBarTextStyle={{fontSize:theme.scrollView.fontSize}}
                    tabBarUnderlineStyle={theme.scrollView.underlineStyle}
                >
                    <View style={styles.content} tabLabel={'lkkasdf'}>
                    <Text style={{width:200, height:100,margin:100}} >lllllllll</Text>
                    </View>
                </ScrollableTabView>
                <Text >了就爱看时代峰峻</Text>
            </View>*/
        )
    }


}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: theme.pageBackgroundColor
    },
    text:{
        color: theme.text.color,
        fontSize:theme.text.fontSize
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EBEBEB',
        flex: 1
    }
})
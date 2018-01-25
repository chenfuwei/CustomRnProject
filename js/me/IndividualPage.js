import React,{Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'
import theme from '../config/theme'
import NavigationBar from '../me/SimpleNavigationBar'
export default class IndividualPage extends Component
{
    _handleBack(){
        this.props.navigation.goBack()
    }

    render(){
        return (
            <View style={{flex:1}}>
                <NavigationBar title={"个人主页"} backOnPress={this._handleBack.bind(this)}/>
            </View>
        )
    }
}
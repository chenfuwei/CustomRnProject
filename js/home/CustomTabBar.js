import React, {Component} from 'react'
import {View, TouchableOpacity, Text } from 'react-native'

export default class CustomTabBar{
    render()
    {
        return (
            <View>
                {
                    this.props.tabs.map((item,i) => this.renderTabOption(tab,i))
                }
            </View>
        )
    }

    renderTabOption(tab,i)
    {
        return (
            <TouchableOpacity>
                <View>
                    <Text>{this.props.tabs[i]}</Text>
                </View>
            </TouchableOpacity>)
    }
}
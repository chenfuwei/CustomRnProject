import React, {Component} from 'react'
import {Image, View} from 'react-native'
import Icon from '../../node_modules/react-native-vector-icons/Ionicons'
export default class TabBarItem extends Component{
    static defaultProps = {
        selectedColor: 'rgb(22,131,251)',
        normalColor: '#a9a9a9'
    };
    render() {
        return(
            <View>
                <Icon name= {this.props.name} size={30} color={this.props.focused ? this.props.selectedColor : this.props.normalColor}/>
            </View>
        )
    }

}
import React,{Component} from 'react'
import {Text,View,StyleSheet, TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'

export default class TextButton extends Component{
    static propTypes = {
        text: PropTypes.string.isRequired,
        onPress:PropTypes.func,
        color:PropTypes.string,
        fontSize:PropTypes.number
    }
    static defaultProps = {
        color:'white',
        fontSize:12,
    }
    render(){
        const{onPress, fontSize, color, text} = this.props;
        return(
            <TouchableOpacity
                onPress={onPress}>
                <View style={{height:16}}>
                    <Text style={{fontSize:fontSize, color:color}}>{text}</Text>
                </View>
            </TouchableOpacity>
        )
    }

}
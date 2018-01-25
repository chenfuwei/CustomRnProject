'use strict'
import React,{Component} from 'react'
import {Text, View, StyleSheet, Platform, TouchableOpacity, TouchableNativeFeedback, Image} from 'react-native'
import Icon from '../../node_modules/react-native-vector-icons/Ionicons'
import theme from '../config/theme'
import PropTyps from 'prop-types'

export default class ImageButton extends Component{
    static propTypes = {
        text: PropTyps.string,
        image:PropTyps.number,
        icon:PropTyps.string,
        onPress:PropTyps.func,
        imgSize:PropTyps.number,
        fontSize:PropTyps.number,
        color:PropTyps.string,
        btnStyle:View.propTypes.style
    }

    static defaultProps = {
        imgSize:40,
        fontSize:13
    }

    render(){
        const{image, icon, onPress} = this.props;
        if(Platform.OS === 'ios')
        {
            if(image)
            {
                return(
                    <TouchableOpacity onPress={onPress} activeOpacity={theme.btnActiveOpacity}>
                        {
                            this._renderContentWithImage()
                        }
                    </TouchableOpacity>
                )
            }else if(icon)
            {
                return(
                    <TouchableOpacity onPress={onPress} activeOpacity={theme.btnActiveOpacity}>
                        {this._renderContentWidthIcon()}
                    </TouchableOpacity>
                )
            }
        }else if(Platform.OS === 'android'){
            if(image){
                return(
                    <TouchableNativeFeedback onPress={onPress}>
                        {this._renderContentWithImage()}
                    </TouchableNativeFeedback>
                )
            }else if(icon)
            {
                return(
                    <TouchableNativeFeedback onPress={onPress}>
                        {this._renderContentWidthIcon()}
                    </TouchableNativeFeedback>
                )
            }
        }
    }

    _renderContentWithImage(){
        const{text, image, color, imgSize, fontSize, btnStyle} = this.props;
        return(
            <View style={[styles.view, btnStyle]}>
                <Image source={image} style={{width:imgSize, height:imgSize}}></Image>
                {
                    text? <Text style={[styles.text, {fontSize:fontSize, color: color}]}>{text}</Text> : null
                }
            </View>
        )
    }

    _renderContentWidthIcon(){
        const{text, icon, color, imgSize, fontSize, btnStyle} = this.props;
        return(
            <View style={[styles.view, btnStyle]}>
                <Icon name={icon} size={imgSize} color={color}></Icon>
                {
                    text ? <Text style={{fontSize:fontSize, color: color}}>{text}</Text> : null
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        color: 'rgba(255,255,255,0.7)',
        marginTop: 4
    }
});

import React, {Component} from 'react'
import {View, Text, StyleSheet, Platform, RefreshControl, ScrollView, ToastAndroid, Image, Dimensions, PixelRatio, Alert, AlertIOS} from 'react-native'

import SearchBar from '../found/SearchBar'
import theme from '../config/theme'
import Swiper from 'react-native-swiper';
export  default class TestSwiper extends Component {
    render(){
        return (
            <View style={styles.containerStyle}>
                <Swiper
                    showsPagination={false}
                    autoplay={true}
                >
                    <Text style={[{backgroundColor:"#f0f"},styles.pageStyle]}>界面1</Text>
                    <Text style={[{backgroundColor:"#ff0"},styles.pageStyle]}>界面2</Text>
                    <Text style={[{backgroundColor:"#00f"},styles.pageStyle]}>界面3</Text>
                </Swiper>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    containerStyle:{
        backgroundColor:"#fff",
        //旋转90度
        transform:[{rotate: "90deg"}],
        height:100,
        width:100,
    },
    pageStyle:{
        height:100,
        width:100,
        //旋转-90度
        transform:[{rotate: "-90deg"}]
    }
})
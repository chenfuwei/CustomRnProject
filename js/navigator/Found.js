import React, {Component} from 'react'
import {View, Text, StyleSheet, Platform, RefreshControl, ScrollView, ToastAndroid, Image, Dimensions, PixelRatio, Alert, AlertIOS} from 'react-native'

import SearchBar from '../found/SearchBar'
import theme from '../config/theme'
import Swiper from 'react-native-swiper';
import TestSwiper from "../found/TestSwiper";
import ImageButton from "../component/ImageButton";

const bannerImages=[
    require('../image/banner1.jpg'),
    require('../image/banner2.png')
]

const imgBtnImages = [
    require('../image/trend.png'),
    require('../image/rank.png'),
    require('../image/hot.png')
]

export default class Found extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            refreshing:true,
            loadedData:false,
            dataBlob:[],
            btnName:['沸点','贡献榜','本周最热']
        }
    }
    render()
    {
        return (
            <View style={styles.container}>
                <SearchBar/>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh.bind(this)}
                            colors={['red','#ffd500','#0080ff','#99e600']}
                            tintColor={theme.themeColor}
                            title={"Loading..."}
                            titleColor={theme.themeColor}
                        />
                    }>
                    <Swiper
                        height={130}
                        horizontal={true}
                        paginationStyle={{bottom: 10}}
                        showsButtons={false}

                        autoplay={true}>
                        <View style={styles.slide}>
                            <Image style={styles.image} source={bannerImages[0]} resizeMode={'stretch'}></Image>
                        </View>
                        <View style={styles.slide}>
                            <Image style={styles.image} source={bannerImages[1]} resizeMode={'stretch'}/>
                        </View>
                    </Swiper>
                    <View style={styles.imageBtnLine}>
                        {
                            this.state.btnName.map(
                                (item, index)=>{
                                    return(
                                        <ImageButton
                                            key={index}
                                            image={imgBtnImages[index]}
                                            imgSize={35}
                                            text={item}
                                            color='#000'
                                            btnStyle={styles.imgBtn}
                                            onPress={this._imageButtonCallback.bind(this, index)}></ImageButton>
                                    )
                                }
                            )
                        }
                    </View>
                </ScrollView>

            </View>
        )
    }
    _imageButtonCallback(position)
    {
        this._alert();
    }
    _alert(){
        if(Platform.OS === 'android'){
            Alert.alert('Message', "This function currently isn't availabel",
                [{text:'OK', onPress:()=>{}}]);
        }else if(Platform.OS === 'ios'){
            AlertIOS.alert('Message', "This function currently isn't",
                [{text:'OK', onPress:()=>{}}])
        }
    }
    _onRefresh(){
        this.setState({refreshing:true});
        this._fetchData();
    }
    _fetchData()
    {

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.pageBackgroundColor
    },
    slide: {

    },
    image: {
        height: 130,
        width: Dimensions.get('window').width
    },
    imageBtnLine:{
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        borderBottomWidth: 1/PixelRatio.get(),
        borderBottomColor: '#c4c4c4'
    },
    imgBtn: {
        height: 80,
        width: Dimensions.get('window').width/3,
    }
});
import React,{Component} from 'react'
import {StyleSheet, View, Text, Platform} from 'react-native'
import ImageButton from '../component/ImageButton'
import theme from '../config/theme'
import PropTypes from 'prop-types'

export default class SimpleNavigationBar extends Component{
    static propTypes ={
        title:PropTypes.string.isRequired,
        backOnPress:PropTypes.func.isRequired,
    }

    render(){
       return(
           <View style={styles.toolbar}>
            {
                Platform.OS === 'android'?
                    <ImageButton icon={"md-arrow-back"} color={"#fff"} imgSize={25} btnStyle={styles.imgBtn} onPress={this.props.backOnPress}/>
                    :
                    <ImageButton icon={"ios-arrow-back"} color={"#fff"} imgSize={25} btnStyle={styles.imgBtn} onPress={this.props.backOnPress}/>
            }
            <Text style={styles.title}>{this.props.title}</Text>
        </View>
       )
    }
}



const styles=StyleSheet.create({
    toolbar:{
        height:theme.actionbar.height,
        width:theme.actionbar.width,
        backgroundColor:theme.actionbar.backgroundColor,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        paddingTop:(Platform.OS==='ios')?20:0
    },
    imgBtn:{
        width:49,
        height:49
    },
    title:{
        color:theme.actionbar.fontColor,
        fontSize:theme.actionbar.fontSize,
        marginLeft:5,
    }
})
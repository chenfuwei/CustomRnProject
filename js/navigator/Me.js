import React, {Component} from 'react'
import {Text, View, StyleSheet, Platform, Button, PixelRatio, TouchableNativeFeedback, TouchableOpacity, ToastAndroid, Alert, AlertIOS, ScrollView} from 'react-native';
import Icon from '../../node_modules/react-native-vector-icons/Ionicons'
import theme from '../config/theme'
import Avatar from '../me/Avatar'
import PropTypes from 'prop-types'
import TextButton from '../component/TextButton'
import IndividualPage from '../me/IndividualPage'

export default class Me extends Component
{
    constructor(props)
    {
        super(props);
        this.state={

        }
    }
    render()
    {
        return(
            <View style={styles.container}>
                <View style={styles.actionbar}>
                    <Text style={{color: theme.actionbar.fontColor, fontSize: theme.actionbar.fontSize}}>我</Text>
                </View>
                <ScrollView>
                    {Platform.OS === 'android' ?
                        <TouchableNativeFeedback onPress={this._onPressCallback.bind(this, 0)}>
                            <View style={styles.intro}>
                                <Avatar image={require('../image/logo_og.png')} size={(55)} textSize={(20)}/>
                                <View style={{marginLeft: (12)}}>
                                    <Text style={{color: theme.text.color, fontSize: (20)}}>React_Native</Text>
                                    <TextButton text="添加职位 @添加公司" color="#949494" fontSize={(13)} onPress={this._onPressCallback.bind(this, 1)}/>
                                </View>
                                <View style={{flex: 1, flexDirection:'row', justifyContent: 'flex-end'}}>
                                    <Icon name="ios-arrow-forward" color="#ccc" size={(30)}/>
                                </View>
                            </View>
                        </TouchableNativeFeedback>
                        :
                        <TouchableOpacity onPress={this._onPressCallback.bind(this, 0)} activeOpacity={theme.btnActiveOpacity}>
                            <View style={styles.intro}>
                                <Avatar image={require('../image/logo_og.png')} size={(55)} textSize={(20)}/>
                                <View style={{marginLeft: (12)}}>
                                    <Text style={{color: theme.text.color, fontSize: (20)}}>WangdiCoder</Text>
                                    <TextButton text="添加职位 @添加公司" color="#949494" fontSize={(13)} onPress={this._onPressCallback.bind(this, 1)}/>
                                </View>
                                <View style={{flex: 1, flexDirection:'row', justifyContent: 'flex-end'}}>
                                    <Icon name="ios-arrow-forward" color="#ccc" size={(30)}/>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
                    <View style={styles.list}>
                        <Item icon="md-heart" text="我的收藏" subText="15篇" iconColor="#32cd32" onPress={this._onPressCallback.bind(this, 2)}/>
                        <Item icon="md-eye" text="阅读过的文章" subText="15篇" onPress={this._onPressCallback.bind(this, 3)}/>
                        <Item icon="md-pricetag" text="标签管理" subText="9个" onPress={this._onPressCallback.bind(this, 4)}/>
                    </View>
                    <View style={styles.list}>
                        <Item icon="md-ribbon" text="掘金排名" iconColor="#ff4500" onPress={this._onPressCallback.bind(this, 5)}/>
                        <Item icon="md-settings" text="设置" onPress={this._onPressCallback.bind(this, 6)}/>
                    </View>
                </ScrollView>
            </View>
        );
    }
    _onPressCallback(position){
        switch(position){
            case 0:  //title
                console.log('_onPressCallback jalskdfjladskjf');
                this.props.navigation.navigate('IndividualPage');
                console.log('_onPressCallback jalskdfjladskj end');
                break;

            case 1:  // add occupation
                this._alert();
                break;

            case 2:  //collection
                this._alert();
                break;

            case 3:  //read articles
                this._alert();
                break;

            case 4:  //tags
                this._alert();
                break;

            case 5:  //rank
                this._alert();
                break;

            case 6: {  //setting

                break;
            }
        }
    }
    _alert(){
        if(Platform.OS === 'android'){
            Alert.alert(
                'Message',
                "This funcion currently isn't available",
                [{text:'OK', onPress:()=>{}}]
            )
        }else if(Platform.OS === 'ios'){
            AlertIOS.alert(
                'Message',
                "This function currently isn't available",
                [{text:'OK', onPress:()=>{}}]
            )
        }
    }
}

class Item extends Component{
    static propTypes={
        icon:PropTypes.string.isRequired,
        iconColor:PropTypes.string,
        text:PropTypes.string.isRequired,
        subText:PropTypes.string,
        onPress:PropTypes.func
    }

    static defaultProps = {
        iconColor:'gray',
    }

    render(){
        const {icon, iconColor, text, subText, onPress} = this.props;
        if(Platform.OS === 'android')
        {
            return(
                <TouchableNativeFeedback onPress={onPress}>
                    <View style={styles.listItem}>
                        <Icon name={icon} size={22} color={iconColor}/>
                        <Text style={{color:'black', fontSize:15, marginLeft:20}}>{text}</Text>
                        <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end'}}>
                            <Text style={{color:'#ccc'}}>{subText}</Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>
            )
        }else if(Platform.OS === 'ios'){
            return(
                <TouchableOpacity onPress={onPress} activeOpacity={theme.btnActiveOpacity}>
                    <View style={styles.listItem}>
                        <Icon name={icon} size={22} color={iconColor}/>
                        <Text style={{color: 'black', fontSize: (15), marginLeft: (20)}}>{text}</Text>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <Text style={{color: "#ccc"}}>{subText}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:theme.pageBackgroundColor
    },
    actionbar:{
        height:theme.actionbar.height,
        backgroundColor:theme.actionbar.backgroundColor,
        alignItems:'center',
        justifyContent:'center',
        paddingTop:(Platform.OS === 'ios') ? 20 : 0,
    },
    intro:{
        height:100,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#fff',
        padding:20,
        borderWidth:1/PixelRatio.get(),
        borderBottomWidth:1/PixelRatio.get(),
        borderBottomColor:'#c4c4c4',
        borderTopColor:'#e4e4e4',
        marginTop:10,
    },
    list:{
        flex:1,
        borderTopWidth:1/PixelRatio.get(),
        borderTopColor:'#e4e4e4',
        marginTop:15,
    },
    listItem:{
        flex:1,
        height:47,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:25,
        paddingRight:25,
        borderBottomColor:'#c4c4c4',
        borderBottomWidth:1/PixelRatio.get()
    }
})
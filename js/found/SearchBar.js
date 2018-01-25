import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Text,View,StyleSheet,Platform,TouchableNativeFeedback,TouchableOpacity} from 'react-native'
import theme from '../config/theme'
import Icon from '../../node_modules/react-native-vector-icons/Ionicons'

export default class SearchBar extends Component{
    static propTypes={
        onPress:PropTypes.func
    }
    render(){
        if(Platform.OS === 'android')
        {
            return(
                <View style={styles.container}>
                    <TouchableNativeFeedback onPress={this.props.onPress}>
                        {this.renderContent()}
                    </TouchableNativeFeedback>
                </View>
            )
        }else if(Platform.OS === 'ios')
        {
            return(
                <View style={styles.container}>
                    <TouchableOpacity onPress={this.props.onPress} activeOpacity={theme.btnActiveOpacity}>
                        {this.renderContent()}
                    </TouchableOpacity>
                </View>
            )
        }
    }

    renderContent(){
        return(
            <View style={styles.searchBar}>
                <Icon name="ios-search" size={25} color={"white"}/>
                <Text style={styles.text}>搜索</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: theme.actionbar.height,
        backgroundColor: theme.actionbar.backgroundColor,
        justifyContent: 'center',
        paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },
    searchBar: {
        flexDirection: 'row',
        height: 33,
        paddingLeft: 13,
        paddingRight: 13,
        backgroundColor: '#489efc',
        alignItems: 'center',
        marginRight: 8,
        marginLeft: 8,
        borderRadius: 3
    },
    text: {
        fontSize: 15,
        color: 'rgba(255,255,255,0.7)',
        marginLeft: 13
    }
});

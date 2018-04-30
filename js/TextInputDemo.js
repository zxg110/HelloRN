import React, {Component} from "react";
import callOnceInInterval from './CallOnceInInterval';

import {StyleSheet, Text, View,TextInput} from "react-native";
import LayoutDemo from "./LayoutDemo";

class TextInputDemo extends Component{
    constructor(props){
        super(props);
        this.state = {text:''};
    }
    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.flexDirectionRow}>
                    <TextInput
                        style={styles.subview_1}
                        placeholder="请输入关键字"
                        returnKeyType="search"
                        underlineColorAndroid='transparent'
                        placeholderTextColor={'#7f7f7f'}
                        onChangeText={(text) => this.setState({text})}/>
                    <View style={styles.btnview}>
                        <Text style={styles.searchbtn} onPress={()=>callOnceInInterval(()=>navigate('LayoutDemo'))}>搜索</Text>
                    </View>
                </View>

                <Text style={styles.tips}>
                    已输入{this.state.text.length}个文字
                </Text>
            </View>
        );
    }
    doSearch(){
        alert("您输入的内容为:"+this.state.text)
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#d9dcd9',
        flexDirection: 'column',
        alignItems:'center',
    },
    subview_1:{
        height:40,
        width:200,
        marginTop:10,
        marginBottom:20,
        borderWidth:2,
        borderColor:'#ccc',
        borderRadius: 4,
        paddingLeft:10,
        paddingBottom:5,
        fontSize: 15,
        textAlign: 'center',
    },
    tips:{
        height:40,
        width:200,
        fontSize: 12,
    },
    btnview:{
        width:55,
        marginLeft:5,
        marginRight:5,
        marginTop:10,
        backgroundColor:'#80d6ff',
        height:40,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    flexDirectionRow:{
        flexDirection:'row'
    },
    searchbtn:{
        color:'#fff',
        fontSize:15,
    },
});

export default TextInputDemo;
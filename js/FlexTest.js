
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
type Props = {};
export default class FlexTest extends Component{
    render(){
        return (
            <View style={styles.flexStyle}>
                <View style= {styles.flexSub_1}/>
                <View style= {styles.flexSub}/>
                <View style= {styles.flexSub}/>

            </View>

        );
    }
}
const styles = StyleSheet.create({
    flexStyle:{
        flex:1,
        flexDirection:'column',
        flexWrap:'wrap',
        alignItems:'center',
    },
    flexSub:{
        height:100,
        backgroundColor:'#70ff56',
        marginBottom:10,
        width:70,

    },
    flexSub_1:{
        height:100,
        width:50,
        backgroundColor:'#6881ff',
        marginBottom:10,
        alignSelf:'flex-start',
    }
});


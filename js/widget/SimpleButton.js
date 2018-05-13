import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import callOnceInInterval from './CallOnceInInterval';
class SimpleButton extends Component{
    render(){
        return(
            <TouchableOpacity  style={styles.button} onPress={()=>callOnceInInterval(this.props.onPress)}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableOpacity>

        );

    }

}

const styles = StyleSheet.create({
    button:{
        marginLeft:15,
        marginRight:15,
        marginBottom:10,
        height:50,
        backgroundColor:'#1a73ff',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    buttonText:{
        fontSize:20,
    },
});
export default SimpleButton;
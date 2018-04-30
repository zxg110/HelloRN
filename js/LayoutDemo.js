/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};



export default class LayoutDemo extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>Title</Text>
                </View>
                <View style={styles.secondLayout}>
                    <View style={styles.secondLeftLayout}>
                        <Text style={styles.tabText}>tab1</Text>
                        <Text style={styles.tabText}>tab2</Text>
                        <Text style={styles.tabText}>tab3</Text>
                        <Text style={styles.tabText}>tab4</Text>
                    </View>
                    <View style={styles.secondRightLayout}>
                        <View style={[styles.content_1,
                            {position: 'absolute', top: 20, left: 20}]}>
                        </View>
                        <View style={[styles.content_2,
                            {position: 'absolute', bottom: 20, right: 20}]}>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    subview:{
        width:300,
        flex:1,
        backgroundColor:'#4bd1ff'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ff6fdd',
        flexDirection: 'column',
    },
    titleView: {
        backgroundColor: '#8fceff',
        height: 50,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    titleText: {
        textAlign: 'center',
        color: '#163308',
        fontSize: 20,
    },
    tabText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff64d',
        marginTop: 30,
    },
    secondLayout: {
        backgroundColor: '#75ffc9',
        flexDirection: 'row',
        marginTop: 10,
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        alignItems: 'stretch',
    },
    secondLeftLayout: {
        backgroundColor: '#ff4149',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        width: 80,
    },
    secondRightLayout: {
        backgroundColor: '#bc89ff',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        flex: 1,
    },
    content_1: {
        backgroundColor: '#baf0ff',
        height: 30,
        width: 30,
    },
    content_2: {
        backgroundColor: '#a72c29',
        height: 30,
        width: 30,
    },
});

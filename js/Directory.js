import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import SimpleButton from './widget/SimpleButton'

class Directory extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {navigate} = this.props.navigation;
        return (

            <View style={styles.container}>
                <SimpleButton
                    onPress={() => navigate('CommWithNativeDemo')}
                    text='CommWithNative'
                />
                <SimpleButton
                    onPress={() => navigate('LayoutDemo')}
                    text='LayoutDemo'
                />
                <SimpleButton
                    onPress={() => navigate('searchUI')}
                    text='TestInputDemo'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fbf9ff',
        flexDirection: 'column',
        paddingTop: 10,
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
export default Directory;
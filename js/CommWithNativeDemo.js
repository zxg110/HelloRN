import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    NativeModules,
    DeviceEventEmitter
} from 'react-native';
import SimpleButton from "./widget/SimpleButton";

let commModule = NativeModules.COMM_MODULE;

class CommWithNativeDemo extends Component {
    //生命周期方法
    componentWillMount() {

    }

    //生命周期方法
    componentDidMount() {
        DeviceEventEmitter.addListener('NativeCallJS', (msg) => {
            alert('msg from native to js:' + msg.key1 + "," + msg.key2);
        })

    }

    render() {
        return (
            <View style={styles.container}>
                <SimpleButton
                    onPress={() => commModule.showNativeToast('message from JS call', commModule.LONG_1, (result) => {
                        alert(result);
                    })}
                    text='simpleCallNativeToast'
                />
                <SimpleButton
                    onPress={() => commModule.rnCallNativeWithCallback('111', (result) => {
                        alert(result);
                    })}
                    text='callNativeWithCallback'
                />
                <SimpleButton
                    onPress={() => commModule.triggerNativeCallRN()}
                    text='triggerNativeCallRN'
                />

                <SimpleButton
                    onPress={this.triggerNativeCallbackJSWithPromise}
                    text='triggerNativeCallbackJSWithPromise'
                />
            </View>

        );
    }

    triggerNativeCallbackJSWithPromise = () => {
        commModule.triggerNativeCallbackJSWithPromise()
            .then((msg) => {
                alert('promise success:' + msg);

            }).catch((err) => {
            alert('promise fail:' + err);
        })
    }


}

const styles = StyleSheet.create({
    subview: {
        width: 300,
        flex: 1,
        backgroundColor: '#4bd1ff'
    },
    container: {
        flex: 1,
        backgroundColor: '#f4edff',
        flexDirection: 'column',
        marginTop: 10,
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
export default CommWithNativeDemo;
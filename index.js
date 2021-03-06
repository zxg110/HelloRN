import {AppRegistry, StyleSheet, YellowBox} from 'react-native';
import App from './App';
import {
    StackNavigator,
} from 'react-navigation';

import LayoutDemo from './js/LayoutDemo';
import TextInputDemo from "./js/TextInputDemo";
import Directity from "./js/Directory"
import CommWithNativeDemo from './js/CommWithNativeDemo';

/**
 * 屏蔽使用react-navigation时产生的警告，
 * 提示黄色警告的原因是react-navigation插件用了已经再ES6中弃用的isMounted()方法
 */
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated in plain JavaScript React classes.']);

const SimpleApp = StackNavigator({
    Directory: {
        screen: Directity,
        navigationOptions: {
            headerTitle: 'Dircetory',
            headerStyle: {
                height: 40,
                backgroundColor: '#465c72',
            },
        },
    },
    searchUI: {
        screen: TextInputDemo,
        navigationOptions: {
            headerTitle: 'first ui',
            headerStyle: {
                height: 40,
                backgroundColor: '#465c72',
            },

        }
    },
    LayoutDemo: {screen: LayoutDemo},
    CommWithNativeDemo:{screen:CommWithNativeDemo},

});


AppRegistry.registerComponent('HelloRN', () => SimpleApp);

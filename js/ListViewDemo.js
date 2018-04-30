import React, {Component} from "react";
import DataProvider from './DataProvider.json';
import {StyleSheet, Text, View, ListView, TouchableOpacity, Image} from "react-native";

class ListViewDemo extends Component {
    constructor(props) {
        super(props);
        let ods = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        this.state = {dataSource: ods.cloneWithRows(DataProvider.data)};
        thiz = this;
    }

    render() {
        return (
            <View style={styles.container}>

                <ListView style={styles.listViewStyle}
                          dataSource={this.state.dataSource}
                          renderRow={this.renderRow}
                />
            </View>
        );

    }

    renderRow(rowData, sectionID, rowID) {
        return (
            <TouchableOpacity
                onPress={() => thiz._onItemPress(rowID)}
                activeOpacity={0.5}>
                <View style={styles.itemViewStyle}>
                    <Image source={require('./flowers.png')} style={styles.leftImageStyle}/>
                    <View style={styles.rightViewStyle}>
                        <Text style={styles.titleStyle}>{rowData.title}</Text>
                        <Text style={styles.subtitleStyle} numberOfLines={2}>{rowData.subtitle}></Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    _onItemPress(rowID) {
        alert('点击了第' + rowID + '行');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d9dcd9',
        flexDirection: 'column',
    },
    listViewStyle: {
        backgroundColor: '#f2f0e4',
        marginLeft: 10,
        marginRight: 10,
    },
    itemViewStyle: {
        flexDirection: 'row',
        justifyContent: "center",
    },
    leftImageStyle: {
        width: 60,
        height: 60,
        margin: 5,
        marginRight: 20,
    },
    rightViewStyle: {
        flex: 1,

    },
    titleStyle: {
        marginRight: 5,
        marginTop: 5,
        marginBottom: 3,
        color: '#151515',
    },
    subtitleStyle: {
        height: 35,
        color: '#9f9f9f',
    },

});
export default ListViewDemo;
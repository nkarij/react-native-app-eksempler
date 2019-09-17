import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Item extends Component {

    render() {
        const itemTitle = this.props.title;
        const itemKey = this.props.id;
        // itemKey == 1 returnerer true ved listitem 1
        console.log(itemKey == 1);
        console.log(itemTitle);
        return (
            <View>
                <Text key={itemKey}> {itemTitle} </Text>
            </View>
        )
    }
}

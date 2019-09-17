import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'


export default class TestComponent extends Component {
    render() {
        return (
            <View>
                <Text style={{backgroundColor: 'red'}}> textInComponent </Text>
            </View>
        )
    }
}

// const styles = StyleSheet.create({
// })

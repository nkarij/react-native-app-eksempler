import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { ButtonGroup, Button, Card, Header } from 'react-native-elements'


export default class TopMenu extends Component {

    render() {
        return (
            <Header containerStyle={styles.header} centerComponent={{text: "Title", style:{color: 'red'}}}/>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      backgroundColor: 'green',
    }
  });
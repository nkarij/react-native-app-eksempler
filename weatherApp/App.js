import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { ButtonGroup, Button, Card, Header } from 'react-native-elements'
import ButtonMenu from './components/ButtonMenu'
import TopMenu from './components/topMenu'


export default class App extends Component {
  render() {
    return (
      <View>
        <TopMenu />
        <ButtonMenu />
        <Text> Saxo </Text>
      </View>
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

});

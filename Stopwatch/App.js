// importer react
import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import Timewatch from './components/Timewatch'
import { Button } from 'react-native-elements';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Timewatch fisk={{backgroundColor: 'green'}} fisk={styles.paragraph} title={["Knap1", "knap2", "knap3"]} alert={"Trykket"} />
        <Image style={styles.image} source={require('./assets/20-NAU-Furniture-Australia-Branding-Print-Stationery-Business-Cards-Design-by-Toko-Australia-BPO.jpg')} />
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
  paragraph: {
    fontSize: 24,
    color: 'green'
  },
  image: {
    height: 30,
    width: 30
  },
  button: {
    color: 'green',
    backgroundColor: 'red'
  }
});

// GENVEJ/SNIPPET TIL AT OPRETTE ET PROJEKT MED STYLESHEET: RNCS
// GENVEJ TIL AT OPRETTE EN CONSTRUCTOR, INDE I CLASS, FØR RENDER: RCONST

import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'


export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <View>
        <Text style={styles.paragraph}> My First App </Text>
          <Image style={styles.logo} source={require('../ex-1/assets/icon.png')} />
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
      color: 'green',
    },

    img: {
      width: '50px',
      height: '50px',
    },
})


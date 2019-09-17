import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { ThemeProvider, ButtonGroup, Button, Card, Header } from 'react-native-elements'

const theme = {
  ButtonGroup: {
    textStyle: {
      color: 'white'
    }
  }
}

export default class ButtonMenu extends Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 2
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }
  
  render () {
    const buttons = ['Alle', 'Ebog', 'Lydbog']
    const { selectedIndex } = this.state
  
    return (
      <ThemeProvider theme={theme}>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{height: 100}} 
          innerBorderStyle={{width: 1, color: 'black'}}
          buttonStyle={{backgroundColor: 'grey', borderRadius: 10}}
        />
      </ThemeProvider>
    )
  }

}



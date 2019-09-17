import React, { Component } from 'react'
import { Text, View } from 'react-native'
import TestComponent from './components/component'

export default class App extends Component {
  
  state = {
    andeby: [
      { id: 1, name: 'Anders And' },
      { id: 2, name: 'Mickey Mouse' },
      { id: 3, name: 'Fedtmule' }
      ]  
  }

  createOutput(){
      const items = this.state.andeby.map((item) => 
        <Text key={item.id}>{item.name}</Text>
      );
      return items;
  }

  render() {

    return (
      <View>
        <TestComponent />
        {this.createOutput()} 
      </View>
    )
  }
}


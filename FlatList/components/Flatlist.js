import React, { Component } from 'react'
import { FlatList, Text, View } from 'react-native'

const input = 
  [
  { id: 1, name: 'Anders And' },
  { id: 2, name: 'Mickey Mouse' },
  { id: 3, name: 'Fedtmule' }
  ]

class Item extends Component {

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

export default class App extends Component {

  state = {
    
  }
  
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <FlatList
        data={input}
        renderItem={({item, index, separators}) => (
          <Item id={item.id} title={item.name}/>
        )}
        keyExtractor={(item, index) => item.id.toString()}
        />
      </View>
    )
  }
}

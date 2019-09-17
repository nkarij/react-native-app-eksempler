import React, { Component } from 'react'
import { FlatList, Text, View } from 'react-native'
import FiskFlatList from './components/Flatlist'
import FiskSectionList from './components/Sectionlist'
import FetchList from './components/Fetchlist'

export default class App extends Component {
  
  render() {
    return (
      <View>
        {/* <FiskSectionList /> */}
        <FetchList />
      </View>
    )
  }
}



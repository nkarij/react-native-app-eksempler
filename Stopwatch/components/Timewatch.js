import React, { Component } from 'react'
import { Text, View, Alert, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';

export default class Timewatch extends Component {

    state = {
        count: 0,
        interval: null,
    }
  
    componentDidMount() {
    //   setInterval(() => {
    //     this.setState({count: this.state.count + 1})
    //   }, 1000)
    }

    startTimer() {
      this.state.interval = setInterval(() => {
        this.setState({count: this.state.count + 1})
      }, 1000)
    }

    pauseTimer(){
        clearInterval(this.state.interval)
    }

    resetTimer(){
        clearInterval(this.state.interval)
        this.setState({count: 0})
    }
        

    render() {
      const count = this.state.count
      const paragraph = this.props.fisk
      const buttonTitleArray = this.props.title
      // dette virker ikke at sætte ind:
      const buttonStil = this.props.fisk
      console.log("fisk", buttonStil);

      return (
        <View>
            <Text style={paragraph}>
            {count}
            </Text>
            <Button title={buttonTitleArray[0]} onPress={() => this.startTimer()} />
            <Button type="outline" title={buttonTitleArray[1]} onPress={() => this.pauseTimer()} />
            <Button title={buttonTitleArray[2]} onPress={() => this.resetTimer()} />
        </View>
      )
    }
}




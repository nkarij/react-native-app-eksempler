import React, { Component } from 'react'
import { ActivityIndicator, FlatList, Text, StyleSheet, View } from 'react-native'


export default class fetchlist extends Component {

    // constructor with state.
    constructor(props){
        super(props);
        this.state = { 
            isLoading: true
            // her bliver tilføjet en datasource når der fetches.
        }
      }

    // do the fetch
    componentDidMount(){
        return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                isLoading: false,
                dataSource: responseJson.movies,
            }, function(){
                console.log(this.state.dataSource);
            });
            // console.log(this.state.dataSource);
        })
        .catch((error) =>{
            console.error(error);
        });
    }

    renderOutputItem = ({item}) => {
        return (
            <Text key={item.id}> {item.title} {item.releaseYear} </Text>
        )
    }


    render() {
        // viser en activity indicator, så længe der fetches.
        if(this.state.isLoading){
            return(
              <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
              </View>
            )
        }

        // output
        return(
        <View style={{flex: 1, paddingTop:20}}>
            <FlatList
            data={this.state.dataSource}
            renderItem={this.renderOutputItem}
            keyExtractor={({id}, index) => id}
            />
        </View>
        );

    }
}

const styles = StyleSheet.create({})

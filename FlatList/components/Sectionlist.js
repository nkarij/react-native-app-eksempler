import React, { Component } from 'react'
import { SectionList, Text, StyleSheet, View } from 'react-native'

// det er super vigtigt at sections strukturen ser sådan her ud.
// det skal være et array af objects. 
const input = [
    {
    id: 0,
    title: 'section 1',
    data:
        [
            { id: 1, name: 'Musse Masse' },
            { id: 2, name: 'Bamse Lajse' },
            { id: 3, name: 'Buster' }
        ], 
    }
]


export default class Sectionlist extends Component {

    renderOutputHeader = ({section}) => {
        return (
            <Text style={styles.listitem} key={section.id}> {section.title} </Text>
        )
    }
    
    
    renderOutputItem = ({item}) => {
        return (
            <Text key={item.id}> {item.name} </Text>
        )
    }

    render() {
        return (
            <View>
                <SectionList 
                style={styles.container}
                sections={input}
                renderItem={this.renderOutputItem}
                renderSectionHeader={this.renderOutputHeader}
                keyExtractor={(item, index) => item.id.toString()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listitem: {
        backgroundColor: 'green'
    }
})

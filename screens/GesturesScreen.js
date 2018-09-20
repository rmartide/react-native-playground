import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class GesturesScreen extends Component {
    static navigationOptions = {
        title: 'Gestures Handler',
        headerTitleStyle: {
            flex: 1,
            textAlign: 'center'
        },
        headerRight: (<View></View>)
    }
    render() {
        return (
            <View>
            <Text></Text>
            </View>
        )
    }
}
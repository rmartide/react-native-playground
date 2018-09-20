import React, { Component } from 'react'
import { TextInput, View } from 'react-native'

export default class FormsScreen extends Component {
    static navigationOptions = {
        title: 'Forms',
        headerTitleStyle: {
            flex: 1,
            textAlign: 'center'
        },
        headerRight: (<View></View>)
    }
    render() {
        return (
            <View>
                <TextInput placeholder="Type here" style={{ height: 40 }} />
            </View>
        )
    }
}
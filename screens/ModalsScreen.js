import React, { Component } from 'react'
import { Text, View, Alert, TouchableWithoutFeedback } from 'react-native'

export default class ModalsScreen extends Component {
    static navigationOptions = {
        title: 'Modals',
        headerTitleStyle: {
            flex: 1,
            textAlign: 'center'
        },
        headerRight: (<View></View>)
    }

    generateGrid = (rows, columns) => {

        const gridContent = []

        for (let i = 0; i < rows; i++) {
            gridContent.push(this.generateRow(i * columns, columns));
        }

        const grid = (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                {gridContent}
            </View>
        );

        return grid;
    }

    generateRow = (rowNumber, columns) => {
        const rowContent = [];
        const border = {
            borderStyle: "solid",
            borderColor: "white",
            borderWidth: 1
        }
        for (let i = 1; i <= columns; i++) {
            const id = rowNumber + i;
            const element = (
                <TouchableWithoutFeedback key={id} onPress={() => Alert.alert(`Pressed ${id}`)}>
                    <View style={{ flex: 1, backgroundColor: 'blue', ...border, justifyContent: 'space-around' }}>
                        <Text style={{ fontSize: 60, color: 'white', marginLeft: 'auto', marginRight: 'auto' }}>{id}</Text>
                    </View>
                </TouchableWithoutFeedback>

            );
            rowContent.push(element);
        }

        const row = (
            <View key={rowNumber} style={{ flex: 1, flexDirection: 'row' }}>
                {rowContent}
            </View>
        )

        return row;
    }

    render() {
        return this.generateGrid(4, 3);

    }
}
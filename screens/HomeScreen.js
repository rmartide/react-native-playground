import React, { Component } from 'react'
import { TextInput, View, Button } from 'react-native'

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
        headerTitleStyle: {
            flex: 1,
            textAlign: 'center',
            color: 'white'
        },
        headerStyle: {
            backgroundColor: 'green'
        }
    }

    handlePress = (e) => {
        // const { navigate } = this.props.navigation;
        // navigate(`${screenName}Screen`, { /*PROPS*/ });
        console.log(e);
        console.log(e.nativeEvent);
    }
    generateButtons = () => {
        var screens = ['Modals', 'Forms', 'Gestures'];
        const { navigate } = this.props.navigation;
        return screens.map(screen =>
            <NavigationButton key={screen} title={screen} navigate={navigate} />
        );
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                {this.generateButtons()}
            </View>
        )
    }
}

const NavigationButton = (props) => {
    console.log(props);
    const navigate = () => {
        props.navigate(props.title);
    }
    return <Button style={{ height: 150 }} title={props.title} onPress={navigate} />;
}
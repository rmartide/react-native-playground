import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import ModalsScreen from './screens/ModalsScreen';
import GesturesScreen from './screens/GesturesScreen';
import FormsScreen from './screens/FormsScreen';

const RootStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Modals: { screen: ModalsScreen },
    Forms: { screen: FormsScreen },
    Gestures: { screen: GesturesScreen }
  },
  {
    initialRouteName: 'Home',
  }
);

class App extends React.Component {
  render() {
    return <RootStack />
  }
}

export default App;

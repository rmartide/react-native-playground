import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import ModalsScreen from "./screens/ModalsScreen";
import GesturesScreen from "./screens/GesturesScreen";
import FormsScreen from "./screens/FormsScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Forms" component={FormsScreen} />
        <Stack.Screen name="Modals" component={ModalsScreen} />
        <Stack.Screen name="Gestures" component={GesturesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainTab from './MainTab';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="MainTab">
          <Stack.Screen name="MainTab" component={MainTab} options={{headerShown: false}}>
          </Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

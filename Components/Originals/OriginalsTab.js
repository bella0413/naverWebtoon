import React from 'react';
import {Text, View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NewToon from './NewToon';
import MonToon from './MonToon';
import TueToon from './TueToon';
import WedToon from './WedToon';
import ThuToon from './ThuToon';
import FriToon from './FriToon';
import SatToon from './SatToon';
import SunToon from './SunToon';
import CompleteToon from './CompleteToon';

const Tab = createMaterialTopTabNavigator();

const Originals = () => {
  return (
    <Tab.Navigator initialRouteName="MonToon" tabBarOptions={{
      activeTintColor: '#ffffff',
      inactiveTintColor: '#404040',
      labelStyle: { fontSize: 13, fontWeight: '700'},
      indicatorStyle: {
        borderBottomColor:'#03c75a',
        borderBottomWidth: 50,
      },
      tabStyle: {
        paddingHorizontal: 0
      }
  }}>
  <Tab.Screen name="신작" component={NewToon} />
  <Tab.Screen name="월" component={MonToon} />
  <Tab.Screen name="화" component={TueToon} />
  <Tab.Screen name="수" component={WedToon} />
  <Tab.Screen name="목" component={ThuToon} />
  <Tab.Screen name="금" component={FriToon} />
  <Tab.Screen name="토" component={SatToon} />
  <Tab.Screen name="일" component={SunToon} />
  <Tab.Screen name="완결" component={CompleteToon} />
  </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

const OriginalsTab = () => {
  return (
          <Stack.Navigator initialRouteName="Originals">
          <Stack.Screen name="Originals" component={Originals}  options={{headerShown: false}}></Stack.Screen>
          </Stack.Navigator>
  );
};

export default OriginalsTab;

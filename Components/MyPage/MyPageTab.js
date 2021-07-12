import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import InterestedToon from './InterestedToon';
import RecentToon from './RecentToon';
import TempToon from './TempToon';
import Storage from './Storage';

const Tab = createMaterialTopTabNavigator();

const MyPage = () => {
  return (
    <Tab.Navigator initialRouteName="InterestedToon" tabBarOptions={{
      activeTintColor: '#03c75a',
      inactiveTintColor: '#404040',
      labelStyle: { fontSize: 13, fontWeight: '700'},
      indicatorStyle: {
        borderBottomColor:'#03c75a',
        borderBottomWidth: 3,
      },
      tabStyle: {
        paddingHorizontal: 0
      }
  }}>
  <Tab.Screen name="관심웹툰" component={InterestedToon} />
  <Tab.Screen name="최근 본" component={RecentToon} />
  <Tab.Screen name="임시저장" component={TempToon} />
  <Tab.Screen name="보관함" component={Storage} />
  </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

const MyPageTab = () => {
  return (
        <Stack.Navigator initialRouteName="MY">
        <Stack.Screen name="MY" component={MyPage}></Stack.Screen>
        </Stack.Navigator>
  );
};

export default MyPageTab;

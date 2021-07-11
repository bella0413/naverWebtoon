import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import OriginalsTab from './Components/Originals/OriginalsTab';
import CompleteToonTab from './Components/CompleteToon/CompleteToonTab';
import ChallengeToonTab from './Components/ChallengeToon/ChallengeToonTab';
import MyPageTab from './Components/MyPage/MyPageTab';
import MoreTab from './Components/More/MoreTab';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return(
    <Tab.Navigator screenOptions = {({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let icon;

              if (route.name === 'Originals') {
                icon = focused ? 'calendar-range' : 'calendar-range-outline';
              } else if (route.name === 'CompleteToon') {
                icon = focused ? 'clock-time-nine' : 'clock-time-nine-outline';
              } else if (route.name === 'ChallengeToon') {
                icon = focused ? 'bookmark-plus' : 'bookmark-plus-outline';
              } else if (route.name === 'MyPage') {
                icon = focused ? 'face' : 'face-outline';
              } else if (route.name === 'More') {
                icon = focused ? 'plus-box' : 'plus-box-outline';
              }
              return <MaterialCommunityIcons name={icon} size={28} color={'#2b3b56'} />;
            },
          })}
          tabBarOptions={{
            showLabel: false,
          }}
          >
        <Tab.Screen name="Originals" component={OriginalsTab}></Tab.Screen>
        <Tab.Screen name="CompleteToon" component={CompleteToonTab}></Tab.Screen>
        <Tab.Screen name="ChallengeToon" component={ChallengeToonTab}></Tab.Screen>
        <Tab.Screen name="MyPage" component={MyPageTab}></Tab.Screen>
        <Tab.Screen name="More" component={MoreTab}></Tab.Screen>
    </Tab.Navigator>
  );
}

export default MainTab;

import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Tickets from '../screens/Tabs/Tickets';
import Wallet from '../screens/Tabs/Wallet';
import Setting from '../screens/Tabs/Setting';
import SvgUri from 'react-native-svg-uri';
import {homeImg, settingImg, ticketImg, walletImg} from '../assets';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarActiveTintColor: '#FF6260'}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => {
            return <SvgUri source={homeImg} fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Tickets"
        component={Tickets}
        options={{
          tabBarIcon: ({color}) => {
            return <SvgUri source={ticketImg} fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({color}) => {
            return <SvgUri source={walletImg} fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({color}) => {
            return <SvgUri source={settingImg} fill={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

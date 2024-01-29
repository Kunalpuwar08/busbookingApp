import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth from '../screens/Auth';
import FindBus from '../screens/FindBus';
import BottomTab from './BottomTab';
import SelectSeat from '../screens/SelectSeat';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="Tab" component={BottomTab} />
      <Stack.Screen name="FindBus" component={FindBus} /> */}
      <Stack.Screen name="SelectSeat" component={SelectSeat} />
    </Stack.Navigator>
  );
};

export default StackNav;

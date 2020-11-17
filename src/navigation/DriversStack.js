import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {routes} from '../constants';
import {DriversTableScreen, DriverScreen} from '../screens';

const Stack = createStackNavigator();

const DriversStack = () => (
  <Stack.Navigator initialRouteName={routes.DRIVERS_SCREEN}>
    <Stack.Screen name={routes.DRIVER_SCREEN} component={DriverScreen} />
    <Stack.Screen name={routes.DRIVERS_SCREEN} component={DriversTableScreen} />
  </Stack.Navigator>
);

export default DriversStack;

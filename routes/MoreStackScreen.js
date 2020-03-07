import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LicensesScreen from '../screens/more/LicensesScreen';
import MoreScreen from '../screens/more/MoreScreen';
import ThemeScreen from '../screens/more/ThemeScreen';
import TimerSettingsScreen from '../screens/more/TimerSettingsScreen';

const MoreStack = createStackNavigator();

function MoreStackScreen() {
  return (
    <MoreStack.Navigator
      initialRouteName="MoreScreen"
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#FB8C00' },
      }}
    >
      <MoreStack.Screen
        name="MoreScreen"
        component={MoreScreen}
        options={{
          title: 'More',
        }}
      />
      <MoreStack.Screen
        name="LicensesScreen"
        component={LicensesScreen}
        options={{
          title: 'LicensesScreen',
        }}
      />
      <MoreStack.Screen
        name="ThemeScreen"
        component={ThemeScreen}
        options={{
          title: 'ThemeScreen',
        }}
      />
      <MoreStack.Screen
        name="TimerSettingsScreen"
        component={TimerSettingsScreen}
        options={{
          title: 'TimerSettingsScreen',
        }}
      />
    </MoreStack.Navigator>
  );
}

export default MoreStackScreen;
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SessionsScreen from '../screens/stats/SessionsScreen';
import SessionScreen from '../screens/stats/SessionScreen';
import AverageOfFiveScreen from '../screens/stats/AverageOfFiveScreen';
import CreateSessionScreen from '../screens/stats/CreateSessionScreen';
import SessionDetailsScreen from '../screens/stats/SessionDetailsScreen';
import SingleTimeScreen from '../screens/stats/SingleTimeScreen';

const StatsStack = createStackNavigator();

function StatsStackScreen() {
  return (
    <StatsStack.Navigator
      initialRouteName="SessionScreen"
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#FB8C00' },
      }}
    >
      <StatsStack.Screen
        name="SessionScreen"
        component={SessionScreen}
        options={{
          title: 'Stats',
        }}
      />
      <StatsStack.Screen
        name="SessionsScreen"
        component={SessionsScreen}
        options={{
          title: 'SessionsScreen',
        }}
      />
      <StatsStack.Screen
        name="AverageOfFiveScreen"
        component={AverageOfFiveScreen}
        options={{
          title: 'AverageOfFiveScreen',
        }}
      />
      <StatsStack.Screen
        name="CreateSessionScreen"
        component={CreateSessionScreen}
        options={{
          title: 'CreateSessionScreen',
        }}
      />
      <StatsStack.Screen
        name="SessionDetailsScreen"
        component={SessionDetailsScreen}
        options={{
          title: 'SessionDetailsScreen',
        }}
      />
      <StatsStack.Screen
        name="SingleTimeScreen"
        component={SingleTimeScreen}
        options={{
          title: 'SingleTimeScreen',
        }}
      />
    </StatsStack.Navigator>
  );
}

export default StatsStackScreen;
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
//screens
import Timer from "../screens/timer/Timer";
import Help from "../screens/help/Help";
import MoreStackScreen from "./MoreStackScreen";
import StatsStackScreen from "./StatsStackScreen";


const Tab = createBottomTabNavigator();

export default function TabScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Timer') {
              iconName = 'ios-timer'; 
            } else if (route.name === 'Stats') {
              iconName = 'ios-stats'; 
            } else if (route.name === 'Help') {
              iconName = 'ios-help-circle-outline'; 
            } else if (route.name === 'More') {
              iconName = 'ios-more'; 
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#FB8C00',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Timer" component={Timer} />
        <Tab.Screen name="Stats" component={StatsStackScreen} />
        <Tab.Screen name="Help" component={Help} />
        <Tab.Screen name="More" component={MoreStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './screens/Home'
import Profile from './screens/Profile'
import TabBarIcon from './components/TabBarIcon'

const SettingsStack = createStackNavigator()

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="My Account"
        component={Profile}
        options={{ tabBarLabel: 'Hello' }}
      />
    </SettingsStack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{ showLabel: false }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="ios-home" />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsStackScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="ios-person" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

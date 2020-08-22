import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './screens/Home.js'
import TabBarIcon from './components/TabBarIcon'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="ios-home" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

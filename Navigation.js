import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import TabBarIcon from './components/TabBarIcon'
import Home from './screens/Home'
import Profile from './screens/Profile'
import Login from './screens/Login'
import Password from './screens/Password'
import Signup from './screens/Signup'

const SettingsStack = createStackNavigator()

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="My Account" component={Profile} />
      <SettingsStack.Screen name="Login" component={Login} />
      <SettingsStack.Screen name="Signup" component={Signup} />
      <SettingsStack.Screen name="Forgot Password" component={Password} />
    </SettingsStack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

function Navigation() {
  return (
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
  )
}

export default Navigation

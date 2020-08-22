import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { STORE_NAME } from '@env'

import Home from './screens/Home.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

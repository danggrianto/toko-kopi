import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { STORE_NAME } from '@env'

import Colors from '../config/Colors'

function Home() {
  return (
    <View style={styles.container}>
      <Text>{STORE_NAME}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
  },
})

export default Home

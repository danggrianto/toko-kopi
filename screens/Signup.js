import React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'
import { CommonActions } from '@react-navigation/native'

import Colors from '../config/Colors'

function Signup({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Signup</Text>
      <Button
        title="Sign Up"
        color={Colors.primary}
        onPress={() => {
          navigation.navigate('My Account')
        }}
      />
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

export default Signup

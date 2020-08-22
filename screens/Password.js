import React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'
import { CommonActions } from '@react-navigation/native'

import Colors from '../config/Colors'

function Password({ navigation }) {
  return (
    <View style={styles.container}>
      <Text> Password</Text>
      <Button
        title="Send Email"
        color={Colors.primary}
        onPress={() => {
          navigation.dispatch(CommonActions.goBack())
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

export default Password

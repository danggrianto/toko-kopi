import React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'

import Colors from '../config/Colors'

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button
        title="SignUp"
        color={Colors.primary}
        onPress={() => {
          navigation.navigate('Signup')
        }}
      />
      <Button
        title="Forgot Password"
        color={Colors.primary}
        onPress={() => {
          navigation.navigate('Forgot Password')
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

export default Login

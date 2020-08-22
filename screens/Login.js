import React, { useState } from 'react'
import { TextInput, Button, View, Text, StyleSheet } from 'react-native'

import Colors from '../config/Colors'

function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onLogin = () => {
    navigation.navigate('My Account')
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputBox}
        placeholder="Email"
        placeholderTextColor="grey"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.inputBox}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        placeholderTextColor="grey"
        secureTextEntry={true}
      />
      <Button title="Login" color={Colors.primary} onPress={onLogin} />
      <Button
        title="Forgot Password?"
        color={Colors.primary}
        onPress={() => {
          navigation.navigate('Forgot Password')
        }}
      />
      <Button
        title="Don't have account? Signup here!"
        color={Colors.primary}
        onPress={() => {
          navigation.navigate('Signup')
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
  inputBox: {
    width: '85%',
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderColor: Colors.outline,
    borderBottomWidth: 1,
    color: Colors.outline,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default Login

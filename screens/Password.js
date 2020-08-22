import React, { useState } from 'react'
import { TextInput, Button, View, Text, StyleSheet } from 'react-native'
import { CommonActions } from '@react-navigation/native'

import Colors from '../config/Colors'

function Password({ navigation }) {
  const [email, setEmail] = useState('')
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputBox}
        placeholder="enter your email address"
        placeholderTextColor="grey"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
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

export default Password

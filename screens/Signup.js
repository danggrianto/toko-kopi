import React, { useState } from 'react'
import { TextInput, Button, View, Text, StyleSheet } from 'react-native'

import { firebase } from '../config/Firebase'
import Colors from '../config/Colors'

function Signup({ navigation }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const onRegisterPress = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match.")
      return
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid
        const data = {
          id: uid,
          email,
          name,
        }
        const usersRef = firebase.firestore().collection('users')
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            navigation.navigate('My Account', { user: data })
          })
          .catch((error) => {
            alert(error)
          })
      })
      .catch((error) => {
        alert(error)
      })
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputBox}
        placeholder="Name"
        placeholderTextColor="grey"
        onChangeText={(text) => setName(text)}
        value={name}
      />
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
      <TextInput
        style={styles.inputBox}
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        placeholder="Confirm Password"
        placeholderTextColor="grey"
        secureTextEntry={true}
      />
      <Button
        title="Sign me up!"
        color={Colors.primary}
        onPress={onRegisterPress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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

export default Signup

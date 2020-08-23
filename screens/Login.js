import React, { useState } from 'react'
import { TextInput, Button, View, Text, StyleSheet } from 'react-native'

import { firebase } from '../config/Firebase'
import Colors from '../config/Colors'

function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onLoginPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid
        const usersRef = firebase.firestore().collection('users')
        usersRef
          .doc(uid)
          .get()
          .then((firestoreDocument) => {
            if (!firestoreDocument.exists) {
              alert('User does not exist anymore.')
              return
            }
            const user = firestoreDocument.data()
            navigation.navigate('My Account', { user })
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
      <Button title="Login" color={Colors.primary} onPress={onLoginPress} />
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

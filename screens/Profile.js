import React, { useState, useEffect } from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'

import { firebase } from '../config/Firebase'
import Colors from '../config/Colors'

function Profile({ navigation }) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users')
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const unsub = usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          })
        console.log('USER LOGGED IN')
      } else {
        setLoading(false)
        console.log('USER NOT LOGGED IN')
      }
      return () => unsub()
    })
  }, [])

  const onLogoutPress = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null)
      })
      .catch((error) => console.error(error))
  }

  return (
    <View style={styles.container}>
      {user ? (
        <View>
          <Text>Welcome {user.name}</Text>
          <Button
            title="Logout"
            color={Colors.primary}
            onPress={onLogoutPress}
          />
        </View>
      ) : (
        <Button
          title="Login"
          color={Colors.primary}
          onPress={() => {
            navigation.navigate('Login')
          }}
        />
      )}
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

export default Profile

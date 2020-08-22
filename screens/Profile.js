import React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'

import Colors from '../config/Colors'

function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Profile Page</Text>
      <Button
        title="Login"
        color={Colors.primary}
        onPress={() => {
          navigation.navigate('Login')
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

export default Profile

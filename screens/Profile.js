import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Profile

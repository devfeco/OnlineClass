import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Router from './src/components/Navigation/Router'

export default function App() {
  return (
    <View style={styles.container}>
      <Router/>
    </View>
  )
}

const styles = StyleSheet.create({
container:{
  flex:1,
}
})
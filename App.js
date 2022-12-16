import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Router from './src/components/Navigation/Router'
import {NativeBaseProvider} from 'native-base'

export default function App() {
  return (
    <NativeBaseProvider>
    <View style={styles.container}>
      <Router/>
    </View>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
container:{
  flex:1,
}
})
import { StyleSheet, Text, View } from 'react-native'
import React , {useCallback} from 'react'
import Router from './src/components/Navigation/Router'
import {NativeBaseProvider} from 'native-base'
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    'KanitL':require('./assets/fonts/Kanit-Light.ttf'),
});

const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) 
        await SplashScreen.hideAsync();
},[fontsLoaded]);

if(!fontsLoaded)
    return null;

  return (
    <NativeBaseProvider>
    <View style={styles.container} onLayout={onLayoutRootView}>
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
import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import BackButton from '../Shared/BackButton'
import {colors} from '../Shared/styles';

//Import Screens
import Onboarding from '../../screens/Onboarding';
import Authentication from '../../screens/Authentication';
import Verification from '../../screens/Verification';
import Home from '../../screens/Home';
import CreateAnAccount from '../../screens/CreateAnAccount'

export default function Router() {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle:{
            backgroundColor:colors.white
          }
        }}>
            <Stack.Screen 
              name='Onboarding' 
              component={Onboarding} 
              options={{headerShown:false}}/>
            <Stack.Screen 
              name='Authentication' 
              component={Authentication} 
              options={{headerShown:false}}/>
            <Stack.Screen 
              name='Verification' 
              component={Verification} 
              options={{
                title:'Telefonunuzu Doğrulayın',
                headerTitleStyle:{
                  fontFamily:'KanitL',
                  fontWeight:"600",
                  fontSize:24,
                },
                headerTitleAlign:'center',
                headerLeft:(props)=>(<BackButton {...props}/>)
                }}/>
                <Stack.Screen 
                  name='CreateAnAccount' 
                  component={CreateAnAccount} 
                  options={{headerShown:false}}/>
              <Stack.Screen 
                  name='Home' 
                  component={Home} 
                  options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
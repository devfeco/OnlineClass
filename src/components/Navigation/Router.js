import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import BackButton from '../Shared/BackButton'
import {colors} from '../Shared/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Import Screens
import Onboarding from '../../screens/Onboarding';
import Authentication from '../../screens/Authentication';
import Verification from '../../screens/Verification';
import CreateAnAccount from '../../screens/CreateAnAccount';
import AskQuestion from '../../screens/AskQuestion';
import BottomTab from './BottomTab';


const Stack = createNativeStackNavigator();

export default function Router() {

  const [viewedOnboarding,setViewedOnboarding] = useState(false);
  const getAsyncStorage = async () => {
    try {
      const val = await AsyncStorage.getItem('@viewedOnboarding');
      if(val!==null)
        setViewedOnboarding(true);
    } catch (err) {
      console.error('Error @checkOnboarding: ',err);
    }
  }
  useEffect(() => {
    getAsyncStorage();
  });

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle:{
            backgroundColor:colors.white
          }
        }} initialRouteName={viewedOnboarding ? 'Bottomtab' : 'Onboarding'}>
          <Stack.Screen 
                name='BottomTab' 
                component={BottomTab} 
                options={{headerShown:false}}/>
            <Stack.Screen
              name='AskQuestion'
              component={AskQuestion}
              options={{headerShown:false}}
            />
            {
              viewedOnboarding ||
              <>
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
              </>
            }
        </Stack.Navigator>
    </NavigationContainer>
  )
}
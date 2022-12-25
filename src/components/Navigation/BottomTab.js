import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../Shared/styles';
import {Ionicons} from "@expo/vector-icons"

//import screens
import Home from '../../screens/Home';
import Search from '../../screens/Search';
import Answers from '../../screens/Answers';
import Account from '../../screens/Account';
import Camera from '../../screens/Camera';
import CustomTabButton from './CustomTabButton';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name={'Home'} component={Home} options={{
          tabBarIcon:({color})=><Ionicons name='home-outline' size={24} color={color}/>
        }}/>
        <Tab.Screen name={'Search'} component={Search} options={{
          tabBarIcon:({color})=><Ionicons name='search-outline' size={24} color={color}/>
        }}/>
        <Tab.Screen name={'Camera'} component={Camera} options={{
          tabBarStyle:{
            display:'none'
          },
          tabBarButton:(props)=><CustomTabButton {...props}/>
        }}/>
        <Tab.Screen name={'Answers'} component={Answers} options={{
          tabBarIcon:({color})=><Ionicons name='file-tray-outline' size={24} color={color}/>
        }}/>
        <Tab.Screen name={'Account'} component={Account} options={{
          tabBarIcon:({color})=><Ionicons name='person-outline' size={22} color={color}/>
          }}/>
    </Tab.Navigator>
  )
}

const screenOptions = {
    headerShown:false,
    tabBarShowLabel:false,
    tabBarStyle:{
      backgroundColor:colors.frost,
      position:'absolute',
      left:5,
      right:5,
      height:60,
      bottom:5,
      borderRadius:12,
      borderColor:'#ccc',
      borderWidth:1
    },
    activeColor:colors.primary,
    inactiveColor:colors.secondary
}
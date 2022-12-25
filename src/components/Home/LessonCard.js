import { View, Text} from 'react-native'
import React from 'react'
import {  colors , LessonCardContainer } from '../Shared/styles'
import { Image } from 'native-base'

export default function LessonCard({item}) {
    const {image,name} = item.item
return (
    <LessonCardContainer style={{paddingTop:-30,backgroundColor:'#ccc',borderColor:colors.primary,borderWidth:1,elevation:10}}>
        <Image source={{uri:image}} alt={'Image'} style={{width:'100%',height:'100%',borderRadius:20,opacity:.8,resizeMode:'cover'}}/>
        <Text style={{color:colors.frost,fontFamily:'KanitL',fontSize:24,position:'absolute',fontWeight:'700',bottom:-1,left:0,backgroundColor:'rgba(61,92,255,0.8)',paddingHorizontal:20,borderTopRightRadius:20,borderBottomLeftRadius:20}}>{name}</Text>
    </LessonCardContainer>
  )
}
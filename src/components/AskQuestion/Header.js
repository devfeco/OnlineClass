import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components';
import {Ionicons} from '@expo/vector-icons'
import { colors } from '../Shared/styles'

export default function Header(props) {
  return (
    <HeaderContainer>
        <HeaderImage source={{uri:props.image}}/>
        <View style={{flexDirection:"row",alignItems:"center"}}>
          <Ionicons name='md-checkmark-circle-sharp' size={20} color={colors.green} style={{marginHorizontal:2}}/>
          <HeaderText style={{fontFamily:'KanitL'}}>Fotoğraf Yüklendi</HeaderText>
        </View>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.View`
  width:102%;
  height:10%;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
  border-width:1px;
  border-color:#ccc
`
const HeaderImage = styled.Image`
  height:85%;
  width:15%;
  resize-mode:cover;
  transform:rotate(270deg);
  border-radius:5px
`

const HeaderText = styled.Text`
  font-size:16px;
  letter-spacing:0.5px
`
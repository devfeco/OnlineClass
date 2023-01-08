import { View, Text , Image} from 'react-native'
import React from 'react'
import { StyledContainer } from '../components/Shared/styles'

export default function AskQuestion(props) {
  const {image} = props.route.params;
  return (
    <StyledContainer>
      <Image source={{uri:image}} style={{height:"50%",width:"100%",resizeMode:"contain",transform:[{rotate:"270deg"}]}}/>
    </StyledContainer>
  )
}
import { View, Text , Image} from 'react-native'
import React from 'react'
import { colors, StyledContainer } from '../components/Shared/styles'
import Header from '../components/AskQuestion/Header';
import QuestionForm from '../components/AskQuestion/QuestionForm';


export default function AskQuestion(props) {
  const {image} = props.route.params;
  return (
    <StyledContainer style={{alignItems:'center',paddingTop:20}}>
      <Header image={image}/>
      <QuestionForm navigation={props.navigation}/>
    </StyledContainer>
  )
}
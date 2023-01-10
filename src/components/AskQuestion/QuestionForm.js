import React from 'react'
import { StyledButton, StyledContainer , colors} from '../Shared/styles'
import { useState } from 'react'
import LessonActionSheet from './LessonActionSheet';
import AnswerRadioGroup from './AnswerRadioGroup';
import styled from 'styled-components';
import { useEffect } from 'react';

export default function QuestionForm({navigation}) {
  const [lesson,setLesson] = useState({id:'',name:''});
  const [answer,setAnswer] = useState({id:-1,answer:''});
  const [disabled,setDisabled] = useState(true);

  useEffect(()=>{
    if(answer.id!==-1 && lesson.id!=='')
      setDisabled(false);
    else
      setDisabled(true);
  },[answer,lesson]);

  return (
    <StyledContainer style={{width:"95%",alignItems:'center'}}>
      <LessonActionSheet setLesson={setLesson} lesson={lesson}/>
      <AnswerRadioGroup answer={answer} setAnswer={setAnswer}/>
      <StyledButton 
        disabled={disabled} 
        style={{backgroundColor:disabled ? colors.disable : colors.primary}}
        onPress={()=>navigation.navigate('BottomTab',{
          screen:'Home'
        })}>
        <ButtonText>Gönder</ButtonText>
      </StyledButton>
    </StyledContainer>
  )
}

const ButtonText = styled.Text`
  font-family:${'KanitL'};
  font-size:24px;
  color:${colors.white};
  letter-spacing:1px
`
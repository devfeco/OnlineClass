import React from 'react'
import { StyledContainer } from '../components/Shared/styles'
import LessonsRadioGroup from '../components/Search/LessonsRadioGroup'
import SearchField from '../components/Search/SearchField'
import KeyboardAvoidingWrapper from '../components/Shared/KeyboardAvodingWrapper'

export default function Search() {
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer style={{paddingTop:0}}>
          <SearchField/>
          <LessonsRadioGroup/>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  )
}
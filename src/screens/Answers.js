import { FlatList } from 'react-native'
import React from 'react'
import { StyledContainer , colors} from '../components/Shared/styles'
import styled from 'styled-components'
import dummyData from '../../assets/data/dummydata'
import QuestionCard from '../components/Shared/QuestionCard'

export default function Answers() {
  return (
    <StyledContainer style={{paddingTop:0}}>
      <Header>
        <HeaderTitle>
          Soru Kutusu 
        </HeaderTitle>
      </Header>
      <Body>
        <FlatList showsVerticalScrollIndicator={false} data={dummyData} renderItem={item => <QuestionCard/>}/>
      </Body>
    </StyledContainer>
  )
}

const Header = styled.View`
  height:8%;
  width:100%;
  justify-content:center;
  align-items:center;
  background-color:${colors.primary};
  border-bottom-right-radius:20px
  border-bottom-left-radius:20px
`

const HeaderTitle = styled.Text`
  color:${colors.white};
  font-size:30px;
  font-family:${'KanitL'}
`

const Body = styled.View`
  width:100%;
  height:84%;
`
import { View, Text ,Touchab} from 'react-native'
import React from 'react'
import { colors, InnerContainer, StyledContainer } from '../Shared/styles'
import styled from 'styled-components'

export default function LessonsRadioGroup() {
  return (
    <InnerContainer style={{marginVertical:50}}>
        <Header>
            <Title>Ders</Title>
        </Header>
        <Body>
            <RadioButton activeOpacity={0.9}>
                <ButtonText>Matematik</ButtonText>
            </RadioButton>
            <RadioButton activeOpacity={0.9}>
                <ButtonText>Fizik</ButtonText>
            </RadioButton>
            <RadioButton activeOpacity={0.9}>
                <ButtonText>Kimya</ButtonText>
            </RadioButton>
            <RadioButton activeOpacity={0.9}>
                <ButtonText>Biyoloji</ButtonText>
            </RadioButton>
        </Body>
    </InnerContainer>
  )
}

const RadioButton = styled.TouchableOpacity`
    height:60px;
    background-color:${colors.frost};
    justify-content:center;
    align-items:center;
    min-width:120px;
    border-radius:20px;
    elevation:5;
    margin:5px 8px;
`

const ButtonText = styled.Text`
    font-size:18px;
    font-family:${'KanitL'};
    letter-spacing:0.5px;
    color:${colors.tertiary}
`

const Body = styled.View`
    flex-direction:row;
    flex-wrap:wrap
`
const Header = styled.View`
    width:100%;
    height:30%;
    justify-content:center;
    align-items:flex-start;
    padding:10px;
`

const Title = styled.Text`
    font-size:24px;
    color:${colors.tertiary};
    letter-spacing:1px;
    font-family:${'KanitL'}
`
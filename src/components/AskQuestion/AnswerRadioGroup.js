import React from 'react'
import styled from 'styled-components'
import { StyledContainer , colors} from '../Shared/styles'

const answers = [
    {
        'id':1,
        'answer':'A'
    },
    {
        'id':2,
        'answer':'B'
    },
    {
        'id':3,
        'answer':'C'
    },
    {
        'id':4,
        'answer':'D'
    },
    {
        'id':5,
        'answer':'E'
    },
    {
        'id':6,
        'answer':'Bilinmiyor'
    },
]

export default function AnswerRadioGroup(props) {
    const {answer : selectedAnswer,setAnswer} = props;

    const toAnswerButton = (value,index) => {
        const StyledButton = value.id === selectedAnswer.id ? FocusedButton : Button
        return(
            <StyledButton key={index} item={value} setAnswer={setAnswer}/>
        );
    }
    return (
        <StyledContainer>
            <Header>
                <Title>Cevap</Title>
            </Header>
            <Body>
                {answers.map(toAnswerButton)}
            </Body>
        </StyledContainer>
    )
}

const Button = ({item,setAnswer}) => {
    return(
        <RadioButton activeOpacity={0.9} onPress={()=>setAnswer({id:item.id,answer:item.answer})}>
            <ButtonText>{item.answer}</ButtonText>
        </RadioButton>
    );
}

const FocusedButton = ({item,setAnswer}) => {
    return(
        <RadioButton activeOpacity={0.9} focused onPress={()=>setAnswer({id:item.id,answer:item.answer})}>
            <ButtonText focused>{item.answer}</ButtonText>
        </RadioButton>
    );
}

const Body = styled.View`
    flex:1;
    flex-direction:row;
    flex-wrap:wrap;
`

const Header = styled.View`
    width:100%;
    height:10%;
    justify-content:center;
    padding-left:10px
`

const Title = styled.Text`
    color:${colors.tertiary};
    font-size:24px;
    font-family:${'KanitL'};
    letter-spacing:1px
`

const RadioButton = styled.TouchableOpacity`
    height:50px;
    min-width:50px;
    width:auto;
    border-radius:10px;
    padding:10px;
    background-color:${props=>props.focused ? colors.primary : colors.frost};
    justify-content:center;
    align-items:center;
    margin:10px 12px;
    elevation:2
`

const ButtonText = styled.Text`
    color:${props=>props.focused ? colors.white : colors.tertiary};
    font-size:24px;
    font-family:${'KanitL'};
    letter-spacing:0.5px;
`
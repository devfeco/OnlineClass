import React , { useRef } from 'react'
import { ModalView , colors  , PageTitle , InfoText } from '../Shared/styles'
import {Ionicons} from "@expo/vector-icons"
import styled from 'styled-components'
import { Animated } from 'react-native'
import { useEffect } from 'react'
import { useState } from 'react'

export default function ModalContent({icon,message,title,buttonHandler,success}) {
    const [animValue,setAnimValue] = useState(new Animated.Value(0));
    const color = success ? 'rgba(16,185,129,0.9)' : 'rgba(239,68,68,0.9)';

    useEffect(()=>{
        Animated.timing(animValue,{
            toValue:1,
            duration:700,
            useNativeDriver:false,
        }).start();
    },[]);

    const slideAnim = animValue.interpolate({
        inputRange:[0,1],
        outputRange:["0%", "20%"],
    });

  return (
    <ModalView>
        <Animated.View style={[{height:'100%',borderTopLeftRadius:10,borderBottomLeftRadius:10,position:'absolute',left:0,width:slideAnim,backgroundColor:color}]}/>
        <IconContainer>
            <Ionicons name={icon} size={64} color={colors.white}/>
        </IconContainer>
        <Body>
            <PageTitle>{title}</PageTitle>
            <InfoText>{message}</InfoText>
        </Body>
        <Button activeOpacity={0.6} onPress={buttonHandler}>
            <ButtonText>{success ? 'Devam' : 'Kapat'}</ButtonText>
        </Button>
    </ModalView>
  )
}

const IconContainer = styled.View`
    height:100%;
    width:20%
    border-top-left-radius:10px
    border-bottom-left-radius:10px;
    justify-content:center;
    align-items:center;
    border-right-width:1px;
    border-color:${colors.disable};
`

const Body = styled.View`
    height:100%;
    width:60%;
`
const Button = styled.TouchableOpacity`
    height:100%;
    width:20%
    border-top-right-radius:10px;
    border-bottom-right-radius:10px;
    justify-content:center;
    align-items:center;
    border-left-width:1px;
    border-color:${colors.disable}
`

const ButtonText = styled.Text`
    font-size:24px;
    font-family:${'KanitL'}
    color:${colors.tertiary}
`



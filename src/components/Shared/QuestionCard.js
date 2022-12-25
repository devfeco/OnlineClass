import { View, Text} from 'react-native'
import React , {useState} from 'react'
import {colors, StyledContainer} from '../Shared/styles'
import { Center , Image} from 'native-base';
import Lottie from 'lottie-react-native';
import animation from '../../../assets/animations/loading.json';
import dummyMathImg from '../../../assets/images/dummyMath.jpg'
import styled from 'styled-components';

export default function QuestionCard(props) {
    const [isLoaded,setIsLoaded] = useState(false);
    setTimeout(()=>{
        setIsLoaded(true)
    },2500)
  return (
      <StyledContainer style={{alignItems:'center',marginVertical:10,paddingTop:-30}}>
        {
            isLoaded ||
            <InnerContainer>
              <Lottie source={animation} autoPlay loop/> 
            </InnerContainer>
        }
        {
          isLoaded &&
          <InnerContainer>
            <Image source={dummyMathImg} alt={'question image'} resizeMode={'stretch'} style={{borderRadius:20}}/>
            <TextContainer>
              <Text style={{fontSize:24,fontFamily:'KanitL',color:colors.white}}>Matematik</Text>
              <Text style={{fontSize:18,fontFamily:'KanitL',color:colors.white}}>İki Bilinmeyenli Denklem</Text>
            </TextContainer>
          </InnerContainer>
        }
      </StyledContainer>
  )
}

const InnerContainer = styled.View`
  width:97%;
  border-width:1px;
  border-color:${colors.primary};
  border-radius:21px;
  justify-content:center;
  align-items:center;
  height:200px
`

const TextContainer = styled.View`
  width:90%;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
  position:absolute;
  background-color:rgba(61,92,255,0.8);
  border-top-right-radius:20px;
  border-bottom-left-radius:20px;
  left:-1px;
  bottom:-1px;
`
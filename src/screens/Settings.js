import { View, Text , Image} from 'react-native'
import React from 'react'
import { colors, StyledContainer } from '../components/Shared/styles'
import styled from 'styled-components'
import {Ionicons} from '@expo/vector-icons'

export default function Settings(props) {
  const {navigate} = props.navigation;
  return (
    <StyledContainer style={{paddingTop:0}}>
      <Header>
          <Avatar source={{uri:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1671727351~exp=1671727951~hmac=61acb4b8286a6916c23e9b434e59cba976060bdd595ff65ee98db54c7a712b8e"}}/>
          <FullNameText>Feyzullah Ardahan</FullNameText>   
      </Header>
      <Body>

        <Button>
          <InnerButtonView>
            <Ionicons name='md-person-outline' size={20} color={colors.tertiary}/>
            <ButtonText>
              Hesap
            </ButtonText>
          </InnerButtonView>
          <Ionicons name='md-chevron-forward' size={20} color={colors.tertiary}/>
        </Button>

        <Button>
          <InnerButtonView>
            <Ionicons name='md-notifications-outline' size={20} color={colors.tertiary}/>
            <ButtonText>
              Bildirimler
            </ButtonText>
          </InnerButtonView>
          <Ionicons name='md-chevron-forward' size={20} color={colors.tertiary}/>
        </Button>

        <Button>
          <InnerButtonView>
            <Ionicons name='md-lock-closed-outline' size={20} color={colors.tertiary}/>
            <ButtonText>
              Gizlilik ve Güvenlik
            </ButtonText>
          </InnerButtonView>
          <Ionicons name='md-chevron-forward' size={20} color={colors.tertiary}/>
        </Button>

        <Button>
          <InnerButtonView>
            <Ionicons name='md-headset-outline' size={20} color={colors.tertiary}/>
            <ButtonText>
              Yardım ve Destek
            </ButtonText>
          </InnerButtonView>
          <Ionicons name='md-chevron-forward' size={20} color={colors.tertiary}/>
        </Button>

        <Button>
          <InnerButtonView>
            <Ionicons name='md-help-outline' size={20} color={colors.tertiary}/>
            <ButtonText>
              Hakkımızda
            </ButtonText>
          </InnerButtonView>
          <Ionicons name='md-chevron-forward' size={20} color={colors.tertiary}/>
        </Button>

        <Button onPress={()=>navigate('Onboarding')}>
          <InnerButtonView>
            <Ionicons name='md-log-out-outline' size={20} color={colors.red}/>
            <ButtonText secondary>
              Çıkış Yap
            </ButtonText>
          </InnerButtonView>
          <Ionicons name='md-chevron-forward' size={20} color={colors.red}/>
        </Button>
      </Body>
    </StyledContainer>
  )
}

const Header = styled.View`
  height:30%;
  width:100%;
  justify-content:center;
  align-items:center;
  background-color:${colors.primary};
  border-bottom-right-radius:20px
  border-bottom-left-radius:20px
`

const Avatar = styled.Image`
  border-radius:100px;
  width:100px;
  height:100px
  border-width:1px;
  border-color:${colors.white};
  margin:5px 0px;
`

const FullNameText = styled.Text`
  color:${colors.white};
  font-size:26px;
  letter-spacing:1px;
  font-family:${'KanitL'}
`

const Body = styled.View`
  width:100%;
  height:70%;
`

const Button = styled.TouchableOpacity`
  width:100%;
  height:10%;
  align-items:center;
  padding:0px 10px;
  flex-direction:row;
  justify-content:space-between;
`

const InnerButtonView = styled.View`
  height:100%;
  width:90%;
  flex-direction:row;
  align-items:center
`

const ButtonText = styled.Text`
  font-size:18px
  letter-spacing:1px
  color:${props => props.secondary ? colors.red : colors.tertiary}
  font-family:${'KanitL'}
  margin:0px 10px
`
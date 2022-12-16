import { View, Text , Modal} from 'react-native'
import React from 'react'
import { StyledContainer , ModalContainer , ModalView , colors , StyledButton , PageTitle , InfoText } from '../Shared/styles'
import {Ionicons} from "@expo/vector-icons"

export default function VerificationModal({
  modalVisible,
  setModalVisible,
  successfull,
  requestMessage,
  persistLoginAfterOTPVerification
}) {

  const buttonHandler = () => {
    if(successfull)
      persistLoginAfterOTPVerification();
    setModalVisible(false);
  }

  return (
    <Modal animationType='slide' visible={modalVisible} transparent={true} >
      <ModalContainer>
        {!successfull && 
          <FailedContent 
          errorMsg={requestMessage}
          buttonHandler={buttonHandler}/>
        }
        {successfull && 
          <SuccessContent
          buttonHandler={buttonHandler}/>
        }
      </ModalContainer>
    </Modal>
  )
}

const SuccessContent = ({buttonHandler}) => {
  return(
    <ModalView>
      <Ionicons name='checkmark-circle' size={100} color={colors.green}/>
      <PageTitle 
        style={{fontSize:25,marginBottom:5}}>
          Doğrulandı!
        </PageTitle>
        <InfoText style={{marginBottom:5}}>
          Tebrikler,Hesabını başarıyla doğruladın
        </InfoText>
        <StyledButton style={{backgroundColor:colors.green,flexDirection:"row"}} onPress={buttonHandler}>
          <Text style={{color:colors.white,fontSize:20}}>Devam Et </Text>
          <Ionicons name='arrow-forward-circle' size={25} color={colors.white}/>
        </StyledButton>
    </ModalView>
  );
}

const FailedContent = ({errorMsg,buttonHandler}) => {
  return(
    <ModalView>
      <Ionicons name='close-circle' size={100} color={colors.red}/>
      <PageTitle 
        style={{fontSize:25,marginBottom:5}}>
          Hata!
        </PageTitle>
        <InfoText style={{marginBottom:5}}>
          {`Oops,Doğrulama başarısız.${errorMsg}`}
        </InfoText>
        <StyledButton style={{backgroundColor:colors.red,flexDirection:"row"}} onPress={buttonHandler}>
          <Text style={{color:colors.white,fontSize:20}}>Tekrar Dene </Text>
          <Ionicons name='arrow-redo-circle' size={25} color={colors.white}/>
        </StyledButton>
    </ModalView>
  );
}
import {Modal} from 'react-native'
import React from 'react'
import ModalContent from '../Shared/ModalContent';
import { ModalContainer } from '../Shared/styles'
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
          <ModalContent 
            message={`Opps,Doğrulama başarısız! ${requestMessage}`}
            buttonHandler={buttonHandler}
            title={'Hata!'}
            icon={'md-close-circle-outline'}
          />
        }
        {successfull && 
          <ModalContent
            message={'Tebrikler,Hesabını başarıyla doğruladın'}
            buttonHandler={buttonHandler}
            title={'Doğrulandı!'}
            icon={'md-checkmark-circle-outline'}
            success
          />
        }
      </ModalContainer>
    </Modal>
  )
}
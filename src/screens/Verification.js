import { SafeAreaView, Text, View , StyleSheet , Dimensions , ActivityIndicator} from 'react-native'
import React ,{ useState } from 'react'
import KeyboardAvoidindWrapper from '../components/Shared/KeyboardAvodingWrapper'
import { StyledContainer , TopHalf , BottomHalf , colors, StyledButton} from '../components/Shared/styles'
import CodeInputField from '../components/Verification/CodeInputField';
import Button from '../components/Shared/Button'
import VerificationModal from '../components/Verification/VerificationModal';
import {VerifyCode} from '../managers/AuthenticationManager'

export default function Verification({navigation,route:{params:{phoneNumber}}}) {
  const [code,setCode] = useState('');
  const [pinReady,setPinReady] = useState(false);
  const [isSubmitting,setIsSubmitting] = useState(false);
  const MAX_CODE_LENGTH = 4;

  //Modal
  const [modalVisible,setModalVisible] = useState(false);
  const [verificationSuccessfull,setVerificationSuccessfull] = useState(false);
  const [requestMessage,setrequestMessage] = useState('');

  const verifyCode = async (code) => {
    try{
      await VerifyCode(code);
      setModalVisible(true);
      setVerificationSuccessfull(true);
    }catch(e){
      setModalVisible(true);
      setVerificationSuccessfull(false);
      setrequestMessage("");
    }finally{
      setIsSubmitting(false);
    }
  } 
  
  const persistLoginAfterOTPVerification = async () => {
    if (code === '1234' && verificationSuccessfull) {
      navigation.navigate('CreateAnAccount');
    }
    else if (code === '1111' && verificationSuccessfull) {
      navigation.navigate('Home');
    }
  }

  return (
    <KeyboardAvoidindWrapper>
      <StyledContainer style={{alignItems:'center'}}>
        <TopHalf style={{flexDirection:'row'}}>
          <Text style={styles.text}>Telefonunuza gönderdiğimiz </Text>
          <Text style={[styles.text,{fontWeight:"700"}]}>4 haneli </Text>
          <Text style={styles.text}>doğrulama kodunu girin</Text>
        </TopHalf>
        <BottomHalf style={{flexDirection:'row'}}>
          <CodeInputField
            setPinReady={setPinReady}
            code={code}
            setCode={setCode}
            maxLength={MAX_CODE_LENGTH}
          /> 
        </BottomHalf>
        <StyledButton
          onPress={()=>{
            setIsSubmitting(true);
            verifyCode(code)
          }}
          style={{backgroundColor:code.length<4 || isSubmitting ? colors.disable : colors.primary,flexDirection:"row"}}
          width={Dimensions.get('window').width*0.9}
          disabled={code.length<4 || isSubmitting ? true : false}
        >
          {isSubmitting && <ActivityIndicator size={"large"} color={colors.white}/>}
          {!isSubmitting && <Text style={{color:colors.white,fontFamily:"KanitL",letterSpacing:1,fontSize:24}}>Onayla ve Devam Et</Text>}
        </StyledButton>
          <VerificationModal 
            successfull={verificationSuccessfull}
            setModalVisible={setModalVisible}
            modalVisible={modalVisible}
            requestMessage={requestMessage}
            persistLoginAfterOTPVerification={persistLoginAfterOTPVerification}/>
      </StyledContainer>
    </KeyboardAvoidindWrapper>
  )
}
const styles = StyleSheet.create({
  text:{
    fontFamily:'KanitL',
    fontSize:22
  }
})
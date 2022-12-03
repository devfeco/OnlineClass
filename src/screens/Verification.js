import { SafeAreaView, Text, View , StyleSheet} from 'react-native'
import React ,{ useState } from 'react'
import KeyboardAvoidindWrapper from '../components/Shared/KeyboardAvodingWrapper'
import { StyledContainer , colors} from '../components/Shared/styles'
import { TopHalf , BottomHalf } from '../components/Verification/index'
import CodeInputField from '../components/Verification/CodeInputField';
import Button from '../components/Shared/Button'
import { Dimensions } from 'react-native'

export default function Verification({navigation,route:{params:{phoneNumber}}}) {
  const [code,setCode] = useState('');
  const [pinReady,setPinReady] = useState(false);
  const MAX_CODE_LENGTH = 4;

  const verifyCode = () => {
    if (code === '1234') {
      navigation.navigate('CreateAnAccount');
    }
    else if (code === '1111') {
      navigation.navigate('Home');
    }
    else{
      alert('Yanlis kod girdiniz!');
    }
  } 

  return (
    <KeyboardAvoidindWrapper>
      <StyledContainer style={{alignItems:'center'}}>
        <TopHalf>
          <Text style={styles.text}>Telefonunuza gönderdiğimiz </Text>
          <Text style={[styles.text,{fontWeight:"700"}]}>4 haneli </Text>
          <Text style={styles.text}>doğrulama kodunu girin</Text>
        </TopHalf>
        <BottomHalf>
          <CodeInputField
            setPinReady={setPinReady}
            code={code}
            setCode={setCode}
            maxLength={MAX_CODE_LENGTH}
          /> 
        </BottomHalf>
        <Button
            title={'Onayla ve Devam Et'}
            onPress={verifyCode}
            backgroundColor={code.length<4 ? colors.disable : colors.primary}
            tintColor={colors.white}
            width={Dimensions.get('window').width*0.9}
            fontFamily={'KanitL'}
            fontSize={24}
            disabled={code.length<4 ? true : false}
          />
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
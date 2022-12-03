import { StyleSheet, Text, View , Image , ScrollView} from 'react-native'
import React from 'react'
import AuthForm from '../components/Authentication/AuthForm'
import TextButton from '../components/Shared/TextButton'
import { colors, StyledContainer } from '../components/Shared/styles'
import KeyboardAvodingWrapper from '../components/Shared/KeyboardAvodingWrapper'
import { Dimensions } from 'react-native'

export default function Authentication(props) {
  return (
    <KeyboardAvodingWrapper>
        <StyledContainer>
          <View style={styles.header}>
            <Image source={require('../../assets/images/phone.png')}/>
          </View>
          <View style={styles.body}>
            <AuthForm navigation={props.navigation}/>
          </View>
          <View style={styles.footer}>
            <Text style={{fontSize:13}}>Devam ederek Aydınlatma Metni ve Gizlilik Sözleşmesini içeren </Text>
            <TextButton title={'Kullanıcı Sözleşmesi'} fontSize={13}/>
            <Text style={{fontSize:13}}> belgemizi okuduğunuzu kabul etmektesiniz.</Text>
          </View>
        </StyledContainer>
    </KeyboardAvodingWrapper>
  )
}
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
    header:{
      height:height*0.2,
      justifyContent:'flex-end',
      alignItems:"center",
      top:0,
    },
    body:{
      height:height*0.72,
    },
    footer:{
      bottom:0,
      width:"100%",
      height:40,
      flexDirection:"row",
      flexWrap:"wrap",
      justifyContent:"center",
      alignItems:"flex-end",
      borderTopWidth:.3,
      borderTopColor:"#dedede"
    },
})
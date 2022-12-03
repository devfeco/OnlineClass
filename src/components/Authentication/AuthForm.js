import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'
import authValidation from '../../Validations/authValidation'
import PhoneInput from './PhoneInput'
import Button from '../Shared/Button'
import { Dimensions } from 'react-native'
import {colors} from '../Shared/styles'

export default function AuthForm(props) {
    const [isFocused,setFocused] = useState(false)

    const {navigation} = props;

    const _handleSubmit = (values) => {
        const {phoneNumber} = values;
        navigation.navigate('Verification',{
            phoneNumber:'+90'+phoneNumber
        });
    }

  return (
    <View style={styles.container} >
        <Text style={{fontSize:26,textAlign:"center"}}>Telefon numaranızı giriniz</Text>
        <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginBottom:20}}>
            <Text style={{fontSize:14,color:colors.grey}}>Size </Text>
            <Text style={{fontSize:14,fontWeight:"700",color:colors.grey}}>4 haneli</Text>
            <Text style={{fontSize:14,color:colors.grey}}> doğrulama kodu göndereceğiz</Text>
        </View>
        <Formik initialValues={{
            phoneNumber:''
        }}
        onSubmit={_handleSubmit}
        validationSchema={authValidation}
        >
            {
             ({
                errors,
                values,
                handleSubmit,
                handleChange,
                touched,
                setFieldTouched,
                isValid,
                isSubmitting
             })=>(
                <View style={styles.form}>
                    <PhoneInput 
                        fontFamily={'KanitL'}
                        onChangeText={handleChange('phoneNumber')}
                        value={values.phoneNumber}
                        onBlur={()=>{
                            setFocused(false)
                            setFieldTouched('phoneNumber')
                        }}
                        onFocus={()=>setFocused(true)}
                        borderColor={isFocused ? colors.primary : '#ccc'}
                        />
                        <View style={{marginVertical:20}}/>
                    <Button
                        title={'Devam Et'}
                        onPress={handleSubmit}
                        backgroundColor={values.phoneNumber.length<10 ? colors.disable : colors.primary}
                        tintColor={colors.white}
                        width={Dimensions.get('window').width*0.9}
                        fontFamily={'KanitL'}
                        fontSize={24}
                        disabled={values.phoneNumber.length<10 ? true : false}
                    />
                </View>
             )
            }
        </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        justifyContent:"center",
    },
    form:{
        flex:.5,
        alignItems:"center",
        justifyContent:"space-between",
    }
})
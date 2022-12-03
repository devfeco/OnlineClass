import { KeyboardAvoidingView , ScrollView , TouchableWithoutFeedback , Keyboard } from 'react-native'
import React from 'react'
import {colors} from '../Shared/styles'

export default function KeyboardAvodingWrapper({children}) {
  return (
    <KeyboardAvoidingView style={{flex:1,backgroundColor:colors.white}}>
        <ScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                {children}
            </TouchableWithoutFeedback>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}
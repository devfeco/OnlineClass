import React, { useState } from 'react'
import {InnerContainer,PlaceHolder,TextInput,InputContainer} from '../Shared/styles';

export default function Input(props) {
    return (
        <InnerContainer style={{alignItems:'center'}}>
            <InputContainer style={{borderColor:props.borderColor}}>
                <PlaceHolder style={{fontFamily:'KanitL'}}>Ad Soyad</PlaceHolder>
                <TextInput 
                    {...props}
                    style={{fontFamily:'KanitL'}}
                />
            </InputContainer>
        </InnerContainer>
    )
}
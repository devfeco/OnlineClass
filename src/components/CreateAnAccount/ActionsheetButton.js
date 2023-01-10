import React, { useState } from 'react'
import {InnerContainer,InputContainer,ActionSheetButton as ActionButton,ButtonText,PlaceHolder} from '../Shared/styles';

export default function ActionSheetButton(props) {
    return (
        <InnerContainer style={{alignItems:'center'}}>
            <InputContainer>
            <PlaceHolder style={{fontFamily:'KanitL'}}>Sınıf</PlaceHolder>
                <ActionButton {...props}>
                    <ButtonText style={{fontFamily:'KanitL'}}>{props.selectedGrade}</ButtonText>
                </ActionButton>
            </InputContainer>
        </InnerContainer>
    )
}
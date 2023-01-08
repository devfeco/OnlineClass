import { StyleSheet, Text, View } from 'react-native'
import React , {useRef , useEffect} from 'react';
import { CodeInputSection , HiddenTextInput , CodeInputsContainer , CodeInput , CodeInputFocused, colors} from '../Shared/styles';
import { useState } from 'react';

export default function CodeInputField({setPinReady,code,setCode,maxLength}) {
    const codeDigitsArray = new Array(maxLength).fill(0);

    const textInputRef = useRef(null);

    const [inputContainerIsFocused,setInputContainerIsFocused] = useState(false);

    const handleOnBlur = () => {
        setInputContainerIsFocused(false);
    }

    const handleOnPress = () => {
        setInputContainerIsFocused(true);
        textInputRef?.current?.focus();
    }

    useEffect(()=>{
        setPinReady(code.length === maxLength);
        return () => setPinReady(false)
    },[code]);

    const toCodeDigitInput = (_value,index) => {
        const emptyInputChar = ' ';
        const digit = code[index] || emptyInputChar;
        const isCurrentDigit = index === code.length;
        const isLastDigit = index === maxLength - 1;
        const isCodeFull = code.length === maxLength;
        const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeFull);
        const StyledCodeInput = inputContainerIsFocused && isDigitFocused ? CodeInputFocused : CodeInput
        return(
            <StyledCodeInput key={index}>
                <Text style={{fontFamily:"KanitL",fontSize:48,textAlign:"center",color:colors.tertiary}}>{digit}</Text>
            </StyledCodeInput>
        )
    }

  return (
    <CodeInputSection>
        <CodeInputsContainer onPress={handleOnPress}>
            {codeDigitsArray.map(toCodeDigitInput)}
        </CodeInputsContainer>
        <HiddenTextInput
            ref={textInputRef}
            value={code}
            onChangeText={setCode}
            onSubmitEditing={handleOnBlur}
            keyboardType='number-pad'
            returnKeyType='done'
            textContentType='oneTimeCode'
            maxLength={maxLength}
        />
    </CodeInputSection>
  )
}
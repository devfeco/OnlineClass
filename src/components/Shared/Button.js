import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import { StyledButton } from './styles'
export default function Button(props) {

  return (
    <StyledButton onPress={props.onPress} {...props} style={{backgroundColor:props.backgroundColor}}>
        <Text style={[{color:props.tintColor,fontFamily:props.fontFamily,letterSpacing:1,fontSize:props.fontSize}]}>{props.title}</Text>
    </StyledButton>
  )
}

const styles = StyleSheet.create({
    container:{
        width:'auto',
        height:60,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
    }
})
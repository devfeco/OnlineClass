import { StyleSheet, Text, View , TextInput , Image} from 'react-native'
import React, { useState } from 'react'
import {colors,InnerContainer,StyledContainer} from '../Shared/styles';

export default function Input(props) {
    return (
        <InnerContainer style={{alignItems:'center'}}>
        <Text style={{position:'absolute',backgroundColor:"white",top:50,left:30,zIndex:10,textAlign:"center",paddingHorizontal:2,color:'#454545'}}>{props.title}</Text>
            <View style={[styles.container,{borderColor:props.borderColor}]}>
            <TextInput 
                style={styles.input}
                {...props}
            />
            </View>
        </InnerContainer>
    )
}

const styles = StyleSheet.create({
    container:{
        width:"90%",
        height:50,
        borderRadius:10,
        borderWidth:1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    input:{
        width:"95%",
        height:"100%",
        fontSize:18,
        marginHorizontal:5,
    }
})
import { StyleSheet, Text, View , TextInput , TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import {colors,InnerContainer,StyledContainer} from '../Shared/styles';

export default function Input(props) {
    return (
        <InnerContainer style={{alignItems:'center'}}>
        <Text style={{position:'absolute',backgroundColor:"white",top:50,left:30,zIndex:10,textAlign:"center",paddingHorizontal:2,color:'#454545'}}>{props.title}</Text>
            <View style={[styles.container,{borderColor:props.borderColor}]}>
                <TouchableOpacity {...props} style={styles.button}>
                    <Text style={{fontSize:18,fontFamily:props.fontFamily}}>{props.selectedGrade}</Text>
                </TouchableOpacity>
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
    button:{
        width:"95%",
        height:"100%",
        marginHorizontal:5,
        justifyContent:'center'
    }
})
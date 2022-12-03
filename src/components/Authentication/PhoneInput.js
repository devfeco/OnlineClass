import { StyleSheet, Text, View , TextInput , Image} from 'react-native'
import React, { useState } from 'react'
import {colors} from '../Shared/styles';

export default function PhoneInput(props) {
    return (
        <>
        <Text style={{position:'absolute',backgroundColor:"white",top:-10,left:42,zIndex:10,width:50,textAlign:"center"}}>Mobil</Text>
            <View style={[styles.container,{borderColor:props.borderColor}]}>
            <Text style={[{fontSize:18,color:colors.grey,marginHorizontal:5}]}>+90</Text>
            <View style={styles.seperator}/>
            <TextInput 
                style={styles.input}
                keyboardType={'number-pad'}
                {...props}
            />
            </View>
        </>
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
    countryCode:{
        width:"12%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal:5
    },
    seperator:{
        backgroundColor:"#c2c2c2",
        width:2,
        height:"60%",
        marginVertical:10
    },
    input:{
        width:"83%",
        height:"100%",
        fontSize:18,
        marginHorizontal:5,
    }
})
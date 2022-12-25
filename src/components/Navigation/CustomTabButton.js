import { View, Text , TouchableOpacity , Image, Dimensions} from 'react-native'
import React from 'react'
import img from '../../../assets/images/OCB.png';
import { colors } from '../Shared/styles';

export default function CustomTabButton(props) {
    const {height,width} = Dimensions.get("window");
  return (
    <TouchableOpacity onPress={()=>props.onPress()} style={{justifyContent:'center',alignItems:'center',backgroundColor:'transparent',bottom:10}}>
      <Image source={img} style={{height:70,width:70,borderRadius:80,resizeMode:'contain',borderWidth:2,borderColor:colors.white}}/>
    </TouchableOpacity>
  )
}
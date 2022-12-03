import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

export default function BackButton(props) {
  const navigation = useNavigation();
   
  const goBack = () => {
    const {canGoBack} = props;
    if(canGoBack)
      navigation.goBack();
  }
  return (
    <TouchableOpacity onPress={goBack} style={styles.button}>
      <Ionicons name="chevron-back" size={36} color="black" />
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  button:{
    backgroundColor:"transparent"
  }
})
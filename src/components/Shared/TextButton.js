import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import { colors } from './styles'

export default function TextButton({title,onPress,fontSize}) {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
            <Text style={[{fontSize},{color:colors.primary}]}>{title}</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({

})
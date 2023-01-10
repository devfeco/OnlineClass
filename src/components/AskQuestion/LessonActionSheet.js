import { Text } from 'react-native'
import React from 'react'
import { Actionsheet , useDisclose , Box} from 'native-base'
import lessons from '../../../assets/data/lessons'
import { InnerContainer , InputContainer , ActionSheetButton , ButtonText , PlaceHolder } from '../Shared/styles'

export default function LessonActionSheet(props) {
  const {isOpen,onOpen,onClose} = useDisclose();
  const {setLesson , lesson} = props;

  const ListItem = ({item}) => {
    return(
        <Actionsheet.Item onTouchEnd={onClose} key={item.id} onPress={()=>setLesson({id:item.id,name:item.name})}>{item.name}</Actionsheet.Item>
    )
  }

  return (
    <>
    <InnerContainer>
      <InputContainer>
        <PlaceHolder style={{fontFamily:'KanitL'}}>Ders</PlaceHolder>
        <ActionSheetButton onPress={onOpen}>
            <ButtonText style={{fontFamily:'KanitL'}}>{lesson.name === '' ? 'Ders Seçin' : lesson.name}</ButtonText>
        </ActionSheetButton>
      </InputContainer>
    </InnerContainer>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content >
            <Box w='100%' h={60} px={4} justifyContent={'center'}>
                <Text style={{fontFamily:'KanitL',fontSize:18,color:'#ccc'}}>
                    Ders Seçin
                </Text>
            </Box>
            {lessons.map(item=><ListItem key={item.id} item={item} onClose={onClose}/>)}
        </Actionsheet.Content>
      </Actionsheet>
      </>
  )
}
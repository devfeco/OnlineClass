import { View, Text, Alert , ActivityIndicator, Modal , TouchableOpacity} from 'react-native'
import React , {useState , useEffect} from 'react'
import KeyboardAvodingWrapper from '../components/Shared/KeyboardAvodingWrapper'
import { StyledContainer , TopHalf , BottomHalf , colors, StyledButton, ModalContainer, ModalView} from '../components/Shared/styles'
import Input from '../components/CreateAnAccount/Input'
import ActionSheetButton from '../components/CreateAnAccount/ActionsheetButton'
import { Actionsheet , useDisclose , Box} from 'native-base'
import grades from '../../assets/data/grades'
import { Register } from '../managers/AuthenticationManager'
import {Ionicons} from '@expo/vector-icons'

export default function CreateAnAccount(props) {
    const [isFocused,setFocused] = useState(false);
    const [fullname,setFullname] = useState("");
    const {isOpen,onOpen,onClose} = useDisclose();
    const [selectedGrade,setGrade] = useState(null);
    const [buttonActivity,setButtonActivity] = useState(false);
    const [isSubmitting,setIsSubmitting] = useState(false);
    const [modalVisible,setModalVisible] = useState(false);

    const {navigation} = props;

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try{
            await Register({fullname,selectedGrade});
            setModalVisible(true);
        }catch(e){
            Alert("Hatalı giriş");
        }
        finally{
            setIsSubmitting(false);
        }
    }

    const goToHome = () => {
        setModalVisible(false);
        navigation.navigate("BottomTab");
    }

    useEffect(()=>{
        if(selectedGrade && fullname.length < 30 && fullname.length > 5 && fullname.includes(" ") && !isSubmitting){
            setButtonActivity(true);
        }
        else{
            setButtonActivity(false);
        }
    },[selectedGrade,fullname,isSubmitting]);

    const ListItem = ({id,title,onClose}) => {
        return(
            <Actionsheet.Item onTouchEnd={onClose} key={id} onPress={()=>setGrade(id)}>{title}</Actionsheet.Item>
        )
    }

  return (
    <KeyboardAvodingWrapper>
        <StyledContainer style={{alignItems:'center'}}>
            <TopHalf style={{flexDirection:'row'}}>
                <Text style={{fontFamily:'KanitL',fontSize:22,textAlign:'center'}}>Hesabınızı oluşturabilmemiz için aşağıdaki bilgileri doldurun</Text>
            </TopHalf>
            <BottomHalf style={{alignItems:'center'}}>
            <Input 
                fontFamily={'KanitL'}
                onChangeText={text=>setFullname(text)}
                value={fullname}
                onBlur={()=>{
                    setFocused(false)
                }}
                onFocus={()=>setFocused(true)}
                borderColor={isFocused ? colors.primary : '#ccc'}
                title={"Ad Soyad"}
                />
                <ActionSheetButton
                    title={'Sınıf'}
                    borderColor={'#ccc'}
                    fontFamily={'KanitL'}
                    onPress={onOpen}
                    selectedGrade={selectedGrade ? `${selectedGrade}.Sınıf` : "Sınıf Seçin"}
                />
                <StyledButton onPress={handleSubmit} disabled={!buttonActivity} style={{backgroundColor:buttonActivity ? colors.primary : '#ccc'}}>
                    {isSubmitting && <ActivityIndicator size={"large"} color={colors.white}/>}
                    {!isSubmitting && <Text style={{fontFamily:'KanitL',fontSize:22,color:colors.white}}>Kaydol</Text>}
                </StyledButton>
            </BottomHalf>
            <Actionsheet isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content >
                    <Box w='100%' h={60} px={4} justifyContent={'center'}>
                        <Text style={{fontFamily:'KanitL',fontSize:18,color:'#ccc'}}>
                            Sınıf Seçin
                        </Text>
                    </Box>
                    {grades.map(item=><ListItem key={item.id} id={item.id} title={item.title} onClose={onClose}/>)}
                </Actionsheet.Content>
            </Actionsheet>
            <SuccessAlert modalVisible={modalVisible} onPress={goToHome}/>
        </StyledContainer>
    </KeyboardAvodingWrapper>
  )
}

const SuccessAlert = ({modalVisible,onPress}) => {
    return(
        <Modal animationType='slide' visible={modalVisible} transparent={true}>
            <ModalContainer style={{backgroundColor:'rgba(0,0,0,0.2)'}}>
                <ModalView style={{backgroundColor:'rgba(234,240,240,0.95)'}}>
                    <Ionicons name='md-checkmark-circle' size={112} color={colors.green}/>
                    <Text style={{fontFamily:'KanitL',fontSize:21,color:colors.tertiary}}>Hesabınız Başarıyla Oluşturuldu</Text>
                    <StyledButton onPress={onPress} style={{backgroundColor:colors.green}}>
                        <Text style={{color:colors.white,fontFamily:'KanitL',letterSpacing:1,fontSize:24}}>Devam Et</Text>
                    </StyledButton>
                </ModalView>
            </ModalContainer>
        </Modal>
    );
}

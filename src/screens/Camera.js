import { Dimensions,View,Image, BackHandler} from 'react-native';
import { Camera as Cam , CameraType, FlashMode } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { useState , useEffect, useRef} from 'react';
import {colors, StyledContainer} from '../components/Shared/styles';
import styled from 'styled-components';
import buttonImage from '../../assets/images/OCB.png'
import {Ionicons} from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';
import { useIsFocused } from '@react-navigation/native';
import { manipulateAsync , FlipType , SaveFormat } from 'expo-image-manipulator';

const {height,width} = Dimensions.get("window")

export default function Camera(props) {
  const [hasCameraPermission,setCameraPermission] = useState(null);
  const [image,setImage] = useState(null);
  const [type,setType] = useState(Cam.Constants.Type.back);
  const [flash,setFlash] = useState(Cam.Constants.FlashMode.off);
  const cameraRef = useRef();
  const isFocused = useIsFocused();

  useEffect(()=>{
    BackHandler.addEventListener('hardwareBackPress',backAction);
    return () => BackHandler.removeEventListener('hardwareBackPress',backAction);
  },[]);

  const backAction = () => {
    setImage(null);
    props.navigation.goBack();
    return true
  }

  const toggleFlashMode = () => {
    setFlash(flash === Cam.Constants.FlashMode.off ? Cam.Constants.FlashMode.on : Cam.Constants.FlashMode.off);
  }

  const pickPicture = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.Images,
      allowsEditing:true,
      aspect:[16,9],
      quality:1
    });
    if(!result.canceled){
      setImage(result.assets[0].uri);
    }
  }

  const takePicture = async () => {
    if(cameraRef){
      try {
        const result = await cameraRef.current.takePictureAsync();
        setImage(result.uri);
        const manipResult = await manipulateAsync(
          image,
          [
            {rotate:270},
            {
              flip:FlipType.Vertical
            }
          ],
          {compress:1,format:SaveFormat.PNG}
        );
        setImage(manipResult);
      } catch (err) {
        console.log(err);
      }
    }
  }

  const saveImage = () => {
    props.navigation.navigate('AskQuestion',{
      image
    });
    setImage(null);
  }

  useEffect(()=>{
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Cam.requestCameraPermissionsAsync();
      setCameraPermission(cameraStatus.status==='granted')
    })();
  },[]);

  return (
    <StyledContainer style={{justifyContent:'center',paddingTop:-30,backgroundColor:'black'}}>
      {
        !image ?
        <>
          {
            isFocused && hasCameraPermission &&
              <Cam
              style={{borderRadius:20,position:'absolute',top:0,left:0,width:'100%',height:'100%'}}
              type={type}
              flashMode={flash}
              ref={cameraRef}
              ratio={'16:9'}
              skipProcessing={true}
              >
              </Cam>
          }
          <ButtonContainer>
            <ButtonGroup>
              <IconButton onPress={()=>props.navigation.goBack()}>
                  <Ionicons name='md-close-outline' size={36} color={colors.frost}/>
              </IconButton>
            </ButtonGroup>
            <ButtonGroup>
              <IconButton onPress={pickPicture}>
                <Ionicons name='md-image-outline' size={36} color={colors.frost}/> 
              </IconButton>
              <ShotButton onPress={takePicture}>
                <ButtonImage source={buttonImage} resizeMode={"contain"}/>
              </ShotButton>
              <IconButton onPress={()=>toggleFlashMode()}>
                <Ionicons name={flash ? 'md-flash-outline' : 'md-flash-off-outline'} size={36} color={colors.frost}/>
              </IconButton>
            </ButtonGroup>
          </ButtonContainer>
        </>
      :
      <>
        <Image source={{uri:image}} 
              style={{borderRadius:20,position:'absolute',top:0,left:0,width:'100%',height:'100%'}}
        />
        <ButtonContainer style={{justifyContent:"flex-end"}}>
          <ButtonGroup style={{justifyContent:"space-around"}}>
              <IconButton onPress={()=>setImage(null)}>
                <Ionicons name={'md-repeat-outline'} size={36} color={colors.frost}/>
              </IconButton>
              <IconButton onPress={saveImage}>
                <Ionicons name='md-arrow-redo-outline' size={36} color={colors.frost}/> 
              </IconButton>
            </ButtonGroup>
        </ButtonContainer>
      </>
      }
    </StyledContainer>
  );
}
const ButtonContainer = styled.View`
  flex:1;
  justify-content:space-between;
  align-items:center;
  flex-direction:column;
  padding:0px 0px 10px 0px;
`

const ShotButton = styled.TouchableOpacity`
  background-color:transparent;
  height:90px;
  width:90px;
  border-radius:80px;
  justify-content:center;
  align-items:center;
  border-width:2px;
  border-color:white
`

const ButtonImage = styled.Image`
  height:80px;
  width:80px;
  border-radius:80px;
`

const IconButton = styled.TouchableOpacity`
height:80px;
width:80px;
border-radius:80px;
justify-content:center;
align-items:center;
`

const ButtonGroup = styled.View`
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  width:100%
`

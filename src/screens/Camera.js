import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Camera as Cam , CameraType, FlashMode } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { useState , useEffect, useRef} from 'react';
import {colors, StyledContainer} from '../components/Shared/styles';
import styled from 'styled-components';
import buttonImage from '../../assets/images/OCB.png'
import {Ionicons} from '@expo/vector-icons'

const {height,width} = Dimensions.get("window")

export default function Camera() {
  const [hasCameraPermission,setCameraPermission] = useState(null);
  const [image,setImage] = useState(null);
  const [type,setType] = useState(Cam.Constants.Type.back);
  const [flash,setFlash] = useState(Cam.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  const toggleFlashMode = () => {
    setFlash(current => current === Cam.Constants.FlashMode.off ? Cam.Constants.FlashMode.on : Cam.Constants.FlashMode.off);
  }

  useEffect(()=>{
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Cam.requestCameraPermissionsAsync();
      setCameraPermission(cameraStatus.status==='granted')
    })();
  },[]);
  return (
    <StyledContainer style={{justifyContent:'center',paddingTop:-30}}>
      <Cam
        style={{flex:1,borderRadius:20}}
        type={type}
        flash={flash}
        ref={cameraRef}
      >
      </Cam>
      <ButtonContainer>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
          <IconButton style={{left:-70}}>
            <Ionicons name='md-image-outline' size={36} color={colors.white}/> 
          </IconButton>
          <ShotButton>
            <ButtonImage source={buttonImage} resizeMode={"contain"}/>
          </ShotButton>
          <IconButton style={{right:-70}} onPress={toggleFlashMode}>
            <Ionicons name={flash ? 'md-flash-outline' : 'md-flash-off-outline'} size={36} color={colors.white}/>
          </IconButton>
        </View>
      </ButtonContainer>
    </StyledContainer>
  );
}
const ButtonContainer = styled.View`
  width:100%;
  position:absolute;
  bottom:0px;
  left:0px;
  justify-content:center;
  align-items:center;
  bottom:10px;
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

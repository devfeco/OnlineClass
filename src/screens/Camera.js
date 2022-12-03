import { StyleSheet, Text, View } from 'react-native';
import { Camera as Cam , CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { useState , useEffect, useRef} from 'react';

export default function Camera() {
  const [hasCameraPermission,setCameraPermission] = useState(null);
  const [image,setImage] = useState(null);
  const [type,setType] = useState(Cam.Constants.Type.back);
  const [flash,setFlash] = useState(Cam.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  useEffect(()=>{
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Cam.requestCameraPermissionsAsync();
      setCameraPermission(cameraStatus.status==='granted')
    })();
  },[]);
  return (
    <View style={styles.container}>
      <Cam
        style={styles.camera}
        type={type}
        flash={flash}
        ref={cameraRef}
      >

      </Cam>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  camera:{
    flex:1,
    borderRadius:20
  }
});

import { StyleSheet, Text, View , Image } from 'react-native'
import React, { useCallback } from 'react'
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Button from '../components/Shared/Button';
import {colors} from '../components/Shared/styles';

SplashScreen.preventAutoHideAsync();

export default function Onboarding(props) {
    const [fontsLoaded] = useFonts({
        'KanitL':require('../../assets/fonts/Kanit-Light.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) 
            await SplashScreen.hideAsync();
    },[fontsLoaded]);

    if(!fontsLoaded)
        return null;

    const {navigation} = props;
    const goToAuth = () => {
        navigation.navigate('BottomTab');
    }

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <View style={styles.illustration}>
                <Image source={require('../../assets/images/onboarding.png')} style={styles.image}/>
            </View>
            <View style={styles.body}>
                <View style={styles.textArea}>
                    <Text style={{fontFamily:"KanitL",fontWeight:"bold",fontSize:48,textAlign:"center",color:colors.primary,letterSpacing:2}}>Online Class</Text>
                    <Text style={{fontFamily:"KanitL",fontSize:16.5,textAlign:"center",color:colors.secondary,letterSpacing:1}}>Çözemediğin soruların fotoğrafını çek,gönder.     Cevaplar kısa sürede cebine gelsin.</Text>
                </View>
                <Button 
                    title={'Hadi Başlayalım!'}
                    backgroundColor={colors.primary}
                    tintColor={colors.white}
                    fontFamily={'KanitL'}
                    width={320}
                    onPress={goToAuth}
                    fontSize={24}
                    />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    illustration:{
        flex: .6,
        justifyContent:"center",
        alignItems:"center",
    },
    image:{
        flex: 1,
        aspectRatio: .7, 
        resizeMode: 'contain',
    },
    body:{
        flex:.4,
        alignItems:'center',
        justifyContent:'space-around',
    }
})
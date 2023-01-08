import styled from 'styled-components/native'
import Contants from 'expo-constants'
import { Dimensions } from 'react-native';

const StatusBarHeight = Contants.statusBarHeight;
const {height , width} = Dimensions.get("screen");

export const colors = {
    primary:'#3D5CFF',
    secondary:'#0d1333',
    white:'#FFFFFF',
    disable:'lightgrey',
    grey:'#787878',
    green:'#10B981',
    red:'#EF4444',
    brand:'#6D28D9',
    tertiary:'#1F2937',
    darkLight:'#9CA3AF',
    frost:'#f9f6f6'
};

const {white,primary,secondary,disable,grey,green} = colors;

export const StyledContainer = styled.View`
    flex:1;
    padding-top:${StatusBarHeight + 30}px;
    background-color:${white};
`;

export const InnerContainer = styled.View`
    flex:1;
    width:100%;
    align-items:center;
    padding-top:${StatusBarHeight + 30}px;
    background-color:${white};
`;

export const PageTitle = styled.Text`
    font-size:30px;
    text-align:center;
    font-weight:bold;
    color:${secondary};
    padding:10px;

`

export const InfoText  = styled.Text`
    color:${secondary};
    font-size:15px;
    text-align:center;
`

export const StyledButton = styled.TouchableOpacity`
    padding:15px;
    background-color:${primary};
    justify-content:center;
    align-items:center;
    border-radius:10px;
    margin-vertical:50px;
    height:60px;
    width:90%
`
//Verification Components
export const TopHalf = styled.View`
    flex:1;
    padding:10px;
    flex-wrap:wrap;
    width:100%;
    justify-content:center;
`;

export const BottomHalf = styled(TopHalf)`
    justify-content:center;
`;

export const CodeInputSection = styled.View`
    flex:1;
    align-items:center;
    justify-content:center;
    margin-vertical:30px;
`;

export const HiddenTextInput = styled.TextInput`
    position:absolute;
    width:1px;
    height:1px;
    opacity:0;
`;

export const CodeInputsContainer = styled.Pressable`
    width:90%;
    flex-direction:row;
    justify-content:space-between;
`;

export const CodeInput = styled.View`
    border-color:${grey};
    border-width:2px;
    border-radius:10px;
    height:70px;
    width:70px;
    justify-content:center;
    align-items:center
`;

export const CodeInputFocused = styled(CodeInput)`
    border-color:${colors.primary};
    background-color:rgba(61,92,255,0.1)
`
//Verification Components End

//Modal Components 
export const ModalContainer = styled(StyledContainer)`
    justify-content:center;
    align-items:center;
    background-color:rgba(0,0,0,0.2);
`

export const ModalView = styled.View`
    margin:20px;
    background-color:white;
    border-radius:20px;
    padding:35px;
    align-items:center;
    elevation:5;
    shadow-color:#000;
    shadow-offset:0px 2px;
    shadow-opacity:0.25;
    shadow-radius:4px;
    width:90%;
`
//Modal components end

//Home Screen Components 

export const LessonCardContainer = styled.View`
    width:100%;
    min-width:195px
    flex:1;
    background-color:red;
    align-items:center;
    justify-content:center;
    border-radius:20px;
    margin:5px 5px;
    height:100px
`

export const HomeHeader = styled.View`
    background-color:${primary};
    height:${height*0.1}px;
    border-bottom-left-radius:20px;
    border-bottom-right-radius:20px;
    margin-bottom:5px;
    flex-direction:row;
    justify-content:space-between;
    align-items:flex-end;
    padding:15px 20px;
`
export const Avatar = styled.Image`
    height:50px;
    width:50px;
    border-radius:500px;
    border-width:1px;
    border-color:${secondary};
`

export const HomeBody = styled.View`
    height:${height*0.78}px;
`

export const Seperator = styled.View`
    height:2px;
    background-color:${disable};
    width:96%;
    margin-vertical:10px;
    border-radius:500px;
    justify-content:center;
    margin-left:${width*0.02}px;
`
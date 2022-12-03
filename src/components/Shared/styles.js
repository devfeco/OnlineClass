import styled from 'styled-components/native'
import Contants from 'expo-constants'
import { View } from 'react-native';

const StatusBarHeight = Contants.statusBarHeight;

export const colors = {
    primary:'#3D5CFF',
    secondary:'#0d1333',
    white:'#FFFFFF',
    disable:'lightgrey',
    grey:'#787878'
};

const {white,primary} = colors;

export const StyledContainer = styled.View`
    flex:1;
    padding-top:${StatusBarHeight + 30}px;
    background-color:${white};
`;

export const InnerContainer = styled.View`
    flex:1;
    width:100%;
    align-items:center;
`;

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
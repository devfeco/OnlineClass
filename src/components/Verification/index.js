import { colors } from "../Shared/styles";
import styled from 'styled-components/native'

export const TopHalf = styled.View`
    flex:1;
    padding:10px;
    flex-direction:row;
    flex-wrap:wrap;
    width:100%;
    justify-content:center;
`;

export const BottomHalf = styled(TopHalf)`
    justify-content:space-around;
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
    width:70%;
    flex-direction:row;
    justify-content:space-between;
`;

export const CodeInput = styled.View`
    border-color:${colors.grey};
    min-width:15%;
    border-width:2px;
    border-radius:10px;
    padding:12px
`;

export const CodeInputFocused = styled(CodeInput)`
    border-color:${colors.primary}
`
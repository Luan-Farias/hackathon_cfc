import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    height: 100%;
    background: #F7F7F7;
    padding-top: 70px;
`;

export const Logo  = styled.Image`
    width: 50%;
    height: 200px;
    margin-left: auto;
    margin-right: auto;
`;

export const InputBlock = styled.View`
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
`;

export const Label = styled.Text`
    font-size: 20px;
    font-weight: 600;
`;

export const Input = styled.TextInput`
    width: 100%;
    border-bottom-width: 1px;
    padding: 5px;
    font-size: 18px;
    border-color: #D9D9D9;
`;

export const LoginButton = styled(RectButton)`
    width: 70%;
    background-color: #47525e;
    height: 40px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;

    align-items: center;
    justify-content: center;

    border-radius: 5px;
`;

export const LoginButtonText = styled.Text`
    color: #FFFFFF;
    font-size: 20px;
    margin: 0;
`;

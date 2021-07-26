import { RectButton } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import styled from 'styled-components/native';
import { WebView as NonStyledWebView } from "react-native-webview";

export const Container = styled.View`
    flex: 1;
    height: 100%;
    background: #FFF;
    margin-top: ${Constants.statusBarHeight}px;
    padding-top: 20px;

    justify-content: space-between;
`;

export const TitleArea = styled.View`
    width: 100%;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 20px;
`;

export const BackButtonArea = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const BackButton = styled(RectButton)`
    width: 80%;
    height: 50px;
    align-items: center;
    justify-content: center;
    background-color: #34cb79;
    border-radius: 8px;
    margin-bottom: 25px;
`;

export const WebView = styled(NonStyledWebView)`
    flex: 1;
    margin: 20px 0;
`;

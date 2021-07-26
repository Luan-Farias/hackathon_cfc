import { RectButton } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    height: 100%;
    background: #FFF;
    margin-top: ${Constants.statusBarHeight}px;
    padding-top: 20px;
`;

export const TitleArea = styled.View`
    width: 100%;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 20px;
`;

export const List = styled.View`
    flex: 1;
    width: 100%;
    padding: 5px;
    padding-top: 20px;
`;

export const ListItem = styled(RectButton)`
    margin-top: 10px;
    padding: 5px;
`;

export const ListItemTitle = styled.Text`
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 4px;
`;

export const ListItemSubtitle = styled.Text`
    font-size: 14px;
    color: #999;
`;

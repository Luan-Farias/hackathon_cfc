import { useNavigation } from '@react-navigation/native';
import Icon from '@expo/vector-icons/Feather';
import React from 'react';

import { BackButton, BackButtonArea, Container,  Title, TitleArea, WebView } from './styles';

const MapPrec: React.FC = () => {
    const navigation = useNavigation();

    return (
        <Container>
            <TitleArea>
                <Title>Veja informações sobre precipitação</Title>
            </TitleArea>

            <WebView
                source={{
                    uri: 'https://clima.inmet.gov.br/prec'
                }}
            />

            <BackButtonArea>
                <BackButton onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" size={32} color="#FFF" />
                </BackButton>
            </BackButtonArea>
        </Container>
    );
};

export default MapPrec;

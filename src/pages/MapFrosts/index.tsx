import { useNavigation } from '@react-navigation/native';
import Icon from '@expo/vector-icons/Feather';
import React from 'react';

import { BackButton, BackButtonArea, Container,  Title, TitleArea, WebView } from './styles';

const MapFrosts: React.FC = () => {
    const navigation = useNavigation();

    return (
        <Container>
            <TitleArea>
                <Title>Veja informações sobre geadas</Title>
            </TitleArea>

            <WebView
                source={{
                    uri: 'https://portal.inmet.gov.br/paginas/geadas'
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

export default MapFrosts;

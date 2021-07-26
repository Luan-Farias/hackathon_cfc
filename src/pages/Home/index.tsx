import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Container, List, ListItem, ListItemSubtitle, ListItemTitle, Title, TitleArea } from './styles';


const Login: React.FC = () => {
    const navigation = useNavigation();

    return (
        <Container>
            <TitleArea>
                <Title>Escolha o que deseja ver</Title>
            </TitleArea>

            <List>
                <ListItem onPress={() => navigation.navigate('MapUser')}>
                    <ListItemTitle>Atualize sua localização</ListItemTitle>
                    <ListItemSubtitle>Mostre no Mapa onde você está, dessa maneira pegamos dados baseados em sua localização para melhor fornecer a você.</ListItemSubtitle>
                </ListItem>

                <ListItem onPress={() => navigation.navigate('MapBurns')}>
                    <ListItemTitle>Mapa das queimadas</ListItemTitle>
                    <ListItemSubtitle>Mostra um mapa com os pontos que são focos de queimada atualmente.</ListItemSubtitle>
                </ListItem>

                <ListItem onPress={() => navigation.navigate('MapFrosts')}>
                    <ListItemTitle>Mapa das geadas</ListItemTitle>
                    <ListItemSubtitle>Mostra um mapa com informações sobre possíveis geadas sobre todo o país.</ListItemSubtitle>
                </ListItem>

                <ListItem onPress={() => navigation.navigate('MapPrec')}>
                    <ListItemTitle>Mapa meteorológico</ListItemTitle>
                    <ListItemSubtitle>Mostra um mapa com as principais informações da sobre o clima e o tempo.</ListItemSubtitle>
                </ListItem>
            </List>
        </Container>
    );
};

export default Login;

import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

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
            </List>
        </Container>
    );
};

export default Login;

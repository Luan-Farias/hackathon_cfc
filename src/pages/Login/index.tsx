import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import { Container, Input, InputBlock, Label, LoginButton, LoginButtonText, Logo } from './styles';


const Login: React.FC = () => {
    const navigation = useNavigation();

    const handlePressLoginButton = useCallback(() => {
        navigation.navigate('Home');
    }, []);


    return (
        <Container>
            <Logo source={require('../../assets/logo.jpeg')} />

            <InputBlock>
                <Label>Username:</Label>
                <Input />
            </InputBlock>

            <InputBlock>
                <Label>Password:</Label>
                <Input autoCompleteType="password" />
            </InputBlock>

            <LoginButton onPress={handlePressLoginButton}>
                <LoginButtonText>
                    Fazer Login
                </LoginButtonText>
            </LoginButton>
        </Container>
    );
};

export default Login;

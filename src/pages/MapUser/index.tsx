import { useNavigation } from '@react-navigation/native';
import Icon from '@expo/vector-icons/Feather';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import React, { useEffect, useState } from 'react';

import { BackButton, BackButtonArea, Container, Map, Title, TitleArea } from './styles';
import { Marker } from 'react-native-maps';


const Login: React.FC = () => {
    const [initialPosition, setInicialPosition] = useState<[number, number]>([0, 0]);
    const [currentMarker, setCurrentMarker] = useState<[number, number]>([0, 0]);
    const navigation = useNavigation();

    useEffect(() => {
        async function loadPosition() {
            const { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
              Alert.alert('Ops...', 'Precisamos da sua permissão para obter a sua localização');
              return;
            }

            const location = await Location.getCurrentPositionAsync();

            const { latitude, longitude } = location.coords;
            setInicialPosition([latitude, longitude]);
            setCurrentMarker([latitude, longitude]);
        }

        loadPosition();
    }, []);

    return (
        <Container>
            <TitleArea>
                <Title>Indique sua posição no Mapa</Title>
            </TitleArea>

            {initialPosition[0] !== 0 &&
                <Map
                    initialRegion={{
                        latitude: initialPosition[0],
                        longitude: initialPosition[1],
                        latitudeDelta: 0.012,
                        longitudeDelta: 0.012
                    }}
                    onPress={({ nativeEvent: { coordinate } }) => setCurrentMarker([coordinate.latitude, coordinate.longitude])}
                >
                    <Marker
                        coordinate={{
                            latitude: currentMarker[0],
                            longitude: currentMarker[1],
                        }}
                    />
                </Map>
            }


            <BackButtonArea>
                <BackButton onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" size={32} color="#FFF" />
                </BackButton>

                <BackButton>
                    <Icon name="save" size={32} color="#FFF" />
                </BackButton>
            </BackButtonArea>
        </Container>
    );
};

export default Login;

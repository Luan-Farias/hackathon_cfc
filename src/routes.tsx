import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Home from './pages/Home';
import MapUser from './pages/MapUser';
import MapPrec from './pages/MapPrec';
import MapBurns from './pages/MapBurns';
import MapFrosts from './pages/MapFrosts';

const Stack = createStackNavigator();
const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none'>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="MapUser" component={MapUser} />
                <Stack.Screen name="MapPrec" component={MapPrec} />
                <Stack.Screen name="MapBurns" component={MapBurns} />
                <Stack.Screen name="MapFrosts" component={MapFrosts} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export { Routes };

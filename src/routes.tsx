import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Home from './pages/Home';
import MapUser from './pages/MapUser';

const Stack = createStackNavigator();
const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none'>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="MapUser" component={MapUser} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export { Routes };

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Perfil_MARIO from './pantallas/perfil_mario';
import Inicio from './pantallas/inicio';
import Perfil_MESSI from './pantallas/perfil_messi';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Inicio} />
        <Stack.Screen name="MAAA" component={Perfil_MARIO} />
        <Stack.Screen name="LAMC" component={Perfil_MESSI} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

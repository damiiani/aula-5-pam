import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import 'react-native-gesture-handler';

import LoginRoutes from './components/LoginRoutes';

function Routes() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#14417b" />
      <LoginRoutes />
    </NavigationContainer>
  );
}

export default Routes;

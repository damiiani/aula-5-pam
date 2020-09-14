import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabRoutes from '../TabRoutes';
import Login from '../../pages/Login';

const Stack = createStackNavigator();

function LoginRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ cardStyle: { backgroundColor: '#585858' } }}
      />
      <Stack.Screen name="Home" component={TabRoutes} />
    </Stack.Navigator>
  );
}

export default LoginRoutes;

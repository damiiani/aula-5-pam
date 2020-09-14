import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Collection from '../../pages/Collection';
import Home from '../../pages/Home';
import Item from '../../pages/Item';

const Stack = createStackNavigator();

function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ cardStyle: { backgroundColor: '#92afd7' } }}
      />
      <Stack.Screen
        name="Collection"
        component={Collection}
        options={{ cardStyle: { backgroundColor: '#d0f4ea' } }}
      />
      <Stack.Screen
        name="Item"
        component={Item}
        options={{ cardStyle: { backgroundColor: '#d1d1d1' } }}
      />
    </Stack.Navigator>
  );
}

export default StackRoutes;

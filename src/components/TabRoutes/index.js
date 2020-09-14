import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DrawerRoutes from '../DrawerRoutes';
import Profile from '../../pages/Profile';

const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 18 },
        style: { backgroundColor: '#14417b' },
        activeTintColor: '#f2f2f2',
      }}
    >
      <Tab.Screen name="Inicial" component={DrawerRoutes} />
      <Tab.Screen name="Perfil" component={Profile} />
    </Tab.Navigator>
  );
}

export default TabRoutes;

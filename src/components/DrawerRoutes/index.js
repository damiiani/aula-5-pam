import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import StackRoutes from '../StackRoutes';
import Collection from '../../pages/Collection';
import Item from '../../pages/Item';
import Profile from '../../pages/Profile';

const Drawer = createDrawerNavigator();

function DrawerRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Inicial" component={StackRoutes} />
      <Drawer.Screen name="Coleção" component={Collection} />
      <Drawer.Screen name="Item" component={Item} />
      <Drawer.Screen name="Perfil" component={Profile} />
    </Drawer.Navigator>
  );
}

export default DrawerRoutes;

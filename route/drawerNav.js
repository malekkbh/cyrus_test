import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import StackNav from './stackNav';
import { strings } from '../src/res';
import { MainScreen, SideMenue } from '../src/screens';

const Drawer = createDrawerNavigator();

const drawerParams = {
    screenOptions: {
        headerTitleAlign: 'center',
        title: strings.mainScreenTitle,
    },
    drawerContent: (props) => <SideMenue />,
}

const mainScreenParams = {
    name: "drawerMainScreen",
    component: MainScreen,
}

const DrawerNav = (props) => (
    <Drawer.Navigator {...drawerParams} >
        <Drawer.Screen {...mainScreenParams} />
    </Drawer.Navigator>
)

export default DrawerNav;
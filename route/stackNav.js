
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens, strings } from '../src/res';
import { MainScreen, MovieScreen, Splash } from '../src/screens';
import DrawerNav from './drawerNav';


const Stack = createNativeStackNavigator();

const screenParams = {
    navigator: {
        // initialRouteName: Screens.Splash,
        screenOptions: {
            headerTitleAlign: 'center',
        },
    },
    Splash: {
        name: Screens.Splash,
        component: Splash,
        options: { headerShown: false },
    },
    MainScreen: {
        name: Screens.MainScreen,
        component: DrawerNav,
        options: {
            headerShown: false            
        }
    },
    MovieScreen: {
        name: Screens.MovieScreen,
        component: MovieScreen, 
    },
}


const StackNav = (props) => (
    <Stack.Navigator {...screenParams.navigator}>
        <Stack.Screen {...screenParams.Splash} />
        <Stack.Screen {...screenParams.MainScreen} />
        <Stack.Screen {...screenParams.MovieScreen} />
    </Stack.Navigator>
)

export default StackNav;
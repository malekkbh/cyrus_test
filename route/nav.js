import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNav from './stackNav';
import DrawerNav from './drawerNav';

const Stack = createNativeStackNavigator();

const nav = (props) => {

    return (
        <NavigationContainer >
           <StackNav/>
        </NavigationContainer>
    )
}

export default nav;
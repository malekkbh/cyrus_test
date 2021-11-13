
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens } from '../src/res';
import { Splash, StackOverFlowUSer, WebView } from '../src/screens';


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
    StackOverFlowUser: {
        name: Screens.StackOverFlowUser,
        component: StackOverFlowUSer,
        options: { headerShown: false },
    },
     WebView: {
        name: Screens.WebView,
        component: WebView,
        options: { title: '' },
    },
}


const StackNav = (props) => (
    <Stack.Navigator {...screenParams.navigator}>
        <Stack.Screen {...screenParams.Splash} />
        <Stack.Screen {...screenParams.StackOverFlowUser} />
        <Stack.Screen {...screenParams.WebView} />
    </Stack.Navigator>
)

export default StackNav;
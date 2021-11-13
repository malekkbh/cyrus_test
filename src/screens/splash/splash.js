import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useEffect, useRef } from 'react';
import { Image, StyleSheet, Text, View, Animated, Appearance } from 'react-native';
import Cyrus_Context from '../../../store/Cyrus_Context';
import imagesIndex from '../../assets/images/imagesIndex'
import { globalStyle, Screens, strings } from '../../res';


const Splash = (props) => {

    const { navigation } = props;
    const { setColorSchame } = useContext(Cyrus_Context);

    const fadeAnim = useRef(new Animated.Value(1)).current;


    var loadingDataDone = false;
    var timerDone = false;

    const imageParams = {
        source: imagesIndex.splashImage(),
        style: styles.image
    }

    const getMoviesFromApi = async () => {
        await getAllMovies()
            .then(resJson => {
                setMovies?.(resJson);
                let initMovisToDisplay = resJson?.slice(0, 10).concat(['loader']);
                setMoviesTodisplay(initMovisToDisplay);
                loadingDataDone = true;
            })
            .catch(err => console.log('error: ', err));

        timerDone && navigateToHomePage();
    }

    const navigateToHomePage = () => {
        navigation.replace(Screens.StackOverFlowUser);
    }

    const fadeOut = () => {
        // Will change fadeAnim value to 0 in 4 seconds
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 4000,
            useNativeDriver: true
        }).start();
    };

    const getPhoneApperance = async () => {
        const colorScheme = Appearance.getColorScheme();
        let colorSchemeFromStorage = await AsyncStorage.getItem('colorScheme');
        setColorSchame(colorSchemeFromStorage || colorScheme );
    }

    useEffect(() => {
        getPhoneApperance()
        fadeOut();
        setTimeout(() => {
            navigateToHomePage()
        }, 2.5 * 1000);
    }, []);

    return (

        <View style={{ flex: 1, backgroundColor: 'black', }}>
            <Animated.View style={[styles.container, { opacity: fadeAnim }]} >
                <Image {...imageParams} />
                <Text style={styles.text}>{strings.splash_text}</Text>
            </Animated.View>
        </View >

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    image: {
        width: '60%',
        resizeMode: 'contain'
    },
    text: {
        ...globalStyle.Rubik_17,
        color: '#ffff',
        marginTop: 20,
    }
})

export default Splash;
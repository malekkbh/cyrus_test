import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { KeyValueItem, MovieDetails } from '../../components';
import { strings } from '../../res';

const MovieScreen = (props) => {
    const { navigation } = props
    const { data } = props.route.params || {};

    const params = {
        mainImage: {
            source: { uri: data?.posterurl },
            style: styles.mainImage
        },
    }

    useEffect(() => {
        navigation.setOptions({
            title: data?.title
        })
    })

    return (
        <View style={styles.container}>
            <Image {...params.mainImage} />
            <View style={styles.detailsContainer}>
                <MovieDetails data={data} largeFont={true} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainImage: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        backgroundColor: 'black'
    },
    detailsContainer: {
        marginTop: 20,
        marginLeft: 30,
    }
})

export default MovieScreen;
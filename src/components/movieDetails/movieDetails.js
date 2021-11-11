import React from 'react';
import { StyleSheet, View } from 'react-native';
import { KeyValueItem } from '../index';
import { strings } from '../../res';

const MovieDetails = (props) => {
    const { data , largeFont } = props;

    let rating_AVG = () => {
        const sum = data?.ratings?.reduce((a, b) => a + b, 0);
        const avg = (sum / data?.ratings?.length)?.toFixed(1) || 0;
        return avg + '/10';
    }

    const params = {
        title: {
            keyText: strings.title,
            value: data?.title,
            largeFont:largeFont
        },
        year: {
            keyText: strings.year,
            value: data?.year,
            largeFont:largeFont
        },
        genres: {
            keyText: strings.genres,
            value: data?.genres?.toString(),
            largeFont:largeFont
        },
        ratings: {
            keyText: strings.ratings,
            value: rating_AVG(),
            largeFont:largeFont
        },
        actors: {
            keyText: strings.actors,
            value: data?.actors?.toString(),
            largeFont:largeFont
        },
    }

    return (
        <View>
            <KeyValueItem {...params.title} />
            <KeyValueItem {...params.year} />
            <KeyValueItem {...params.genres} />
            <KeyValueItem {...params.ratings} />
            <KeyValueItem {...params.actors} />
        </View>
    )
}


export default MovieDetails;
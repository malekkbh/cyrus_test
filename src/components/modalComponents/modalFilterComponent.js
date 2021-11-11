import React, { useContext, useState } from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BTN, CheckBoxComponent } from '../index';
import Cyrus_Context from '../../../store/Cyrus_Context';
import imagesIndex from '../../assets/images/imagesIndex';
import { globalStyle, sizes, strings } from '../../res';

const ModalFilterView = (props) => {

    const { movies, setMoviesTodisplay, setMovies, choosenGeners, setChoosenGeners } = useContext(Cyrus_Context);


    const X = {
        source: imagesIndex.black_X(),
        style: styles.x,
    }

    let genresArr = [
        'Action',
        'Comedy',
        'Crime',
        'Drama',
        'Adventure',
        'Fantasy',
        'Horror',
        'Romance',
        'Thriller',
        'Mystery'
    ]

    console.log('choosenGeners: ', choosenGeners);

    const cbParams = (gener) => ({
        text: gener,
        onValueChange: (val) => onCbValueChange(val, gener),
        check: choosenGeners.findIndex(generName => generName == gener) !== -1,
    })

    const onCbValueChange = (check, gener) => {
        console.log('cb: ', check);
        let genersArray = choosenGeners;
        if (check) {
            genersArray.push(gener);
        } else {
            genersArray = genresArr.filter(generName => generName != gener);
        }
        setChoosenGeners([...genersArray]);
    }

    const renderFilterList = () => genresArr.map(gener => <CheckBoxComponent {...cbParams(gener)} />)

    const checkIfMovieHaveGener = (movie) => {
        let generFound = false;
        choosenGeners.forEach(gener => {
            if (movie?.genres?.find(generName => generName == gener)) {
                generFound = true;
            }
        })
        return generFound;
    }

    const onBtnPress = () => {
        let initMovisToDisplay = [];
        if (choosenGeners?.length > 0) {
            let filteredMoviesArr = movies?.filter(movie => {
                let movieExsit = checkIfMovieHaveGener(movie);
                return movieExsit;
            })
            initMovisToDisplay = filteredMoviesArr;
        }
        else {
            initMovisToDisplay = movies?.slice(0, 10).concat(['loader']);
        }
        setMoviesTodisplay(initMovisToDisplay);
        props.closeModal();
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => props.closeModal(true)}>
                <Image {...X} />
            </TouchableOpacity>
            <Text style={styles.title}>{strings.filterTitle}</Text>
            {renderFilterList()}
            <BTN onPress={() => onBtnPress()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffff',
        width: sizes.PageWidth * 0.7,
        borderRadius: 10,
        paddingTop: 20,
    },
    title: {
        ...globalStyle.Rubik_Bold_16,
        marginLeft: 20,
    },
    x: {
        height: 10,
        width: 10,
        alignSelf: 'flex-end',
        marginRight: 20,
        margin: 10,
        // marginTop: -10
    },
})

export default ModalFilterView;
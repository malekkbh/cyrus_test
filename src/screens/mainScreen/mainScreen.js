import React, { useContext, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { StyleSheet, View } from 'react-native';
import Cyrus_Context from '../../../store/Cyrus_Context';
import { Loader, MovieItem, Search } from '../../components'
import { sizes, strings } from '../../res';



var loadingCounter = 1;

const MainScreen = (props) => {

    const { movies, moviesToDisplay, setMoviesTodisplay } = useContext(Cyrus_Context);

    const [searchIsOnfocus, setSearchIsOnfocus] = useState(false);
    const [searchText, setSearchText] = useState('');

    const onListReachEnd = () => {
        /** load the next 10 items each time and concat them to the previos data
         *  maxToRenderPerBatch make sure that flat list never render more than 10 in each scrool 
        */
        if (searchIsOnfocus || searchText?.length > 0) {
            /** no need to load extra data */
            return;
        }

        let moviesArr = moviesToDisplay;
        let start = loadingCounter * 10;
        let end = (loadingCounter + 1) * 10;


        if (end >= movies?.length) {
            if (moviesArr[moviesArr?.length - 1] === 'loader') {
                moviesArr?.pop()
                setMoviesTodisplay([...moviesArr]);
            }
            return;
        }

        let itemsToAdd = movies.slice(start, end);

        /** take down the loader  */
        moviesArr.pop();
        moviesArr = moviesArr?.concat(itemsToAdd)
        end <= movies?.length && (moviesArr = moviesArr.concat(['loader']))
        setMoviesTodisplay([...moviesArr]);
        loadingCounter++
    }

    const search_movies = (val) => {
        return movies?.filter(movie => {
            if (
                movie?.title?.includes(val) ||
                movie?.year == val ||
                movie?.genres?.toString()?.includes(val) ||
                movie?.actors?.toString()?.includes(val)
            )
                return movie;
        })
    }

    const onSearchTextChange = (val) => {
        setSearchText(val);

        /** auto complete search  */
        let searchResult = search_movies(val);
        setMoviesTodisplay([...searchResult]);
    }


    const flatListParams = {
        data: moviesToDisplay,
        renderItem: ({ item }) => item === 'loader' ? <Loader /> : <MovieItem data={item} />,
        style: styles.flatlist,
        contentContainerStyle: styles.flatListContentContainerStyle,
        onEndReached: () => onListReachEnd(),
        maxToRenderPerBatch: 10,
        keyExtractor: (item, index) => index,
    }

    const searchParams = {
        onChangeText: (val) => onSearchTextChange(val),
        placeHolder: strings.searchPlaceholder,
        onfocus: () => setSearchIsOnfocus(true),
        onblur: () => setSearchIsOnfocus(false),
        resetData: () => setMoviesTodisplay(initMovisToDisplay)
    }


    return (
        <View style={styles.container}>
            <Search {...searchParams} />
            <FlatList {...flatListParams} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    flatlist: {
        width: sizes.PageWidth,
        marginTop: 5
    },
    flatListContentContainerStyle: {
        alignItems: 'center'
    }
})

export default MainScreen //connect(mapStateToProps, dispatchToProps)(MainScreen);

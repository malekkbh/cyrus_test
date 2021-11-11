import React, { useContext } from 'react';
import { StyleSheet, View, FlatList, Text, Image , TouchableOpacity} from 'react-native';
import {  MenuItem } from '../index';
import Cyrus_Context from '../../../store/Cyrus_Context';
import imagesIndex from '../../assets/images/imagesIndex';
import { globalStyle, sizes, strings } from '../../res';

const ModalSortComponent = (props) => {
    const { movies, setMoviesTodisplay, setMovies } = useContext(Cyrus_Context);

    let rating_AVG = (data) => {
        const sum = data?.ratings?.reduce((a, b) => a + b, 0);
        const avg = (sum / data?.ratings?.length)?.toFixed(1) || 0;
        return avg;
    }

    let sortListData = [
        {
            title: 'new to old',
            onPress: () => sort('year', 'down')
        },
        {
            title: 'old to new ',
            onPress: () => sort('year', 'up')
        },
        {
            title: 'heights rating',
            onPress: () => { sortBy_AVG() }
        },
    ]

    const sort = (proprty, direction) => {
        let up = (a, b) => a[proprty] - b[proprty];
        let down = (a, b) => b[proprty] - a[proprty];
        let isUp = direction === 'up';
        let sortedArr = movies.sort((a, b) => isUp ? up(a, b) : down(a, b))
        setMovies([...sortedArr]);
        let initMovisToDisplay = movies?.slice(0, 10).concat(['loader']);
        setMoviesTodisplay(initMovisToDisplay);
        props.closeModal();
    }

    const sortBy_AVG = () => {
        let sortedArr = movies.sort((a, b) => rating_AVG(b) - rating_AVG(a))
        setMovies([...sortedArr]);
        let initMovisToDisplay = movies?.slice(0, 10).concat(['loader']);
        setMoviesTodisplay(initMovisToDisplay);
        props.closeModal();
    }



    const X = {
        source: imagesIndex.black_X(),
        style: styles.x,
    }


    const renderSortList = () => sortListData.map(sortItem => <MenuItem {...sortItem} />)
    const onBtnPress = () => {

    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> props.closeModal(true)}>
                <Image {...X} />
            </TouchableOpacity>
            <Text style={styles.title}>{strings.sortTitle}</Text>
            {renderSortList()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffff',
        width: sizes.PageWidth * 0.7,
        borderRadius: 10,
        height: 220,
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
        margin: 10 , 
        // marginTop: -10
    }
})

export default ModalSortComponent;
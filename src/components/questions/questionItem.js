
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useContext } from 'react';
import { Text } from 'react-native';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { KeyValueItem } from '..';
import Cyrus_Context from '../../../store/Cyrus_Context';
import imagesIndex from '../../assets/images/imagesIndex';
import { colors, globalStyle, Screens, sizes } from '../../res';

let isDarkMode = null;

const QuestionItem = (props) => {
    const { title, subtitle, url, colorScheme, creation_date, answer_count, view_count ,link } = props.data;
    const { choosenSortTab } = useContext(Cyrus_Context);
    const navigation = useNavigation()
    isDarkMode = colorScheme === 'dark';


    const imageProps = {
        source: imagesIndex.rightArrow(),
        style: styles.arrow,
    }

    const touchable = {
        style: styles.container(),
        onPress: () => onItemPress(),
    }

    const renderKeyValueSubTitle = () => {
        switch (choosenSortTab) {
            case 'Date': {
                return {
                    keyText: 'Date',
                    value:new Date(parseInt(creation_date) * 1000).toDateString(),
                }
            }
            case 'Answers': {
                return {
                    keyText: 'Answers',
                    value: answer_count,
                }
            }
            case 'Views': {
                return {
                    keyText: 'Views',
                    value: view_count,
                }
            }
        }
    }

    const keyValuItemParams = {
        ...renderKeyValueSubTitle(),
        ignoreColorScheme: true,
        style: styles.keyValueItem
    }



    const onItemPress = () => {
        navigation.navigate(Screens.WebView , {url: link} )
    }

    return (
        <TouchableOpacity {...touchable}>
            <View style={styles.itemContainer}>
                <Text style={styles.title}>{title}</Text>
                <KeyValueItem {...keyValuItemParams} />
            </View>
            <Image {...imageProps} />
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: () => ({
        flexDirection: 'row',
        borderWidth: 1,
        backgroundColor: colors.place_holder_color,
        width: '70%',
        alignSelf: 'center',
        marginTop: 10,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
    }),
    title: {
        ...globalStyle.Rubik_bold(13),
        maxWidth: sizes.PageWidth * 0.63,
        marginTop: 10,
    },
    arrow: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
    },
    keyValueItem: {
        marginTop: 10,
        marginLeft: 0,
    }
})

export default QuestionItem;

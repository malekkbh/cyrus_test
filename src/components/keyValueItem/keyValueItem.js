import React from 'react';
import { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Cyrus_Context from '../../../store/Cyrus_Context';
import { globalStyle, sizes } from '../../res';


const KeyValueItem = (props) => {
    const { keyText, value , ignoreColorScheme } = props;
    const { colorScheme } = useContext(Cyrus_Context)
    let isDarkMode = colorScheme == 'dark' ; 
    ignoreColorScheme && (isDarkMode = null); 

    const keyTextStyle = globalStyle.Rubik_bold(10, isDarkMode);
    const valueTextStyle = globalStyle.Rubik(10 , isDarkMode);


    return (
        <View style={[styles.container , props.style]}>
            <Text style={styles.textStyle(keyTextStyle)} >{keyText + ": "}</Text>
            <Text style={styles.textStyle(valueTextStyle)} >{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        maxWidth: sizes.PageWidth - 200,
        alignItems: 'center',
        marginVertical: 2 , 
        marginLeft: 15
    },
    textStyle: (font) => ({
        color: 'black',
        ...font,
    }),

})

export default KeyValueItem;
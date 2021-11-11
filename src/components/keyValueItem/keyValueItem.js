import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { globalStyle, sizes } from '../../res';


const KeyValueItem = (props) => {
    const { keyText, value, largeFont } = props;

    const keyTextStyle = largeFont ? globalStyle.Rubik_Bold_14 : globalStyle.Rubik_Bold_12;
    const valueTextStyle = largeFont ? globalStyle?.Rubik_16 : globalStyle.Rubik_14;


    return (
        <View style={styles.container}>
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
        marginVertical: 2
    },
    textStyle: (font) => ({
        color: 'black',
        ...font,
    }),

})

export default KeyValueItem;
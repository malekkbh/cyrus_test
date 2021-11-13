import React from 'react';
import { TouchableOpacity, Image, TextInput, StyleSheet, View } from 'react-native';
import imagesIndex from '../../assets/images/imagesIndex';
import { colors, globalStyle } from '../../res';

const Input = (props) => {

    const { value, onChangeText, placeholder, clearText , onSubmitEditing } = props

    const params = {
        input: {
            style: styles.input(),
            value: value,
            onChangeText: (val) => onChangeText(val),
            placeholderTextColor: colors.place_holder_color,
            placeholder: placeholder,
            returnKeyType: 'search',
            onSubmitEditing: ({ nativeEvent: { text, eventCount, target }}) =>  onSubmitEditing(text) , 
        },
        x: {
            source: imagesIndex.black_X(),
            style: styles.x,
        },
        xTouchable: {
            style: styles.xTouchable,
            onPress: () => clearText?.(),
        }
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput {...params.input} />
            <TouchableOpacity {...params.xTouchable}>
                <Image {...params.x} />
            </TouchableOpacity>
        </View>

    )

}

const styles = StyleSheet.create({
    input: () => ({
        backgroundColor: '#ffff',
        ...globalStyle.Rubik(14),
        // borderWidth: 1,
        // marginTop: 20,
        borderBottomWidth: 1,
        width: '90%',
    }),
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffff',
        width: '50%',
        alignSelf: 'center',
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
    },
    x: {
        width: 10,
        height: 10,
        marginRight: 3,
    },
    xTouchable: {
        // borderWidth:1 , 
        padding: 10,
    }
})

export default Input;
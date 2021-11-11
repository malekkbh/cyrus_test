import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { colors, globalStyle } from '../../res';

const BTN = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.text}>{'Done'}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50 ,
        width: 170,
        backgroundColor: colors.btn_active,
        justifyContent:'center' , 
        alignItems:'center' , 
        borderRadius:10 , 
        alignSelf:'center', 
        marginTop: 20 , 
        marginBottom: 20 
    },
    text:{
        ...globalStyle.Rubik_Bold_12 , 
        color:'#ffff' , 
    }
})

export default BTN;
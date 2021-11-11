import React from 'react';
import { Text, TouchableOpacity , StyleSheet} from 'react-native';
import { colors, globalStyle } from '../../res';

const MenuItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: 10,
        // borderTopWidth:1 , 
        borderBottomWidth:1 , 
        borderColor:colors.border_color, 
        marginBottom: 5,
        paddingLeft: 40 ,
        width:'90%' ,
        alignSelf: 'center',
    },
    text:{
        ...globalStyle.Rubik_16 , 
    }, 
})

export default MenuItem;
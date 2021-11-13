import React, { useEffect, useRef } from 'react';
import { useContext } from 'react';
import { FlatList } from 'react-native';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { QuestionItem } from '../index';
import Cyrus_Context from '../../../store/Cyrus_Context';


const Questions = (props) => {

    const { userQuestions, setUserQuestions } = useContext(Cyrus_Context)
    const listRef = useRef(null); 

    const flatListParams = {
        data: userQuestions.items,
        renderItem: ({ item }) => <QuestionItem data={item} />,
        style: { flex: 1 , marginTop: 30,},
        ref: listRef, 
    }

    useEffect(()=>{
        listRef?.current?.scrollToOffset({ animated: true, offset: 0 });
    },[userQuestions])

    return (
        <View style={{ flex: 1 }}>
            <FlatList {...flatListParams} />
        </View>
    )
};

const styles = StyleSheet.create({

})

export default Questions;

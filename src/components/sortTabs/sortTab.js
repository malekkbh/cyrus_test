import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Cyrus_Context from '../../../store/Cyrus_Context';
import { colors, globalStyle } from '../../res';

let isDarkMode = null;

const SortTab = (props) => {

    const { colorScheme, choosenSortTab, setChoosenSortTab, userQuestions, setUserQuestions } = useContext(Cyrus_Context)


    isDarkMode = colorScheme === 'dark';
    let isChoose = choosenSortTab == props.text;

    const sortQuestions = () => {
        let questionsArr = userQuestions.items;
        console.log('text pressed: ', props.text);

        switch (props.text) {
            case ('Date'): {
                questionsArr = questionsArr?.sort((a, b) => b?.creation_date - a?.creation_date);
                console.log('questionsArr Date: ', questionsArr?.map(i => i.creation_date));
                setUserQuestions({ items: [...questionsArr] });
            }
                break;
            case 'Answers': {
                questionsArr = questionsArr.sort((a, b) => b?.answer_count - a?.answer_count);
                console.log('questionsArr Answers: ', questionsArr?.map(i => i.answer_count));
                setUserQuestions({ items: [...questionsArr] });
            }
                break;
            case 'Views': {
                questionsArr = questionsArr.sort((a, b) => b?.view_count - a?.view_count);
                console.log('questionsArr Views: ', questionsArr?.map(i => i.view_count));
                setUserQuestions({ items: [...questionsArr] });
            }
                break;
        }
    }

    const onTabPress = () => {
        sortQuestions();
        setChoosenSortTab(props.text);
    }

    const toucableParams = {
        style: [styles.container(), isChoose && styles.choosenTab],
        onPress: () => onTabPress(),
    }

    return (
        <TouchableOpacity {...toucableParams}>
            <Text style={styles.text()}>
                {props.text}
            </Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container: () => ({
        borderWidth: 1,
        borderColor: isDarkMode ? '#ffff' : 'black',
        width: 80,
        height: 50,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        // borderRadius: 10,
    }),
    text: () => ({
        ...globalStyle.Rubik(10, isDarkMode)
    }),
    choosenTab: {
        backgroundColor: colors.place_holder_color,
    }
})

export default SortTab;
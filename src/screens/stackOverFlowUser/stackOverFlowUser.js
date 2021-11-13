import React, { useContext, useState } from 'react';
import { Text } from 'react-native';
import { Switch, StyleSheet, View } from 'react-native';
import { Input, Loader, Profile, Questions, SortTabs } from '../../components';
import Cyrus_Context from '../../../store/Cyrus_Context';
import { globalStyle, strings } from '../../res';
import { getUserFromStackOverFlow } from '../../res/api/api';


let isDarkMode = null;

const StackOverFlowUSer = (props) => {

    const { colorScheme, setColorSchame, userQuestions, setUserQuestions } = useContext(Cyrus_Context);

    const [userId, setUserId] = useState('');
    const [loading, setLoading] = useState(false);

    const { items } = userQuestions || {};
    let owner = items?.[0]?.owner;

    isDarkMode = colorScheme === 'dark';

    const toggleSwitch = () => {
        setColorSchame(isDarkMode ? 'light' : 'dark');
    };


    const onChangeText = (val) => {
        setUserId(val)
    }

    const getUserFromApi = (text) => {
        setLoading(true); 
        getUserFromStackOverFlow(text)
            .then(res => {
                setLoading(false)
                setUserQuestions(res);
            })
    }

    const clearUser = () => {
        setUserId('');
        setUserQuestions(null);
    }


    const params = {
        switch: {
            trackColor: { false: "#767577", true: "#81b0ff" },
            thumbColor: isDarkMode ? "#f5dd4b" : "gray",
            onValueChange: toggleSwitch,
            value: !isDarkMode,
            style: styles.switch,
        },
        input: {
            value: userId,
            onChangeText: (val) => onChangeText(val),
            placeholder: strings.user_id,
            clearText: () => clearUser(),
            onSubmitEditing: (text) => getUserFromApi(text)
        },

    }

    return (
        <View style={styles.container()}>
            <Switch {...params.switch} />
            <Text style={styles.colorSchemeText()} >{colorScheme}</Text>

            <Text style={styles.mainScreenTitle()} >{strings.mainScreenTitle}</Text>

            <Input {...params.input} />

            {loading && <Loader/>}

            { userQuestions && <View style={{ flex: 1 }}>
                <Profile data={owner} />
                <SortTabs />
                <Questions />
            </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: () => ({
        flex: 1,
        backgroundColor: isDarkMode ? 'black' : '#ffff',
    }),
    switch: {
        marginRight: 20,
        marginTop: 30,
    },
    colorSchemeText: () => ({
        ...globalStyle.Rubik(12, isDarkMode),
        alignSelf: 'flex-end',
        marginRight: 33,
        marginTop: 7
    }),
    mainScreenTitle: () => ({
        ...globalStyle.Rubik_bold(24, isDarkMode),
        alignSelf: 'center',
        marginTop: 20
    }),
})

export default StackOverFlowUSer;
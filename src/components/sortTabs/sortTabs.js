import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import SortTab from './sortTab';

const SortTabs = (props) => {

    const renderTabs = () => {
        let tabsArr = [
            'Date',
            'Answers',
            'Views'
        ]

        return tabsArr.map(tab => <SortTab text={tab} />)
    }

    return (
        <View style={styles.container()}>
            {renderTabs()}
        </View>
    )

}

const styles = StyleSheet.create({
    container: () => ({
        flexDirection: 'row',
        alignSelf: 'center',
    })
})

export default SortTabs;
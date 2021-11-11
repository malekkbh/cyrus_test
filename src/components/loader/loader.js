import React from 'react';
import { ActivityIndicator } from 'react-native';

const Loader = (props) => {
    return <ActivityIndicator size={'small'} style={{ alignSelf: 'center' , height: 50 }} />
}

export default Loader;
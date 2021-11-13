import React from 'react';
import { ActivityIndicator } from 'react-native';

const Loader = (props) => {
    return <ActivityIndicator size={'small'} style={{ alignSelf: 'center' , height: 50 , marginTop: 30  }} />
}

export default Loader;
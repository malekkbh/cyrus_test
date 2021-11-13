import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { colors, globalStyle } from '../src/res';
import Cyrus_Context from './Cyrus_Context';

var timer = null;
const Cyrus_Provider = (props) => {
  const [colorScheme, setColorSchame] = useState(null);
  const [choosenSortTab, setChoosenSortTab] = useState('Date');
  const [userQuestions, setUserQuestions] = useState({});

  const setColorSchame_inSorage = (val) => {
    setColorSchame(val);
    AsyncStorage.setItem('colorScheme', val);
    colors.colorScheme = val;
  }

  return (
    <Cyrus_Context.Provider
      value={{
        colorScheme,
        setColorSchame,
        choosenSortTab,
        setChoosenSortTab,
        userQuestions,
        setUserQuestions,
      }}>
      {props.children}
    </Cyrus_Context.Provider>
  );
};

export default Cyrus_Provider;

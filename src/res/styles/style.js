import React from 'react';
import { StyleSheet } from 'react-native';
import { Fonts } from '../../assets/fonts/fontsIndex';
import colors from '../colors/colors';

const setTopRadios = (x) => {
  return { borderTopLeftRadius: x, borderTopRightRadius: x };
};

const setBottomRadios = (x) => {
  return { borderBottomLeftRadius: x, borderBottomRightRadius: x };
};


const globalStyle = StyleSheet.create({
  SHADOW: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    elevation: 5,
    borderWidth: 0.001,
  },
  setBottomRadios: (x) => setBottomRadios(x),
  setTopRadios: (x) => setTopRadios(x),

  horizontalScroll: {
    // width: '100%',
    transform: [{ rotateY: '180deg' }],
  },

  /** Fonts */
  Rubik: (fontSize, isDarkMode) => ({
    color: isDarkMode ? '#ffff' : colors.main_black,
    fontSize: fontSize,
    fontFamily: Fonts.Rubik,
  }),
  Rubik_bold: (fontSize, isDarkMode) => ({
    fontSize: fontSize,
    fontFamily: Fonts.Rubik_bold,
    color: isDarkMode ? '#ffff' : colors.main_black,
  }),
});

export default globalStyle;

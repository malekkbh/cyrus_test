import React from 'react';
import {StyleSheet} from 'react-native';
import {Fonts} from '../../assets/fonts/fontsIndex';
import colors from '../colors/colors';

const setTopRadios = (x) => {
  return {borderTopLeftRadius: x, borderTopRightRadius: x};
};

const setBottomRadios = (x) => {
  return {borderBottomLeftRadius: x, borderBottomRightRadius: x};
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
    borderWidth: 0.001 , 
  },
  setBottomRadios: (x) => setBottomRadios(x),
  setTopRadios: (x) => setTopRadios(x),

  horizontalScroll: {
    // width: '100%',
    transform: [{rotateY: '180deg'}],
  },

  /** Fonts */
  /** regluar */
  Rubik_14: {
    fontFamily: Fonts.Rubik,
    fontSize: 14,
    color: colors.main_black,
  },
  Rubik_13: {
    fontFamily: Fonts.Rubik,
    fontSize: 13,
    color: colors.main_black,
  },
  Rubik_16: {
    fontFamily: Fonts.Rubik,
    fontSize: 16,
    color: colors.main_black,
  },
  Rubik_15: {
    fontFamily: Fonts.Rubik,
    fontSize: 15,
    color: colors.main_black,
  },
  Rubik_22: {
    fontFamily: Fonts.Rubik,
    fontSize: 22,
    color: colors.main_black,
  },
  Rubik_12: {
    color: colors.main_black,
    fontSize: 12,
    fontFamily: Fonts.Rubik,
  },

  /** Bold */
  Rubik_Bold_12: {
    color: colors.main_black,
    fontSize: 12,
    fontFamily: Fonts.Rubik_bold,
  },
  Rubik_Bold_16: {
    fontFamily: Fonts.Rubik_bold,
    fontSize: 16,
    color: colors.main_black,
  },
  Rubik_Bold_23: {
    fontSize: 23,
    fontFamily: Fonts.Rubik_bold,
    color: colors.main_black,
  },
  Rubik_Bold_14: {
    fontFamily: Fonts.Rubik_bold,
    fontSize: 14,
    color: colors.main_black,
  },
  Rubik_bold: (fontSize) => ({
    fontSize: fontSize,
    fontFamily: Fonts.Rubik_bold,
    color: colors.main_black,
  }),

  /** light */
  Rubik_Light_18: {
    fontSize: 18,
    fontFamily: 'Rubik-Light',
    color: colors.main_black,
  },
  Rubik_Light_16: {
    fontSize: 16,
    fontFamily: 'Rubik-Light',
    color: colors.main_black,
  },

  /** medium */

  Rubik_Meduim_15: {
    fontSize: 15,
    fontFamily: 'Rubik-Medium',
    color: colors.main_black,
  },
  Rubik_Meduim_10: {
    fontSize: 10,
    fontFamily: 'Rubik-Medium',
    color: colors.main_black,
  },

  /** white */
  Rubik_17_white: {
    color: '#ffff',
    fontSize: 17,
    fontFamily: 'Rubik',
  },
});

export default globalStyle;

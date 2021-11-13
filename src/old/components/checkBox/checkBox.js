/**
 * Checkbox Component
 */
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { colors, globalStyle, sizes } from '../../../res';
import { Platform } from 'react-native';

/** padding right by platform */
const CBpaddingRight = Platform.OS == 'ios' ? 0 : 10;

const CheckBoxComponent = (props) => {
  const touchableProps = {
    style: styles.container,
    onPress: () => props.onValueChange?.(!props.check),
  };

  const cbLinkProps = [
    styles.link,
    // styles.h3(props.font),
    props.error && { color: colors.error_red },
  ];

  const cbTextProps = [styles.h3, props.error && { color: colors.error_red }];

  const cbProps = {
    value: props.check,
    onValueChange: (val) => {
      props.onValueChange?.(val);
    },
    style: styles.cb,
    lineWidth: 1,
    tintColors: { true: colors.mainBlue },
  };

  return (
    <TouchableOpacity {...touchableProps}>
      <View style={styles.cbContainer}>

        <Text style={cbTextProps}>{props.text}</Text>

        <CheckBox {...cbProps} />

        <Text style={cbTextProps}>{props.error}</Text>

      </View>
    </TouchableOpacity>
  );
};

const cbSize = Platform.OS == 'ios' ? 14 : 15;

const styles = StyleSheet.create({
  container: {
    width: sizes.PageWidth * 0.6,
    alignSelf: 'center',
    // borderWidth:1 ,
    marginTop: 30,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  cb: {
    width: cbSize,
    height: cbSize,
    marginTop: 5,
    // marginLeft: 10,
    marginRight: 15,
  },
  cbContainer: {
    width: '100%',
    // alignSelf: 'center',
    alignItems: 'flex-start',
    justifyContent: 'flex-end', 
    paddingRight: CBpaddingRight,
    flexDirection: 'row-reverse',
    // borderWidth: 1,
    // paddingRight: 30
  },
  h3: {
    ...globalStyle.Rubik_16,
    flexWrap: 'wrap',
    marginTop: 2
  },
  h1: {
    //  lineHeight:0
  },
  linkText: {
    ...globalStyle.Rubik_Bold_16,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // marginTop: 18,
    width: '70%',
    flexWrap: 'wrap',
    // borderWidth:1 , 
    marginRight: 10,
  },
  link: {
    textDecorationLine: 'underline',
  },
  linkTouchable: {
    // borderWidth: 1,
    // paddingBottom: -10 ,
    // marginTop: -4,
  },
});

export default CheckBoxComponent;

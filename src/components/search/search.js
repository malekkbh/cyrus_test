import React, { useEffect, useRef, useState } from 'react';
import { Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import imagesIndex from '../../assets/images/imagesIndex';
import { colors, globalStyle, sizes, strings } from '../../res';

const Search = (props) => {
  const [searchText, setSeachText] = useState('');
  const [isFoucus, setIsFocus] = useState(false);

  const inputRef = useRef(null);
  let searchIcon = isFoucus ? imagesIndex.searchIcon_black() : imagesIndex.searchIcon_white();

  const params = {
    input: {
      ref: inputRef,
      placeholder: props.placeHolder || strings.search_place_holder,
      placeholderTextColor: colors.place_holder_color,
      style: styles.input,
      onChangeText: (val) => onChangeText(val),
      value: searchText,
      onFocus: () => onfocus(),
      onBlur: () => onblur(),
      editable: !props.textDisabled,
      autoFocus: props.autoFocus,
      pointerEvents: props.textDisabled ? 'none' : 'auto',
    },
    image: {
      source: searchIcon,
      style: styles.image,
      resizeMode: 'contain',
    },
    scopeTouchable: {
      onPress: props.imagePress || {},
    },
    x: {
      source: imagesIndex.black_X(),
      style: styles.x,
      resizeMode: 'contain',
    },
    xTouchable: {
      onPress: () => cleanAndBlurText(),
      style: styles.xTouchable,
    },
    mainContainer: {
      style: [styles.container, isFoucus && styles.focus, props.style],
      onPress: props.onSearchPress,
    },
  }; //params

  const onfocus = () => {
    props.onfocus?.();
    setIsFocus(true);
  }

  const onblur = () => {
    props.onblur?.();
    setIsFocus(false);
    searchText?.length < 2 && setSeachText('');
  }

  const cleanAndBlurText = () => {
    onChangeText('');
    props.onblur?.();
    inputRef.current?.blur();
    props.resetData?.();
  };

  const onChangeText = async (val) => {
    setSeachText(val);
    await props.onChangeText?.(val);
  };

  const handelEvent = () => {
    if (props.handelEvent === 'cleanAndBlurText') {
      cleanAndBlurText();
    }
  };

  useEffect(() => {
    handelEvent();
  }, [props.handelEvent]);

  useEffect(() => {
    if (props.searchText)
      onChangeText(props.searchText)
  }, [props.searchText]);

  return (
    <TouchableOpacity {...params.mainContainer}>
      {searchText?.length > 0 && (
        <TouchableOpacity {...params.xTouchable}>
          <Image {...params.x} />
        </TouchableOpacity>
      )}
      <TextInput {...params.input} />
      <Image {...params.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    borderColor: colors.border_color,
    width: sizes.PageWidth - 32,
    height: 40,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 6,
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#ffff' //'rgba(223, 239, 238, 0.5)',
  },
  image: {
    width: 27,
    height: 27,
    marginRight: 7,
    marginLeft: 11,
  },
  input: {
    ...globalStyle.Rubik_15,
    // textAlign: 'right',
    // borderWidth: 1 ,
    flex: 1,
    height: '100%',
  },
  focus: {
    borderColor: colors.main_black,
    borderWidth: 1,
  },
  x: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
    marginLeft: 17

    // backgroundColor: 'red',
  },
  xTouchable: {
    padding: 16,
    marginLeft: -20
  },
});

export default Search;

import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {colors} from '../../../res';

const CyrusModal = (props) => {
  const params = {
    modal: {
      visible: props.modalVisible,
      style: styles.container,
      transparent: true,
    },
  };

  return (
    <Modal {...params.modal}>
      <View style={styles.innerContainer}>{props.children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: colors.modalBG,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CyrusModal;

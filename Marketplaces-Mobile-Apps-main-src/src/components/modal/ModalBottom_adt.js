import React from 'react';
import {View, Modal, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {TextBold, TextRegular} from '../global/Text';
import {Colors} from '../../styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ModalBottom_adt = ({show, onClose, title = 'Status', children}) => {
  return (
    <Modal transparent visible={show} onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={styles.header}>{children}</View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  body: {
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});

export default ModalBottom_adt;

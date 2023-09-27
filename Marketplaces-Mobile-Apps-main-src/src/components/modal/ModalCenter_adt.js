import React from 'react';
import {View, Modal, TouchableOpacity, StyleSheet, Text, Dimensions} from 'react-native';
import {TextBold, TextRegular} from '../global/Text';
import {Colors} from '../../styles';
import Icon from 'react-native-vector-icons/AntDesign';

const ModalCenter_adt = ({show, title, onClose, children}) => {
  return (
    <Modal transparent visible={show} onRequestClose={onClose}>
      <View
        style={styles.container}>
        <View style={styles.body}>
          <View style={styles.header}>
          {children}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding:16,
    alignSelf:'center',
  },
  body: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent:'center',
  },
});

export default ModalCenter_adt;

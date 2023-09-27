import React from 'react';
import {View, Modal, TouchableOpacity, StyleSheet, Text, Dimensions} from 'react-native';
import {TextBold, TextRegular} from '../global/Text';
import {Colors} from '../../styles';
import Icon from 'react-native-vector-icons/AntDesign';

const ModalCenter2_adt = ({show, title, onClose, children}) => {
  return (
    <Modal transparent visible={show} onRequestClose={onClose}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.4)',
        }}>
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
    padding:16
  },
  body: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ModalCenter2_adt;

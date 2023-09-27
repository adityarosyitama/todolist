import React from 'react';
import {Modal, View, ActivityIndicator} from 'react-native';
import {Colors} from '../../styles';

const Loader = ({show, close}) => {
  return (
    <Modal transparent visible={show}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.4)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator
          color={Colors.PRIMARY_BLUE}
          size="large"
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 5,
            transform: [{rotate: '45deg'}],
          }}
        />
        <ActivityIndicator
          color={Colors.RED_1}
          size="small"
          style={{position: 'absolute', transform: [{rotateX: '180deg'}]}}
        />
      </View>
    </Modal>
  );
};

export default Loader;

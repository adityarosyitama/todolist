import React from 'react';
import {View, Text} from 'react-native';
import {BiometryType} from 'react-native-biometrics';
import {useNavigation} from '@react-navigation/core';

const ComponentBiometric = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Ini Biometrik</Text>
    </View>
  );
};

export default ComponentBiometric;

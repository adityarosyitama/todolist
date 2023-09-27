import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../../styles';

const ChangePointComponent = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: Colors.WHITE}}>
      <View style={{padding: 16}}>
        <Text>Change Point Screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChangePointComponent;

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RegisterComponent from '../../components/section/Auth/RegisterComponent';

const Register = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <RegisterComponent navigation={navigation} />
      <Text>Register</Text>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});

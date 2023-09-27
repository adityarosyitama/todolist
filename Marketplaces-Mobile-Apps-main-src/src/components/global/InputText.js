import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {Colors} from '../../styles';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Fontisto';

export const InputText = ({
  placeholderText = 'Masukkan Email',
  placeholderTextColor = 'grey',
  isPassword = false,
  showPassword = false,
  setShowPassword,
  multiline = false,
  numberOfLines = 1,
  onChangeText,
  value,
  style,
  typeOfInput = '',
  keyboardType = 'default',
}) => {
  return (
    <View style={[styles.container, style]}>
      {(() => {
        if (typeOfInput === 'email') {
          return (
            <Icon
              name="mail"
              size={17}
              style={{marginHorizontal: 10}}
              color={Colors.DEEPBLUE}
            />
          );
        } else if (typeOfInput === 'password') {
          return (
            <Icon2
              name="locked"
              size={17}
              style={{marginHorizontal: 10}}
              color={Colors.DEEPBLUE}
            />
          );
        }
      })()}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
        }}>
        <TextInput
          placeholder={placeholderText}
          placeholderTextColor={placeholderTextColor}
          style={{
            width: typeOfInput ? '80%' : '90%',
          }}
          multiline={multiline}
          numberOfLines={numberOfLines}
          secureTextEntry={showPassword}
          onChangeText={text => onChangeText(text)}
          value={value}
          keyboardType={keyboardType}
        />
        {isPassword ? (
          <TouchableOpacity
            style={{
              width: '10%',
              justifyContent: 'center',
            }}
            onPress={() => setShowPassword()}>
            {showPassword ? (
              <Icon name="eye" size={17} />
            ) : (
              <Icon name="eye-with-line" size={17} />
            )}
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderColor: '#dedede',
    borderWidth: 1,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

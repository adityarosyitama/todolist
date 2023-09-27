import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {TextBold, TextMedium, TextRegular} from './Text';
import {Colors} from '../../styles';
import Icon from 'react-native-vector-icons/AntDesign';

export const Header = ({
  title = 'Header',
  titleSize = 14,
  titleColor = Colors.BLACK,
  onPressBack,
  iconBackColor = Colors.BLACK,
  isBoldTitle = false,
  iconRight,
  iconRightSize = 18,
  onPressRight,
  backgroundHeader = Colors.WHITE,
  titleCenter = false,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: backgroundHeader,
        },
      ]}>
      {onPressBack && (
        <TouchableOpacity
          onPress={onPressBack}
          style={{
            width: '10%',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}>
          <Icon name="arrowleft" size={18} color={iconBackColor} />
        </TouchableOpacity>
      )}
      <View
        style={{
          width: '80%',

          alignItems: titleCenter ? 'center' : 'flex-start',
        }}>
        {isBoldTitle ? (
          <TextBold text={title} size={titleSize} color={titleColor} />
        ) : (
          <TextRegular text={title} size={titleSize} color={titleColor} />
        )}
      </View>
      {iconRight && (
        <TouchableOpacity onPress={onPressRight}>
          <Image
            source={iconRight}
            style={{width: iconRightSize, height: iconRightSize}}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

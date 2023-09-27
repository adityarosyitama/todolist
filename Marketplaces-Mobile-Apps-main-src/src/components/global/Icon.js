import {Mixins} from '../../styles';
import React from 'react';
import {Image} from 'react-native';

export const Icon = ({icon, size = 25, color, style}) => {
  return (
    <Image
      source={icon}
      resizeMode="contain"
      style={[
        style,
        {
          width: Mixins.scaleSize(size),
          height: Mixins.scaleSize(size),
          tintColor: color,
        },
      ]}
    />
  );
};

import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Typography, Mixins} from '../../styles';

export const TextRegular = ({text, numberOfLines, size = 14, color, style}) => {
  return (
    <Text
      style={[
        styles.regularText,
        {
          fontSize: Mixins.scaleFont(size),
          color: color,
          lineHeight: size * 1.2,
        },
        style,
      ]}
      numberOfLines={numberOfLines}>
      {text}
    </Text>
  );
};

export const TextMedium = ({text, numberOfLines, size = 14, color, style}) => {
  return (
    <Text
      style={[
        styles.semiBoldText,
        {
          fontSize: Mixins.scaleFont(size),
          color: color,
          lineHeight: size * 1.2,
        },
        style,
      ]}
      numberOfLines={numberOfLines}>
      {text}
    </Text>
  );
};

export const TextBold = ({text, numberOfLines, size = 14, color, style}) => {
  return (
    <Text
      style={[
        styles.boldText,
        {
          fontSize: Mixins.scaleFont(size),
          color: color,
          lineHeight: size * 1.2,
        },
        style,
      ]}
      numberOfLines={numberOfLines}>
      {text}
    </Text>
  );
};

export const TextItalic = ({text, numberOfLines, size = 14, color, style}) => {
  return (
    <Text
      style={[
        styles.italicText,
        {
          fontSize: Mixins.scaleFont(size + 1),
          color: color,
          lineHeight: size * 1.2,
        },
        style,
      ]}
      numberOfLines={numberOfLines}>
      {text}
    </Text>
  );
};

export const TextBoldItalic = ({
  text,
  numberOfLines,
  size = 14,
  color,
  style,
}) => {
  return (
    <Text
      style={[
        styles.boldItalicText,
        {
          fontSize: Mixins.scaleFont(size),
          color: color,
          lineHeight: size * 1.2,
        },
        style,
      ]}
      numberOfLines={numberOfLines}>
      {text}
    </Text>
  );
};

export const TextLight = ({text, numberOfLines, size = 14, color, style}) => {
  return (
    <Text
      style={[
        styles.lightText,
        {
          fontSize: Mixins.scaleFont(size),
          color: color,
          lineHeight: size * 1.2,
        },
        style,
      ]}
      numberOfLines={numberOfLines}>
      {text}
    </Text>
  );
};

export const TextLightItalic = ({
  text,
  numberOfLines,
  size = 14,
  color,
  style,
}) => {
  return (
    <Text
      style={[
        styles.lightItalicText,
        {
          fontSize: Mixins.scaleFont(size),
          color: color,
          lineHeight: size * 1.2,
        },
        style,
      ]}
      numberOfLines={numberOfLines}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  regularText: Typography.FONT_REGULAR,
  semiBoldText: Typography.FONT_SEMI_BOLD,
  boldText: Typography.FONT_BOLD,
  italicText: Typography.FONT_ITALIC,
  boldItalicText: Typography.FONT_BOLD_ITALIC,
  lightText: Typography.FONT_LIGHT,
  lightItalicText: Typography.FONT_LIGHT_ITALIC,
});

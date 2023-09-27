import {Image, StyleSheet, View} from 'react-native';
import {Colors} from '../../styles';
import React, {useEffect} from 'react';
import version from '../../../package.json';
import {TextMedium} from '../../components/global/Text';

const Splashscreen = ({navigation, route}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('AuthNavigation');
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../asset/images/logocsicopy.png')}
        style={styles.img}
      />
      <TextMedium
        text={'Versi ' + version.version}
        style={{alignSelf: 'center'}}
      />
    </View>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

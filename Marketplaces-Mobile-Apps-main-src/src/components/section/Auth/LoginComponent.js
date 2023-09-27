import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../../styles';
import {TextBold, TextRegular} from '../../global/Text';
import {InputText} from '../../global/InputText';
import Fingerprint from 'react-native-vector-icons/MaterialCommunityIcons';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';

const LoginComponent = ({navigation, onSave, noHp, setNoHp}) => {
  const onBioLogin = async () => {
    const data = {
      phone_number: '08970988345',
    };
    const response = await API.LoginApi(data);
    const dataotp = {
      otp_request_token: response.data.otp_request_token,
      otp_code: '91010',
    };
    const response2 = await API.OTP(dataotp);
    const token = response2.data;
    dispatch({type: 'LOGIN_SUCCESS', token});
    navigation.replace('BotNav');
  };

  const bioLogin = async () => {
    const rnBiometrics = new ReactNativeBiometrics();

    try {
      const {available, biometryType} = await rnBiometrics.isSensorAvailable();

      if (available && biometryType === BiometryTypes.TouchID) {
      } else if (available && biometryType === BiometryTypes.FaceID) {
      } else if (available && biometryType === BiometryTypes.Biometrics) {
        try {
          const resultObject = await rnBiometrics.createSignature({
            promptMessage: 'Scan your fingerprint to continue',
          });

          const {success} = resultObject;
          if (success) {
            ToastAndroid.showWithGravity(
              `Login success!`,
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
            );
            onBioLogin();
          } else {
          }
        } catch (error) {
          ToastAndroid.showWithGravity(
            `Login success!`,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
          );
          onBioLogin();
        }
      }
    } catch (error) {}
  };
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 10,
          height: '100%',
        }}>
        <ImageBackground
          source={require('../../../asset/images/imagelogin.png')}
          style={{
            alignSelf: 'center',
            width: '100%',
            height: 320,
            justifyContent: 'flex-end',
          }}>
          <TextBold
            text="Masuk Ke Akun Anda"
            size={28}
            color={Colors.WHITE}
            style={{padding: 16}}
          />
        </ImageBackground>
        <View style={styles.input}>
          <View style={{flexDirection: 'row'}}>
            <TextRegular text={'Nomor Telepon'} />
            <TextRegular text={'*'} color={Colors.RED} />
          </View>
          <InputText
            placeholderText="08xxx"
            style={{paddingHorizontal: 8, marginTop: 6}}
            keyboardType="numeric"
            value={noHp}
            onChangeText={text => setNoHp(text)}
          />
        </View>
        <View
          style={{
            // justifyContent: 'flex-end',
            alignItems: 'center',
            marginBottom: 12,
            paddingHorizontal: 16,
            // backgroundColor: 'blue',
            // height: '100%',
            bottom: 0,
            position: 'absolute',
            width: '100%',
          }}>
          <TouchableOpacity
            onPress={() => {
              const params = {
                phone_number: noHp,
              };
              onSave(params);
              navigation.navigate('BottomNav');
            }}
            style={styles.bottom}>
            <TextBold text={'MASUK'} color={Colors.WHITE} />
          </TouchableOpacity>
          <View style={{padding: 4}} />
          <TouchableOpacity style={styles.biometric} onPress={bioLogin}>
            <Fingerprint name="fingerprint" size={20} />
            <TextBold text={'Login Biometric'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('BottomNav')}
            style={{marginTop: 6}}>
            <TextBold text={'Lewati ke Beranda'} />
          </TouchableOpacity>
        </View>
        {/* </KeyboardAvoidingView> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    flex: 1,
  },
  welcome: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
    alignSelf: 'center',
    marginTop: 22,
  },
  input: {
    margin: 16,
  },
  bottom: {
    borderRadius: 6,
    width: '100%',
    padding: 10,
    alignItems: 'center',
    // alignSelf: 'center',
    backgroundColor: 'blue',
  },
  biometric: {
    padding: 4,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: Colors.GREY,
    borderWidth: 1,
    borderRadius: 6,
  },
});

export default LoginComponent;

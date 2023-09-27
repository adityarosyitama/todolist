import {BackHandler, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import LoginComponent from '../../components/section/Auth/LoginComponent';
import {Colors} from '../../styles';
import apiProvider from '../../utils/service/apiProvider';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {useEffect} from 'react';

const Login = ({navigation}) => {
  const [Nohp, setNohp] = useState('');
  const isFocused = useIsFocused();
  const [requestToken, setRequestToken] = useState('');
  const dispatch = useDispatch();
  const {loginData, isLoggedIn} = useSelector(state => state.login);

  const onSave = async params => {
    const response = await apiProvider.postDataLogin(params);
    const token = await apiProvider.postDataToken(
      response.data.otp_request_token,
    );
    const data = {
      requestToken: response.data.otp_request_token,
      id: params,
      token: token.data.data.api_token,
    };
    dispatch({type: 'ADD_DATA_LOGIN', data: data});
    navigation.replace('BottomNav');
  };

  const onUpdateToken = async () => {
    const response = await apiProvider.postDataLogin(loginData.id);
    const token = await apiProvider.postDataToken(
      response.data.otp_request_token,
    );
    const data = {
      requestToken: response.data.otp_request_token,
      id: loginData.id,
      token: token.data.data.api_token,
    };
    dispatch({type: 'ADD_DATA_LOGIN', data: data});
  };

  useEffect(() => {
    if (isLoggedIn != false) {
      onUpdateToken();
      navigation.replace('BottomNav');
    } else {
    }
  }, [isFocused]);

  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp(); // Keluar dari aplikasi ketika komponen ini di-render
      return true; // Mencegah perilaku bawaan tombol kembali
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove(); // Membersihkan event listener saat komponen di-unmount
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: Colors.WHITE}}>
      <LoginComponent
        navigation={navigation}
        onSave={onSave}
        noHp={Nohp}
        setNoHp={setNohp}
      />
    </View>
  );
};
export default Login;
const styles = StyleSheet.create({});

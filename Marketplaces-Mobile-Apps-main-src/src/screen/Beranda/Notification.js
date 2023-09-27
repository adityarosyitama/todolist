import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Color,
  FontFamily,
  FontSize,
  Padding,
  Border,
} from '../../component/global/GlobalStyles';
import BerandaComponent from '../../components/section/Beranda/BerandaComponent';
import {useSelector} from 'react-redux';
import apiProvider from '../../utils/service/apiProvider';
import {useIsFocused} from '@react-navigation/native';
import {useEffect} from 'react';
import {useState} from 'react';
import NotificationComponent from '../../components/section/Beranda/NotificationComponent';

const Notification = ({navigation, route}) => {
  const isFocused = useIsFocused();
  const {loginData, isLoggedIn} = useSelector(state => state.login);
  const [notification, setNotification] = useState('');
  const postReadNotification = async id => {
    const response = await apiProvider.postReadNotification(
      loginData.token,
      id,
    );
  };
  const getNotification = async () => {
    const response = await apiProvider.getNotification(loginData.token);
    if (response) {
      setNotification(response);
    }
  };
  useEffect(() => {
    getNotification();
  }, [isFocused]);
  return (
    <NotificationComponent
      notification={notification}
      postReadNotification={value => postReadNotification(value)}
    />
  );
};

export default Notification;

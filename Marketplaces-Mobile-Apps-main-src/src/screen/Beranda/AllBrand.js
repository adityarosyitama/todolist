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
import AllBrandComponent from '../../components/section/Beranda/AllBrandComponent';

const AllBrand = ({navigation}) => {
  const isFocused = useIsFocused();
  const {loginData, isLoggedIn} = useSelector(state => state.login);
  const [allBrand, setAllBrand] = useState('');

  const getAllBrand = async () => {
    const response = await apiProvider.getAllBrand(loginData.token);
    if (response) {
      setAllBrand(response);
    }
  };
  useEffect(() => {
    getAllBrand();
  }, [isFocused]);
  return allBrand ? <AllBrandComponent navigation={navigation} allBrand={allBrand} /> : null;
};

export default AllBrand;

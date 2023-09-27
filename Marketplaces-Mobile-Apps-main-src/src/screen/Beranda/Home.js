import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BerandaComponent from '../../components/section/Beranda/BerandaComponent';
import {useDispatch, useSelector} from 'react-redux';
import apiProvider from '../../utils/service/apiProvider';
import {useIsFocused} from '@react-navigation/native';
import {useEffect} from 'react';
import {useState} from 'react';

const Home = ({navigation}) => {
  const isFocused = useIsFocused();
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [lastSeen, setLastSeen] = useState('');
  const [notification, setNotification] = useState('');
  const [categoryHome, setCategoryHome] = useState('');
  const [brandHome, setBrandHome] = useState('');
  const [section, setSection] = useState('');
  const [productFocus, setProductFocus] = useState('');
  const [productPopular, setProductPopular] = useState('');
  const {loginData, isLoggedIn} = useSelector(state => state.login);
  const dispatch = useDispatch();
  const getCategory = async () => {
    const response = await apiProvider.getCategory(loginData.token);
    if (response) {
      setCategory(response);
    }
  };
  const getBrand = async () => {
    const response = await apiProvider.getBrand(loginData.token);
    if (response) {
      setBrand(response);
    }
  };
  const getLastSeen = async () => {
    const response = await apiProvider.getLastSeen(loginData.token);
    if (response) {
      setLastSeen(response);
    }
  };
  const getNotification = async () => {
    const response = await apiProvider.getNotification(loginData.token);
    if (response) {
      setNotification(response);
    }
  };
  const getCategoryHome = async id => {
    const response = await apiProvider.getCategoryHome(loginData.token, id);
    if (response) {
      setCategoryHome(response.data);
    }
  };
  const getBrandHome = async id => {
    const response = await apiProvider.getCategoryHome(loginData.token, id);
    if (response) {
      setBrandHome(response.data);
    }
  };
  const getProdukFokus = async id => {
    const response = await apiProvider.getCategoryHome(loginData.token, id);
    if (response) {
      setProductFocus(response.data);
    }
  };
  const getProdukPopuler = async id => {
    const response = await apiProvider.getCategoryHome(loginData.token, id);
    if (response) {
      setProductPopular(response.data);
    }
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
  const getSection = async () => {
    const response = await apiProvider.getSection(loginData.token);
    if (response) {
      if (response?.data) {
        for (var i in response.data) {
          if (response.data[i].type === 'category') {
            getCategoryHome(response.data[i].id);
          } else if (response.data[i].type === 'brand') {
            getBrandHome(response.data[i].id);
          } else if (
            response.data[i].type === 'product' &&
            response.data[i].title === 'Produk Fokus'
          ) {
            getProdukFokus(response.data[i].id);
          } else if (
            response.data[i].type === 'product' &&
            response.data[i].title === 'Produk Terpopuler'
          ) {
            getProdukPopuler(response.data[i].id);
          }
        }
      }
    }
  };

  useEffect(() => {
    onUpdateToken();
    getCategory();
    getBrand();
    getLastSeen();
    getNotification();
    getSection();
  }, [isFocused]);

  return notification != null && lastSeen != null ? (
    <BerandaComponent
      navigation={navigation}
      category={category}
      brand={brand}
      lastSeen={lastSeen}
      notification={notification}
      categoryHome={categoryHome}
      brandHome={brandHome}
      productFocus={productFocus}
      productPopular={productPopular}
    />
  ) : null;
};

export default Home;

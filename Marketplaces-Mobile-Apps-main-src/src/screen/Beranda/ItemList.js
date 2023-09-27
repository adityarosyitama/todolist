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
import {useDispatch, useSelector} from 'react-redux';
import apiProvider from '../../utils/service/apiProvider';
import {useIsFocused} from '@react-navigation/native';
import {useEffect} from 'react';
import {useState} from 'react';
import ItemListComponent from '../../components/section/Beranda/ItemListComponent';

const ItemList = ({navigation, route}) => {
  const idCek = route.params.id === undefined ? '' : route.params.id;
  const title = route.params.Name === undefined ? '' : route.params.Name;
  const cek = route.params.Cek === undefined ? '' : route.params.Cek;
  const isFocused = useIsFocused();
  const {loginData, isLoggedIn} = useSelector(state => state.login);
  const TOKEN = loginData.token
  const [ItemList, setItemList] = useState('');

  const getItemList = async () => {
    const response = await apiProvider.getItemList(TOKEN, idCek, cek);
    if (response) {
      setItemList(response);
    }
  };
  useEffect(() => {
    getItemList();
  }, [isFocused]);
  return (
    <ItemListComponent
      navigation={navigation}
      ItemList={ItemList}
      title={title}
    />
  );
};

export default ItemList;

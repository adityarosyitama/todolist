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
import SubCategoryComponent from '../../components/section/Beranda/SubCategoryComponent';

const SubCategory = ({navigation, id}) => {
  const isFocused = useIsFocused();
  const {loginData, isLoggedIn} = useSelector(state => state.login);
  const [subCategory, setSubCategory] = useState('');

  const getSubCategory = async () => {
    const response = await apiProvider.getSubCategory(loginData.token, id);
    if (response) {
      // console.
      log('all category', response);
      setSubCategory(response);
    }
  };
  useEffect(() => {
    getSubCategory();
  }, [isFocused]);
  return SubCategory ? (
    <SubCategoryComponent navigation={navigation} SubCategory={subCategory} />
  ) : null;
};

export default SubCategory;

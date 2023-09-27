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
import AllCategoryComponent from '../../components/section/Beranda/AllCategoryComponent';

const AllCategory = ({navigation}) => {
  const isFocused = useIsFocused();
  const {loginData, isLoggedIn} = useSelector(state => state.login);
  const [AllCategory, setAllCategory] = useState('');
  const [showSub, setShowSub] = useState(0);

  const getAllCategory = async () => {
    const response = await apiProvider.getCategory(loginData.token);
    if (response) {
      setAllCategory(response);
    }
  };
  useEffect(() => {
    getAllCategory();
  }, [isFocused]);

  return AllCategory ? (
    <AllCategoryComponent
      navigation={navigation}
      AllCategory={AllCategory}
      showSub={showSub}
      setShowSub={setShowSub}
    />
  ) : null;
};

export default AllCategory;

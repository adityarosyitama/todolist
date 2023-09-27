import React, {useState, useEffect} from 'react';
import PromoUI from '../../components/section/PromoComponent/PromoComponent';
import APIProvider from '../../utils/service/apiProvider';
import {useSelector} from 'react-redux';
import apiProvider from '../../utils/service/apiProvider';
import {useIsFocused} from '@react-navigation/native';

export default function Promo({navigation, route}) {
  const banner = {uri: 'https://i.ibb.co/q1LJss1/Banner-Campaign.png'};
  const {loginData, isLoggedIn} = useSelector(state => state.login);
  const TOKEN = loginData.token;
  const isFocused = useIsFocused();
  const [promo, setPromo] = useState([]);
  const [detail, setDetail] = useState([]);
  const [brand, setBrand] = useState([]);

  const getBrand = async () => {
    const response = await apiProvider.brands(loginData.token);
    if (response) {
      for (let i = 0; i < response.data.length; i++) {
        const pieces = await APIProvider.show(
          loginData.token,
          response.data[i].id,
        );
      }
    }
  };

  useEffect(() => {
    getBrand();
  }, [isFocused]);

  return (
    <PromoUI
      banner={banner}
      detailCampaign={() => navigation.navigate('Detail Campaign')}
      campaignList={() => navigation.navigate('Campaign')}
      detailPromo={() =>
        navigation.navigate('Detail Promo', {detail: detail, promo: promo})
      }
      list={() =>
        navigation.navigate('List Promo', {promo: promo, detail: detail})
      }
      promo={promo}
      detail={detail}
      token={TOKEN}
    />
  );
}

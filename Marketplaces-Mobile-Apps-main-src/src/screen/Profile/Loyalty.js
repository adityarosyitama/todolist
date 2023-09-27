import React, {useEffect, useState} from 'react';
import LoyaltyComponent from '../../components/section/ComponentProfile/LoyaltyComponent';
import apiProvider from '../../utils/service/apiProvider';
import {useSelector, useDispatch} from 'react-redux';

const Loyalty = ({route, navigation}) => {
  const {loginData} = useSelector(state => state.login);
  const TOKEN = loginData.token;
  const [dataLevel, setDataLevel] = useState('');
  const [dataHistoryPoint, setDataHistoryPoint] = useState('');

  const getLevelPoint = async () => {
    try {
      const response = await apiProvider.getLevel(TOKEN);
      setDataLevel(response);
    } catch (error) {}
  };
  const getHistoryPointData = async () => {
    try {
      const response = await apiProvider.getHistoryPointProfile(TOKEN);
      setDataHistoryPoint(response);
    } catch (error) {}
  };

  useEffect(() => {
    if (loginData.token) {
      getLevelPoint();
      getHistoryPointData();
    }
  }, [loginData.token]);

  return (
    <LoyaltyComponent
      navigation={navigation}
      dataLevel={dataLevel}
      setDataLevel={setDataLevel}
      dataHistoryPoint={dataHistoryPoint}
      setDataHistoryPoint={setDataHistoryPoint}
    />
  );
};

export default Loyalty;

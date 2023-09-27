import React from 'react';
import CartComponent from '../../components/section/Cart/CartComponent';
import {useEffect} from 'react';
import apiProvider from '../../utils/service/apiProvider';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {useState} from 'react';

const Cart = () => {
  const {loginData, isLoggedIn} = useSelector(state => state.login);
  const [data, setData] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    getData();
  }, [isFocused]);

  const getData = async () => {
    const response = await apiProvider.getCart(loginData.token);

    if (response.data.length) {
      setData(response);
    }
  };
  return <CartComponent data={data} />;
};

export default Cart;

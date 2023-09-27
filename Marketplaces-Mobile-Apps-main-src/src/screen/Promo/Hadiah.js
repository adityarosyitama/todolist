import React from 'react';
import HadiahUI from '../../components/section/PromoComponent/HadiahComponent';
import {useDispatch, useSelector} from 'react-redux';
import {setList} from '../../utils/Redux/Promo/Hadiah/actions';
import {useEffect} from 'react';

export default function Hadiah() {
  const dispatch = useDispatch();
  const {list} = useSelector(state => state.list);
  useEffect(() => {
    // Dispatch action untuk mengatur data pada Redux saat komponen DetailCampaign dipasang
    dispatch(setList(list));

    return () => {
      clearTimeout();
    };
  }, []);

  return <HadiahUI data={list} />;
}

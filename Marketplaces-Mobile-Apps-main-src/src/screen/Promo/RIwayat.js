import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setRiwayat} from '../../utils/Redux/Promo/Riwayat/actions';
import RiwayatUI from '../../components/section/PromoComponent/PromoRiwayatComponent';

export default function Riwayat() {
  const dispatch = useDispatch();
  const {riwayat} = useSelector(state => state.riwayat);

  useEffect(() => {
    dispatch(setRiwayat(riwayat));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <RiwayatUI data={riwayat} />;
}

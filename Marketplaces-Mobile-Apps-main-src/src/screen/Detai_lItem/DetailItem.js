import React, {useEffect, useState} from 'react';
import DetailItemComponent from '../../components/section/Detai_lItem/DetailItemComponent';
import {ToastAndroid} from 'react-native';
import moment from 'moment';
import {useIsFocused} from '@react-navigation/native';
import apiProvider from '../../utils/service/apiProvider';
import {useDispatch, useSelector} from 'react-redux';

const DetailItem = ({navigation, route}) => {
  const [deskripsi, setDeskripsi] = useState('');
  //modal top
  const [modalTop, setModalTop] = useState('');
  const [modalTop2, setModalTop2] = useState('');
  const [modal, setModal] = useState('');
  const [modal2, setModal2] = useState('');
  const [modalWarna, setModalWarna] = useState('');
  const [catatan, setCatatan] = useState('');
  const [modalCount, setModalCount] = useState(0);
  const [modalWarnaAvail, setModalWarnaAvail] = useState(['Hitam', 'Putih']);
  const currentTime = moment().format('YYYY-MM-DD HH:mm:ss');
  const handleBuatSekarang = () => {
    ToastAndroid.show('Pembelian akan diproses', ToastAndroid.SHORT);
  };
  //modal top

  //untuk flatlist horizontal image
  const [activeView, setActiveView] = useState(1);
  // const onViewChange = () => {
  //   setActiveView(index);

  // };

  //route menerima id untuk detail product
  const {loginData, isLoggedIn} = useSelector(state => state.login);
  const {idItem} = useSelector(state => state.detailItem);
  const dispatch = useDispatch();
  const id = route.params.id === null ? idItem : route.params.id;
  const TOKEN = loginData.token;
  const [dataProduct, setDataProduct] = useState({});
  const [image_list, setImage_list] = useState({});
  const [dataBrandTerkait, setDataBrandTerkait] = useState({});
  const [dataCategoryTerkait, setDataCategoryTerkait] = useState({});

  const getProduct = async () => {
    try {
      const response = await apiProvider.getProduct(id, TOKEN);
      const dataProduct = response.data;
      setDataProduct(dataProduct);

      const images = dataProduct.images;
      setImage_list(images);

      const nameBrand = dataProduct.brand.name;
      const response2 = await apiProvider.getSearchProduct(
        nameBrand.toString().replace(/ /g, '%2B'),
      );
      const brandTerkait = response2.data.filter(
        data => data.brand.name === dataProduct.brand.name,
      );
      setDataBrandTerkait(brandTerkait);

      const nameCategory = dataProduct.category.name;
      const response3 = await apiProvider.getSearchProduct(
        nameCategory.toString().replace(/ /g, '%2B'),
      );
      const categoryTerkait = response3.data.filter(
        data => data.category.name === dataProduct.category.name,
      );
      setDataCategoryTerkait(categoryTerkait);

 
      dispatch({type: 'RESET_ID'});
      dispatch({type: 'ADD_ID', idItem: id});


    } catch (error) {
      if (error.response.status === 401) {
        navigation.replace('Login');
      } else {
      }
    }
  };
  const isFocused = useIsFocused();
  useEffect(() => {
    getProduct();
  }, [isFocused, id]);

  return (
    <DetailItemComponent
      navigation={navigation}
      getProduct={getProduct}
      dataProduct={dataProduct}
      image_list={image_list}
      dataBrandTerkait={dataBrandTerkait}
      dataCategoryTerkait={dataCategoryTerkait}
      //modal top
      modalTop={modalTop}
      setModalTop={setModalTop}
      modalTop2={modalTop2}
      setModalTop2={setModalTop2}
      modal={modal}
      setModal={setModal}
      modal2={modal2}
      setModal2={setModal2}
      modalWarna={modalWarna}
      setModalWarna={setModalWarna}
      modalWarnaAvail={modalWarnaAvail}
      setModalWarnaAvail={setModalWarnaAvail}
      modalCount={modalCount}
      setModalCount={setModalCount}
      catatan={catatan}
      setCatatan={setCatatan}
      handleBuatSekarang={handleBuatSekarang}
      currentTime={currentTime}
      //DetailItemComponent>>modal top
      deskripsi={deskripsi}
      setDeskripsi={setDeskripsi}
      //>>untuk flatlist horizontal image
      // onViewChange={onViewChange}
      setActiveView={setActiveView}
      activeView={activeView}
      // setActiveIndex1={setActiveIndex1}
      // activeIndex={activeIndex1}
      //>>untuk flatlist horizontal image
    />
  );
};

export default DetailItem;

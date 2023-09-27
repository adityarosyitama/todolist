import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import apiProvider from '../../utils/service/apiProvider';
import TransaksiTab from '../../components/section/Riwayat/RiwayatComponent';

export default function Riwayat({navigation}) {
  //getting data
  const {loginData, isLoggedIn} = useSelector(state => state.login);
  const TOKEN = loginData.token;
  const [transaction, setTransaction] = useState([]);
  const getRiwayatTransaksi = async () => {
    try {
      const transaksiResponse = await apiProvider.getRiwayat(TOKEN);
      const Transaksi = transaksiResponse.data;
      setTransaction(Transaksi);
    } catch (error) {}
  };

  // Fetch data when the component mounts
  useEffect(() => {
    getRiwayatTransaksi();
  }, []);

  //tab switch
  const [activeTab, setActiveTab] = useState('online');

  const handleTabPress = tabName => {
    setActiveTab(tabName);
  };

  //modal
  const [isSortModalVisible, setIsSortModalVisible] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState('all');

  const handleFilterPress = () => {
    setIsSortModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsSortModalVisible(false);
  };

  const handleSort = sortOption => {
    setSelectedSortOption(sortOption);
    setIsSortModalVisible(false);
  };

  const sortData = sortOption => {
    switch (sortOption) {
      case 'all':
        return transaction;
      case 'accepted':
        return transaction.filter(
          transaction => transaction.state === 'Order telah diterima',
        );
      case 'waiting':
        return transaction.filter(
          transaction => transaction.state === 'Menunggu pengiriman',
        );
      case 'shipped':
        return transaction.filter(
          transaction => transaction.state === 'Dikirim',
        );
      case 'completed':
        return transaction.filter(
          transaction => transaction.state === 'Selesai',
        );
      default:
        return transaction;
    }
  };

  const filteredData = sortData(selectedSortOption);

  return (
    <TransaksiTab
      array={filteredData}
      navigation={navigation}
      onlineTab={() => handleTabPress('online')}
      offlineTab={() => handleTabPress('offline')}
      activeTab={activeTab}
      modalVisible={isSortModalVisible}
      selectedSort={selectedSortOption}
      modalShowing={handleFilterPress}
      modalClosing={handleCloseModal}
      sortingData={handleSort}
    />
  );
}

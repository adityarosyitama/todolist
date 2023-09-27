import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {setData} from '../../utils/Redux/Promo/DetailCampaign/actions';
import DetailCampaignUI from '../../components/section/PromoComponent/DetailCampaignComponent';

export default function DetailCampaign({navigation}) {
  const [isJoined, setIsJoined] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [verificationModalVisible, setVerificationModalVisible] =
    useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [showProgress, setShowProgress] = useState(false);

  const dispatch = useDispatch();
  const {data} = useSelector(state => state.data);

  const handleJoinCampaign = () => {
    setModalVisible(true);
  };

  const handleConfirmJoin = () => {
    setModalVisible(false);
    setVerificationModalVisible(true);
    setTimeout(() => {
      setVerificationModalVisible(false);
      setSuccessModalVisible(true);
      setTimeout(() => {
        setSuccessModalVisible(false);
        setShowProgress(true);
      }, 1000);
    }, 2000);
  };

  const handleCancelJoin = () => {
    setModalVisible(false);
    setIsJoined(false);
  };

  useEffect(() => {
    // Dispatch action untuk mengatur data pada Redux saat komponen DetailCampaign dipasang
    dispatch(setData(data));
  }, []);

  const progress = 80;

  return (
    <DetailCampaignUI
      navigation={navigation}
      progress={progress}
      data={data}
      join={handleJoinCampaign}
      confirm={handleConfirmJoin}
      cancel={handleCancelJoin}
      modal={modalVisible}
      verificationModal={verificationModalVisible}
      successModal={successModalVisible}
      showProgress={showProgress}
    />
  );
}

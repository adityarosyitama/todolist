import React from 'react';
import CampaignUI from '../../components/section/PromoComponent/CampaignComponent';

export default function Campaign({navigation}) {
  const banner = {uri: 'https://i.ibb.co/q1LJss1/Banner-Campaign.png'};

  return (
    <CampaignUI
      navigation={() => navigation.navigate('Detail Campaign')}
      banner={banner}
    />
  );
}

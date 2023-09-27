import {SET_DATA} from './actions';

const initialState = {
  data: [
    {
      image: {uri: 'https://i.ibb.co/WBVfYx0/Kulkas.png'},
      width: 130,
      height: 130,
      title: 'PHILIPS Kulkas 2 Pintu\nInverter NR-BX468VS1D',
      price: 'Rp 1.190.000',
      originalPrice: 'Rp 1.190.000',
      discount: '30%',
      padding: 6,
    },
    {
      image: {uri: 'https://i.ibb.co/mSt60dc/Microwave.png'},
      width: 108,
      height: 108,
      title: 'Microwave PHILIPS\nAEM-S1112S Low Watt...',
      price: 'Rp 1.190.000',
      originalPrice: 'Rp 1.190.000',
      discount: '30%',
      padding: 17,
    },
    {
      image: {uri: 'https://i.ibb.co/J76rT2R/Fan.png'},
      width: 122,
      height: 122,
      title: 'Fan Cosmos 12-DAR N',
      price: 'Rp 1.190.000',
      originalPrice: 'Rp 1.190.000',
      discount: '30%',
      padding: 10,
    },
    {
      image: {uri: 'https://i.ibb.co/FzRg22Y/Magicom.png'},
      width: 101,
      height: 99,
      title: 'Gourmia GRC770 12 Cup\nRice Cooker...',
      price: 'Rp 1.190.000',
      originalPrice: 'Rp 1.190.000',
      discount: '30%',
      padding: 20,
    },
  ],
};

const datareducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default datareducer;

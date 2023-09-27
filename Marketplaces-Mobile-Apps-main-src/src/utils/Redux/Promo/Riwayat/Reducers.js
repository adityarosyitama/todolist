import {SET_RIWAYAT} from './actions';

const initialState = {
  riwayat: [
    {
      image: {uri: 'https://i.ibb.co/3mXCJPv/Blender.png'},
      width: 33,
      height: 62,
      title: 'Blender Toshiba BL15PH2, Blender 2 in 1\n',
      price: 'Rp 1.190.000',
      paddingHorizontal: 24,
      paddingVertical: 10,
      jumlah: 'x3',
    },
    {
      image: {uri: 'https://i.ibb.co/WBVfYx0/Kulkas.png'},
      width: 75,
      height: 75,
      title: 'PHILIPS Kulkas 2 Pintu Inverter NR-\nBX468VS1D',
      price: 'Rp 1.190.000',
      padding: 3,
      jumlah: 'x6',
    },
    {
      image: {uri: 'https://i.ibb.co/wBZHCnB/Magicom2.png'},
      width: 46,
      height: 54,
      title: 'Philips Daily Collection Rice Cooker\nHD3132/33',
      price: 'Rp 1.190.000',
      paddingHorizontal: 18,
      paddingVertical: 13.5,
      jumlah: 'x2',
    },
  ],
};

const riwayatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RIWAYAT:
      return {
        ...state,
        riwayat: action.payload,
      };
    default:
      return state;
  }
};

export default riwayatReducer;

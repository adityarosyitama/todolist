import messaging from '@react-native-firebase/messaging';

// Fungsi untuk mendapatkan FCM Token
const getFCMToken = async () => {
  const token = await messaging().getToken();
  console.log('FCM Token:', token);
  return token
};

// Panggil fungsi untuk mendapatkan token

/* eslint-disable prettier/prettier */
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

export async function GetFCMToken() {
  let fcmtoken = await AsyncStorage.getItem('fcmtoken');
  console.log(fcmtoken, 'old token');
  if (!fcmtoken) {
    try {
      let fcmtoken = await messaging().getToken();//await
      if (fcmtoken) {
        console.log(fcmtoken, 'new token');
        await AsyncStorage.setItem('fcmtoken', fcmtoken);//await
      }
    } catch (error) {
      console.log(error, 'error in fcmtoken');
    }
  }
}
export const notificationListener = ()=>{
     // Assume a message-notification contains a "type" property in the data payload of the screen to open

     messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
          'Notification caused app to open from background state:',
          remoteMessage.notification,
        );
      });

      // Check whether an initial notification is available
    messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
        setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
      }
      setLoading(false);
    });

    messaging().onMessage(async remoteMessage =>{
        console.log('notification on froground state....', remoteMessage);
    });
};

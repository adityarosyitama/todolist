/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {Platform} from 'react-native';

import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import messaging, { firebase } from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';


const isIOS = Platform.OS === 'ios';
const CHANNELID = 'aditprojt';
const CHANNELNAME = 'aditprojt';

const useFirebaseNotification = () => {
	const [data, setData] = useState({
		type: '',
		params: '',
	});

	
	const onRequestUserPermission = async () => {
		const authStatus = await messaging().requestPermission();
		const enabled =
			authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
			authStatus === messaging.AuthorizationStatus.PROVISIONAL;

		if (enabled) {
			onGetFcmToken();
			onNotificationCreateChannel();
		}
	};

	const onGetFcmToken = async () => {
		const fcmToken = await AsyncStorage.getItem('fcmToken');
		console.log('Firebase token:', fcmToken);
		if (!fcmToken) {
			const token = await messaging().getToken();
			await AsyncStorage.setItem('fcmToken', token);
		}
	};

	const onNotificationCreateChannel = () => {
		if (!isIOS) {
			PushNotification.createChannel(
			{
				channelId: CHANNELID,
				channelName: CHANNELNAME,
			},
			(created) => console.log('Notification channel created:', created),
			);
		}
	};

	const onRegisterAppWithFCM = async () => {
		await messaging().registerDeviceForRemoteMessages();
	};

	const onNotifConfiguration = () => {
		let notifConfiguration = {
			onNotification(notification) {
				console.log('[LOG] Notification:', notification)
				eventNotification(notification);
				notification.finish(PushNotificationIOS.FetchResult.NoData);
			},
		};
		if (!isIOS) {
			console.log('[LOG] Notification Config:', notifConfiguration)
			notifConfiguration.popInitialNotification = true;
		} else {
			PushNotificationIOS.addEventListener('localNotification', onRemoteNotification);
		}
		PushNotification.configure({
			...notifConfiguration,
		});
	};

	const eventNotification = (notification) => {
		console.log('Notification:', notification)
		if (notification.userInteraction) {
			setData({
			  ...notification.data,
			});
		}else{
			if (notification.foreground) {
				onShowLocalNotification(notification);
			} else if (!notification.foreground) {
				console.log('Notification:', notification)
				setData({
					...notification.data,
				});
			}
		}
	};

	const onShowLocalNotification = (notification) => {
		console.log('Notification show local:', notification)
		if (notification) {
			let configLocalNotif = {};
			if (isIOS) {
				configLocalNotif = {
					id: parseInt(Math.random() * 1000000000, 2),
					title: notification.title || 'No title',
					message: notification.message || '-',
					data: notification.data,
					userInfo: notification,
					// largeIcon: "ic_notification_large",
					largeIcon: "",
					smallIcon: "ic_notification_small",
					color: 'black',
				};
			} else {
				configLocalNotif = {
					channelId: CHANNELID,
					title: notification.title || 'No title',
					message: notification.message || '-',
					data: notification.data,
					allowWhileIdle: true,
					// largeIcon: "ic_notification_large",
					largeIcon: "",
					smallIcon: "ic_notification_small",
					color: 'black',
				};
			}
			PushNotification.localNotification(configLocalNotif);
		}
	};

	useEffect(() => {
		if (isIOS) {iosInitApp()};
		onRegisterAppWithFCM();
		onRequestUserPermission();
		onNotifConfiguration();
	}, []);

	return {data};
};

export default useFirebaseNotification;
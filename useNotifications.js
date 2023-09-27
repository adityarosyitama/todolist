/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {Platform} from 'react-native';

import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import messaging, { firebase } from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';


const isIOS = Platform.OS === 'ios';
const CHANNELID = 'aditprojt';//ganti
const CHANNELNAME = 'aditprojt';//ganti

/**
 * @function @hooks useFirebaseNotification
 */
const useFirebaseNotification = () => {
	const [data, setData] = useState({
		type: '',
		params: '',
	});

	/**
	 * ---------------------------------------------------- *
	 * @function iosInitApp
	 * @summary checking firebase apps & create firebase app
	 * @constant iosCredentials
	 * @summary credentials ios notification
	 * ---------------------------------------------------- *
	 */
	const iosCredentials = {
		clientId: "589077145301-72incnif04i8ssdpq05g6lonut4bc787.apps.googleusercontent.com",
		appId: "1:589077145301:android:717c10b2650ad4e515a45c",
		apiKey: "AIzaSyBANoKPWT1pcU3GTlrqUQZqJHxX0pPhsiU",
		storageBucket: "rumah-siap-kerja-307205.appspot.com",
		messagingSenderId: "589077145301",
		projectId: "rumah-siap-kerja-307205",
	};
	const credentials = Platform.select({
		ios: iosCredentials,
	});
	const config = {
		name: "MAIN_APP",
	};
	const iosInitApp = async () => {
		if(!firebase.apps.length) {
			await firebase.initializeApp(credentials, config);
		} else {
			firebase.app()
		}
		PushNotificationIOS.addEventListener('notification', onRemoteNotification);
	}
	const onRemoteNotification = (notification) => {
		console.log('Notification:', notification)
		const isClicked = notification.getData()?.userInteraction === 1;
		if (isClicked) {
			// Navigate user to another screen
			eventNotification(notification);
		} else {
			// Do something else with push notification
		}
	};

	/**
	 * ---------------------------------------------------- *
	 * @function onRequestUserPermission
	 * @summary check permission for notification
	 * ---------------------------------------------------- *
	 */
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

	/**
	 * ---------------------------------------------------- *
	 * @function onGetFcmToken
	 * @summary get firebase token and set to local storage
	 * ---------------------------------------------------- *
	 */
	const onGetFcmToken = async () => {
		const fcmToken = await AsyncStorage.getItem('fcmToken');
		console.log('Firebase token:', fcmToken);
		if (!fcmToken) {
			const token = await messaging().getToken();
			await AsyncStorage.setItem('fcmToken', token);
		}
	};

	/**
	 * ---------------------------------------------------- *
	 * @function onNotificationCreateChannel
	 * @returns for create channel only android
	 * ---------------------------------------------------- *
	 */
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

	/**
	 * ---------------------------------------------------- *
	 * @function onRegisterAppWithFCM
	 * @summary register app with fcm for remote notification
	 * ---------------------------------------------------- *
	 */
	const onRegisterAppWithFCM = async () => {
		await messaging().registerDeviceForRemoteMessages();
	};

	/**
	 * ---------------------------------------------------- *
	 * @function onNotifConfiguration
	 * @summary for configuration local notification
	 * ---------------------------------------------------- *
	 */
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

	/**
	 * ---------------------------------------------------- *
	 * @function eventNotification
	 * @summary this function root of all the functionality
	 * ---------------------------------------------------- *
	 */
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

	/**
	 * ---------------------------------------------------- *
	 * @function onShowLocalNotification
	 * @summary show local notification
	 * ---------------------------------------------------- *
	 */
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

	/**
	 * ---------------------------------------------------- *
	 * @dependency []
	 * @summary initialize for remote and local notification
	 * ---------------------------------------------------- *
	 */
	useEffect(() => {
		if (isIOS) {iosInitApp()};
		onRegisterAppWithFCM();
		onRequestUserPermission();
		onNotifConfiguration();
	}, []);

	return {data};
};

export default useFirebaseNotification;
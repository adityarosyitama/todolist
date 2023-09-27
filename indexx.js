/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView} from 'react-native';
import {store, persistor} from './utils/reducers/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Navigation from './Navigation';
// import {createRoot} from 'react-dom/client';
// import useFirebaseNotification from './useNotifications';

const indexx = () => {
  // const {data} = useFirebaseNotification();
  // console.log('datatoken', data);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={{flex: 1}}>
          <Navigation />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default indexx;

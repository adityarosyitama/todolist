/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import App from './App';
import useFirebaseNotification from './useNotifications';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  const {data2} = useFirebaseNotification();
  // console.log('[adit log] datatoken', data2);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="App" component={App} initialParams={{data2 }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

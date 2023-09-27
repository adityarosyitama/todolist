import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import BottomNav from './BottomNav';
import Login from '../screen/Auth/Login';
import Register from '../screen/Auth/Register';
import Notification from '../screen/Profile/Notification';
import NotificationHome from '../screen/Beranda/Notification';
import ChangePoint from '../screen/Profile/ChangePoint';
import Loyalty from '../screen/Profile/Loyalty';
import Payment from '../screen/Profile/Payment';
import DetailPayment from '../screen/Profile/DetailPayment';
import Bill from '../screen/Profile/Bill';
import CheckingTTB from '../screen/Profile/CheckingTTB';
import Profile from '../screen/Profile/Profile';
import AllBrand from '../screen/Beranda/AllBrand';
import AllCategory from '../screen/Beranda/AllCategory';
import Faq from '../screen/Profile/Faq';
import ComponentDetailTTB from '../components/section/ComponentProfile/ComponentDetailTTB';
import CheckTTB from '../screen/Profile/CheckTTB';
import ChangeProfile from '../screen/Profile/ChangeProfile';
import Cart from '../screen/Cart/Cart';
import Checkout from '../screen/Cart/Checkout';
import ItemList from '../screen/Beranda/ItemList';
import Biometric from '../screen/Profile/Biometric';

const Stack = createStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="BottomNav" component={BottomNav} />
      <Stack.Screen name="ItemList" component={ItemList} />

      {/* Sulthan */}
      <Stack.Screen name="Profil" component={Profile} />
      <Stack.Screen
        name="CheckingTTB"
        component={CheckingTTB}
        options={{
          headerShown: true,
          headerTitle: 'ID 128910',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Bill"
        component={Bill}
        options={{
          headerShown: true,
          headerTitle: 'Bill User',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="DetailPayment"
        component={DetailPayment}
        options={{
          headerShown: true,
          headerTitle: 'Detail Payment',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="ComponentDetailTTB"
        component={ComponentDetailTTB}
        options={{
          headerShown: true,
          headerTitle: 'Detail TTB',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="CheckTTB"
        component={CheckTTB}
        options={{
          headerShown: true,
          headerTitle: 'Check TTB',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{
          headerShown: true,
          headerTitle: 'Payment',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Loyalty"
        component={Loyalty}
        options={{
          headerShown: true,
          headerTitle: 'Loyalty',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="ChangePoint"
        component={ChangePoint}
        options={{
          headerShown: true,
          headerTitle: 'Change Point',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="NotificationHome"
        component={NotificationHome}
        options={{
          headerShown: true,
          headerTitle: 'Notification',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="ChangeProfile"
        component={ChangeProfile}
        options={{
          headerShown: true,
          headerTitle: 'Change Profile',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: true,
          headerTitle: 'Notification',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Faq"
        component={Faq}
        options={{
          headerShown: true,
          headerTitle: 'FAQ',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="AllBrand"
        component={AllBrand}
        options={{
          headerShown: true,
          headerTitle: 'All Brand',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="AllCategory"
        component={AllCategory}
        options={{
          headerShown: true,
          headerTitle: 'Jelajah CSI',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: true,
          headerTitle: 'keranjang',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{
          headerShown: true,
          headerTitle: 'Checkout',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Biometric"
        component={Biometric}
        options={{
          headerShown: true,
          headerTitle: 'Biometric',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}

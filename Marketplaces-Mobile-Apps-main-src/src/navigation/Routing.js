import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import AuthNavigation from './AuthNavigation';
import Campaign from '../screen/Promo/Campaign';
import DetailCampaign from '../screen/Promo/DetailCampaign';
import {Colors} from '../styles';
import RiwayatDetail from '../components/section/Riwayat/RiwayatDetailComponent';
import SplashScreen from '../screen/Auth/Splashscreen';
import DetailItem from '../screen/Detai_lItem/DetailItem';
import Hadiah from '../screen/Promo/Hadiah';
import Promo from '../screen/Promo/Promo';
import PromoUI from '../components/section/PromoComponent/PromoComponent';
import ChatList from '../screen/Chat/ChatList';
import ChatRoom from '../screen/Chat/ChatRoom';
import Search from '../screen/Beranda/Search';

const Stack = createNativeStackNavigator();
const Routing = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
        <Stack.Screen name="DetailItem" component={DetailItem} />
        <Stack.Screen name="Detail" component={RiwayatDetail} />
        <Stack.Screen name="Search" component={Search} />

        {/* // Mansur */}
        <Stack.Screen
          name="Campaign"
          component={Campaign}
          options={{
            headerShown: true,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 16,
              fontFamily: 'Inter-SemiBold',
              lineHeight: 24,
            },
            headerStyle: {
              shadowColor: Colors.VERYDARKGRAYISHBLUE,
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.05,
              shadowRadius: 1,
              elevation: 4,
            },
          }}
        />
        <Stack.Screen
          name="Detail Campaign"
          component={DetailCampaign}
          options={{
            headerShown: true,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 16,
              fontFamily: 'Inter-SemiBold',
              lineHeight: 24,
            },
            headerStyle: {
              shadowColor: Colors.VERYDARKGRAYISHBLUE,
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.05,
              shadowRadius: 1,
              elevation: 4,
            },
          }}
        />
        <Stack.Screen
          name="PHILLIPS CAMPAIGN 2022"
          component={Hadiah}
          options={{
            headerShown: true,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 16,
              fontFamily: 'Inter-SemiBold',
              lineHeight: 24,
            },
            headerStyle: {
              shadowColor: Colors.VERYDARKGRAYISHBLUE,
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.05,
              shadowRadius: 1,
              elevation: 4,
            },
          }}
        />
        <Stack.Screen
          name="Detail Promo"
          component={Promo}
          options={{
            headerShown: true,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 16,
              fontFamily: 'Inter-SemiBold',
              lineHeight: 24,
            },
            headerStyle: {
              shadowColor: Colors.VERYDARKGRAYISHBLUE,
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.05,
              shadowRadius: 1,
              elevation: 4,
            },
          }}
        />
        <Stack.Screen
          name="List Promo"
          component={PromoUI}
          options={{
            headerShown: true,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 16,
              fontFamily: 'Inter-SemiBold',
              lineHeight: 24,
            },
            headerStyle: {
              shadowColor: Colors.VERYDARKGRAYISHBLUE,
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.05,
              shadowRadius: 1,
              elevation: 4,
            },
          }}
        />
        <Stack.Screen name="Chat" component={ChatList} />
        <Stack.Screen name="ChatRoom" component={ChatRoom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;

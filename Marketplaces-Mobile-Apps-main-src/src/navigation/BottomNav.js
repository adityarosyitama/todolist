import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Home from '../screen/Beranda/Home';
import Riwayat from '../screen/Riwayat/Riwayat';
import Profile from '../screen/Profile/Profile';
import Cart from '../screen/Cart/Cart';
import Promo from '../screen/Promo/Promo';

const Tab = createBottomTabNavigator();

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View
      style={{
        // flex: 1,
        height: 72,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        // justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      {state.routes.map((route, index, focused) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const LabelIcon = {
          Beranda: 'home',
          Riwayat: 'history',
          Keranjang: 'cart',
          Promo: 'tag',
          Profil: 'account',
        };

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: 'center',
              //   marginVertical: 10,
            }}>
            {label == 'Keranjang' ? (
              <View
                style={{
                  backgroundColor: '#2647E6',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                }}>
                <Icon name={LabelIcon[label]} size={34} color={'#FFFFFF'} />
              </View>
            ) : (
              <View style={{alignItems: 'center'}}>
                <Icon
                  name={LabelIcon[label]}
                  size={25}
                  color={isFocused ? '#3E4752' : '#B2B9C2'}
                />
                <Text
                  style={{
                    color: isFocused ? '#3E4752' : '#B2B9C2',
                    marginTop: 5,
                    fontSize: 12,
                  }}>
                  {label}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const BottomNav = () => {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Beranda" component={Home} />
      <Tab.Screen name="Riwayat" component={Riwayat} />
      <Tab.Screen name="Keranjang" component={Cart} />
      <Tab.Screen name="Promo" component={Promo} />
      <Tab.Screen name="Profil" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomNav;

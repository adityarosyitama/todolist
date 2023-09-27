import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import {Colors} from '../../../styles';
import {TextBold, TextRegular} from '../../global/Text';
import convertCurrency from '../../../utils/helpers';
import ChatList from '../../../screen/Chat/ChatList';

const BerandaComponent = ({
  navigation,
  category,
  brand,
  lastSeen,
  notification,
  categoryHome,
  brandHome,
  productFocus,
  productPopular,
}) => {
  const RenderItemCategory = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ItemList', {
            id: item?.item?.id,
            Name: item?.item?.name,
            Cek: 'CATEGORY',
          });
        }}
        style={{
          alignItems: 'center',
          width: 70,
          marginRight: 15,
        }}>
        <View
          style={{
            width: 34,
            height: 34,
            borderRadius: 34,
            backgroundColor: '#FFAB6C',
            marginBottom: 8,
          }}>
          <Image
            source={{uri: item?.item?.image_url}}
            style={{height: 35, width: 35}}
          />
        </View>
        <TextRegular
          text={item?.item?.name}
          size={10}
          style={{textAlign: 'center'}}
          color={Colors.BLACK}
        />
      </TouchableOpacity>
    );
  };
  const RenderItemBrand = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ItemList', {
            id: item?.item?.id,
            Name: item?.item?.name,
            Cek: 'BRAND',
          });
        }}
        style={{borderWidth: 2, borderColor: Colors.GREY, marginBottom: 10}}>
        <Image
          source={{uri: item.item.image_url}}
          style={{aspectRatio: 1, resizeMode: 'contain', width: 125}}
        />
      </TouchableOpacity>
    );
  };
  const RenderItemLastSeen = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('DetailItem', {id: item.id})}>
        <View
          style={{
            padding: 6,
            backgroundColor: Colors.WHITE,
            marginLeft: 16,
            marginBottom: 10,
            alignItems: 'center',
            alignContent: 'center',
            borderRadius: 6,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
            elevation: 2,
          }}>
          <View>
            <Image
              source={{uri: item?.images[0]?.image_url}}
              style={{
                aspectRatio: 1,
                resizeMode: 'contain',
                width: 120,
                alignSelf: 'center',
              }}
            />
            <TextRegular
              text={item.name}
              size={12}
              style={{width: 152, marginTop: 14}}
              color={Colors.GREY}
            />
            <View style={{flexDirection: 'row'}}>
              <TextBold
                text={convertCurrency(item.price, 'Rp ')}
                size={14}
                color={Colors.BLACK}
                style={{alignSelf: 'flex-start'}}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const RenderItemFocus = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('DetailItem', {id: item.item.id})}>
        <View
          style={{
            padding: 6,
            backgroundColor: Colors.WHITE,
            marginLeft: 16,
            alignItems: 'center',
            alignContent: 'center',
            borderRadius: 6,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
            elevation: 2,
            marginBottom: 4,
          }}>
          <View>
            <Image
              source={{uri: item?.item.images[0]?.image_url}}
              style={{
                aspectRatio: 1,
                resizeMode: 'contain',
                width: 120,
                alignSelf: 'center',
              }}
            />
            <TextRegular
              text={item.item.name}
              size={12}
              style={{width: 152, marginTop: 14}}
              color={Colors.GREY}
              numberOfLines={1}
            />
            <View style={{flexDirection: 'row'}}>
              <TextBold
                text={convertCurrency(item.item.price, 'Rp ')}
                size={14}
                color={Colors.BLACK}
                style={{alignSelf: 'flex-start'}}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.WHITE}}>
      <View style={styles.viewHeader}>
        <TouchableOpacity
          style={styles.search}
          onPress={() => navigation.navigate('Search')}>
          <View style={{paddingVertical: '2%'}}>
            <TextRegular text={'Cari Produk'} size={15} color={Colors.GREY} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Chat')}
          style={{width: 30, alignContent: 'center', alignItems: 'center'}}>
          <Ionicons name="chatbox-ellipses" size={24} color="#D1D5DC" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{width: 30, alignContent: 'center', alignItems: 'center'}}
          onPress={() => navigation.navigate('NotificationHome', notification)}>
          <Ionicons
            name="notifications"
            size={30}
            color="#D1D5DC"
            style={{
              marginTop:
                notification?.meta?.unread_count === undefined ||
                notification?.meta?.unread_count === 0
                  ? 0
                  : '-40%',
            }}
          />
          {notification?.meta?.unread_count === undefined ||
          notification?.meta?.unread_count === 0 ? (
            ''
          ) : (
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: Colors.GREEN,
                marginTop: '-100%',
                marginLeft: '40%',
                borderRadius: 20,
                alignItems: 'center',
                alignContent: 'center',
              }}>
              <TextBold
                text={
                  notification?.meta?.unread_count === undefined
                    ? 0
                    : notification?.meta?.unread_count
                }
                color={Colors.WHITE}
              />
            </View>
          )}
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View
          style={{
            backgroundColor: Colors.GREY_2,
            width: '100%',
            height: 234,
          }}></View>

        <ScrollView
          horizontal={true}
          style={{
            flexDirection: 'row',
            paddingVertical: 16,
            paddingHorizontal: 16,
            width: '100%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'flex-end',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                width: 70,
                marginRight: 16,
                alignItems: 'center',
              }}
              onPress={() => navigation.navigate('AllCategory')}>
              <View
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 34,
                  backgroundColor: Colors.RED,
                  marginBottom: 8,
                }}></View>
              <TextRegular
                text={'Semua Kategori'}
                size={12}
                style={{textAlign: 'center'}}
                color={Colors.BLACK}
              />
            </TouchableOpacity>
            <FlatList
              style={{}}
              initialNumToRender={4}
              horizontal={true}
              data={categoryHome}
              renderItem={({item}) => <RenderItemCategory item={item} />}
            />
          </View>
        </ScrollView>
        <View style={{width: '100%'}}>
          <ImageBackground
            source={require('../../../asset/images/expressorder.png')}
            style={{
              aspectRatio: 4,
              resizeMode: 'contain',
              flex: 1,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.WHITE,
                borderRadius: 5,
                marginRight: 20,
                paddingVertical: 12,
                paddingHorizontal: 10,
              }}>
              <TextBold
                text={'EXPRESS ORDER'}
                size={18}
                color={Colors.PRIMARY_1}
              />
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 16,
            width: '100%',
            alignItems: 'center',
            alignContent: 'center',
          }}>
          <TextBold text={'Brand Pilihan'} color={Colors.BLACK} size={16} />
          <TouchableOpacity onPress={() => navigation.navigate('AllBrand')}>
            <TextRegular text={'Lihat Semua'} color={Colors.GREY} size={14} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={brandHome}
          renderItem={({item}) => <RenderItemBrand item={item} />}
          // horizontal
          initialNumToRender={4}
          showsHorizontalScrollIndicator={false}
          numColumns={3}
          style={{width: '100%'}}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 16,
            width: '100%',
            alignItems: 'center',
            alignContent: 'center',
            marginBottom: 5,
          }}>
          <TextBold text={'Terakhir Dilihat'} color={Colors.BLACK} size={16} />
          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <TextRegular text={'Lihat Semua'} color={Colors.GREY} size={14} />
          </TouchableOpacity>
        </View>
        <FlatList
          initialNumToRender={4}
          horizontal={true}
          data={lastSeen.data}
          renderItem={({item}) => <RenderItemLastSeen item={item} />}
        />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ItemList', {
              Cek: 'CrazyPromo',
              Name: 'Crazy Promo',
            })
          }
          style={{marginVertical: 20, paddingHorizontal: 20}}>
          <Image
            source={{
              uri: 'https://static.vecteezy.com/system/resources/previews/017/608/984/non_2x/graphic-crazy-promo-blue-sale-banner-promotion-vector.jpg',
            }}
            style={{
              aspectRatio: 2,
              resizeMode: 'contain',
              flex: 1,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'flex-end',
              borderRadius: 20,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 16,
            width: '100%',
            alignItems: 'center',
            alignContent: 'center',
            marginTop: 10,
          }}>
          <TextBold text={'Produk Fokus'} color={Colors.BLACK} size={16} />
          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <TextRegular text={'Lihat Semua'} color={Colors.GREY} size={14} />
          </TouchableOpacity>
        </View>
        <FlatList
          initialNumToRender={4}
          horizontal={true}
          data={productFocus}
          renderItem={({item}) => <RenderItemFocus item={item} />}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 16,
            width: '100%',
            alignItems: 'center',
            alignContent: 'center',
          }}>
          <TextBold text={'Produk Terpopular'} color={Colors.BLACK} size={16} />
        </View>
        <FlatList
          // initialNumToRender={4}
          data={productPopular}
          renderItem={({item}) => (
            <View style={{width: '48%'}}>
              <RenderItemFocus item={item} />
            </View>
          )}
          numColumns={2}
        />
        <View style={{marginBottom: 200}}></View>
      </ScrollView>
    </View>
  );
};

export default BerandaComponent;

const styles = StyleSheet.create({
  search: {
    borderRadius: 6,
    borderColor: '#D1D5DC',
    borderWidth: 1,
    width: '70%',
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  viewHeader: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    // height: '5%',
  },
});

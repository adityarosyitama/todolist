import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';
import {Colors} from '../../../styles';

export default function DetailPromoUI({navigation, route}) {
  const detail = route.params.detail;
  const promo = route.params.promo;

  const date = promo?.start_date;
  return (
    <View style={styles.container}>
      <View style={styles.container.promoView}>
        <Text style={styles.container.promoView.title}>{promo?.title}</Text>
        <View style={styles.container.promoView.dateView}>
          <Text style={styles.container.promoView.dateView.date}>
            Berlaku {moment(date).format('DD MMMM YYYY') || 'Invalid date'} -{' '}
            {promo?.end_date || 'Invalid date'}
          </Text>
        </View>
        <Text style={styles.container.promoView.content}>{promo?.content}</Text>
      </View>
      <View style={styles.container.listView}>
        <Text style={styles.container.listView.produkTeks}>
          Produk Untuk Promo Ini
        </Text>
        <View style={styles.container.listView.produkView}>
          <ImageBackground
            source={{
              uri:
                detail?.[0]?.images?.[0] ||
                'https://www.delta-mobrey.com/wp-content/uploads/2018/05/Product-Image-Coming-Soon-300x300.png',
            }}
            style={styles.container.listView.produkView.image}>
            <FontAwesome5
              name="shopping-cart"
              size={20}
              color={Colors.BLACK}
              style={styles.container.listView.produkView.image.cart}
            />
          </ImageBackground>
          <Text style={styles.container.listView.produkView.produkName}>
            {detail?.[0]?.name}
          </Text>
          <Text style={styles.container.listView.produkView.price}>
            Rp. {detail?.[0]?.price}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    promoView: {
      paddingHorizontal: 16,
      paddingTop: 20,
      paddingBottom: 16,
      marginBottom: 8,
      backgroundColor: Colors.WHITE,
      elevation: 2,
      title: {
        color: Colors.VERYDARKGRAYISHBLUE,
        fontSize: 14,
        fontFamily: 'Inter-Bold',
        lineHeight: 21,
        marginBottom: 15,
      },
      dateView: {
        alignItems: 'center',
        backgroundColor: Colors.LIGHTGRAYISHBLUE,
        elevation: 2,
        paddingVertical: 10,
        marginBottom: 15,
        borderRadius: 2,
        date: {
          fontSize: 12,
          fontFamily: 'Inter-Bold',
          lineHeight: 19,
          color: Colors.VERYDARKGRAYISHBLUE,
        },
      },
      content: {
        fontSize: 14,
        fontFamily: 'Inter-Regular',
        lineHeight: 19,
        color: Colors.VERYDARKGRAYISHBLUE,
      },
    },
    listView: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      marginTop: 8,
      backgroundColor: Colors.WHITE,
      // elevation: 2,
      produkTeks: {
        color: Colors.VERYDARKGRAYISHBLUE,
        marginBottom: 18,
        fontSize: 16,
        fontFamily: 'Inter-Bold',
        lineHeight: 19,
        marginTop: 12,
      },
      produkView: {
        backgroundColor: Colors.WHITE,
        elevation: 4,
        width: '49%',
        borderRadius: 4,
        image: {
          height: 110,
          width: '85%',
          alignSelf: 'flex-end',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          cart: {
            backgroundColor: Colors.LIGHTGRAY,
            padding: 5,
            borderRadius: 2,
            opacity: 0.5,
          },
        },
        produkName: {
          marginTop: 10,
          paddingHorizontal: 8,
          fontSize: 12,
          fontFamily: 'Inter-Regular',
          lineHeight: 19,
          color: Colors.VERYDARKGRAYISHBLUE,
        },
        price: {
          marginBottom: 10,
          fontSize: 11,
          fontFamily: 'Inter-Bold',
          lineHeight: 19,
          paddingHorizontal: 8,
          color: Colors.VERYDARKGRAYISHBLUE,
        },
      },
    },
  },
});

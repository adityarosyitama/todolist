import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import {RED} from '../../../styles/Colors';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useState} from 'react';
import apiProvider from '../../../utils/service/apiProvider';
import convertCurrency from '../../../utils/helpers';

const ListItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: item?.item?.product?.images[0]?.thumbnail_image_url}}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.itemDetails}>
          <Text style={styles.name}>{item?.item?.product?.name}</Text>
          <Text style={styles.variant}>{item?.variant}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.priceBeforeDiscount}>
              {convertCurrency(item?.item?.product?.is_flashale, 'Rp ')}
            </Text>
            <Text style={styles.discount}>{item?.discount}% OFF</Text>
          </View>
          <Text style={styles.priceAfterDiscount}>
            {convertCurrency(item?.item?.product?.price, 'Rp ')}
          </Text>
        </View>
        <View style={styles.deleteContainer}>
          <EvilIcon
            name="trash"
            size={30}
            color={RED}
            style={{marginRight: -6}}
          />
          <Text style={{paddingTop: 47, paddingLeft: 3}}>
            {item?.item?.quantity}X
          </Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.iconCheck}>
          <Icon name="check" size={15} color={'white'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonEdit}>
          <Text style={styles.buttonEditText}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CartComponent = ({data}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Icon name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Keranjang</Text>
        <View style={{width: 24}} />
      </View>
      {data.length != 0 ? (
        <FlatList
          data={data.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(item, index) => <ListItem item={item} />}
        />
      ) : (
        <Text>Data Kosong</Text>
      )}
      <View style={styles.bottomContainer}>
        <View style={styles.subTotalContainer}>
          <Text>Sub Total </Text>
          <Text>Rp. 0</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonCheckout}
          onPress={() => navigation.navigate('Checkout')}>
          <Text style={{color: 'white'}}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  listContainer: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  imageContainer: {
    marginRight: 10,
    borderRadius: 5,
    // overflow: 'hidden',
  },
  deleteContainer: {
    alignItems: 'flex-end',
  },
  image: {
    height: 88,
    width: 48,
  },
  itemDetails: {
    flex: 1,
    paddingHorizontal: 6,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  variant: {
    fontSize: 14,
    color: '#666',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  priceBeforeDiscount: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    color: '#999',
    marginRight: 10,
  },
  discount: {
    fontSize: 14,
    color: 'green',
  },
  priceAfterDiscount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'orange',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 18,
    paddingVertical: 10,
    borderColor: '#ccc',
  },
  bottomLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCheck: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    width: 25,
    height: 25,
    marginRight: 5,
  },
  buttonEdit: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'lightblue',
    borderWidth: 1,
  },
  buttonEditText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  subTotalContainer: {},
  buttonCheckout: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: 'blue',
    borderRadius: 5,
    borderColor: 'lightblue',
    borderWidth: 1,
    marginLeft: 10,
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CartComponent;

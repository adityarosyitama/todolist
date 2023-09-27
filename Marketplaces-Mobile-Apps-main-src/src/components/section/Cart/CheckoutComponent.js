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
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    id: 1,
    image: require('../../../assets/image/Blender.png'),
    name: 'Blender',
    variant: 'Putih Cemerlang',
    priceBeforeDiscount: 20000,
    discount: 20,
    priceAfterDiscount: 16000,
  },
  {
    id: 2,
    image: require('../../../assets/image/Microwave.png'),
    name: 'Item 2',
    variant: 'Variant 2',
    priceBeforeDiscount: 25000,
    discount: 15,
    priceAfterDiscount: 21250,
  },
  {
    id: 3,
    image: require('../../../assets/image/Magicom2.png'),
    name: 'Item 3',
    variant: 'Variant 3',
    priceBeforeDiscount: 30000,
    discount: 10,
    priceAfterDiscount: 27000,
  },
];

const ListItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={item.image}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.itemDetails}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.variant}>{item.variant}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.priceBeforeDiscount}>
              Rp {item.priceBeforeDiscount}
            </Text>
            <Text style={styles.discount}>{item.discount}% OFF</Text>
          </View>
          <Text style={styles.priceAfterDiscount}>
            Rp {item.priceAfterDiscount}
          </Text>
        </View>
        <View style={styles.deleteContainer}>
          <EvilIcon
            name="trash"
            size={30}
            color={RED}
            style={{marginRight: -6}}
          />
          <Text style={{paddingTop: 47, paddingLeft: 3}}>2X</Text>
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

const CheckoutComponent = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: '#fff',

            paddingVertical: 6,
            marginVertical: 6,
          }}>
          <View style={styles.alamatPengiriman}>
            <Text>Alamat Pengiriman</Text>
            <Text>Toko Budi</Text>
            <Text>021 123456</Text>
            <Text>Jln Mangga no 3, Klebengan, Depok</Text>
            <TouchableOpacity style={styles.buttonUbahAlamat}>
              <Text style={{color: 'black'}}>Ganti Alamat</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingHorizontal: 12,
              paddingVertical: 6,
              marginVertical: 6,
            }}>
            <Text>Pengiriman</Text>
            <Text>Pesanan anda akan dikirim dari Warehouse Bekasi</Text>
          </View>
        </View>
        <View>
          <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <ListItem item={item} />}
          />
        </View>
        <View style={styles.CheckoutContainer}>
          <View>
            <Text>Total Harga</Text>
            <Text>Rp.3.819.393</Text>
          </View>
          <TouchableOpacity
            style={styles.buttonCheckout}
            onPress={() => navigation.navigate('Bill')}>
            <Text style={{color: 'white'}}>Beli</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  imageContainer: {
    marginRight: 10,
    borderRadius: 5,
    overflow: 'hidden',
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
    paddingLeft: 20,
  },
  iconCheck: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    width: 25,
    height: 25,
  },
  buttonEdit: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'lightblue',
    borderWidth: 1,
    marginLeft: 10,
    width: 90,
    alignItems: 'center',
  },
  buttonEditText: {
    color: 'blue',
    fontWeight: 'bold',
  },
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
  buttonUbahAlamat: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 6,
  },
  CheckoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: 'white',
  },
  alamatPengiriman: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
});

export default CheckoutComponent;

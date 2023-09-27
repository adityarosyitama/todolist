import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ModalCenter2_adt from '../../modal/ModalCenter2_adt';
import ModalCenter_adt from '../../modal/ModalCenter_adt';
import {Colors} from '../../../styles';
import convertCurrency from '../../../utils/helpers';

const DetailItemComponent = ({
  navigation,
  getProduct,
  dataProduct,
  image_list,
  dataBrandTerkait,
  dataCategoryTerkait,
  //modal top
  modalTop,
  setModalTop,
  modalTop2,
  setModalTop2,
  modal,
  setModal,
  modal2,
  setModal2,
  modalWarna,
  setModalWarna,
  modalWarnaAvail,
  setModalWarnaAvail,
  modalCount,
  setModalCount,
  catatan,
  setCatatan,
  handleBuatSekarang,
  currentTime,
  //modal top
  deskripsi,
  setDeskripsi,
  //>>untuk flatlist horizontal image
  // onViewChange,
  setActiveView,
  activeView,
  // viewIndex,
  // setActiveIndex1,
  // activeIndex,
  //>>untuk flatlist horizontal image
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerView}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{alignSelf: 'center', width: '10%'}}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Ionicons name="arrow-back" size={30} />
          </TouchableOpacity>
          <View style={styles.headerTextInput}>
            <View
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Keranjang')}
            style={{alignSelf: 'center', width: '10%'}}>
            <Entypo name="shopping-cart" size={30} />
          </TouchableOpacity>
        </View>
      </View>
      {dataProduct === undefined || image_list === undefined ? (
        ''
      ) : (
        <ScrollView>
          <View style={styles.container}>
            <View
              style={{
                paddingHorizontal: 36,
                paddingTop: 36,
                alignItems: 'center',
              }}>
              {image_list?.length === 0 ? (
                <Image
                  source={{
                    uri: 'https://i.ibb.co/Lz52wnW/No-Image-Available.jpg',
                  }}
                  style={styles.image}
                />
              ) : (
                <FlatList
                  horizontal={true}
                  data={image_list}
                  pagingEnabled
                  keyExtractor={item => item.id}
                  renderItem={({item, index}) => (
                    <View>
                      <Image
                        source={{
                          uri: item.image_url,
                        }}
                        style={styles.image}
                        onFocus={() => setActiveView(index)}
                      />
                    </View>
                  )}
                />
              )}
              <View style={[styles.view3]}>
                <FlatList
                  horizontal={true}
                  data={image_list}
                  pagingEnabled
                  keyExtractor={item => item.id}
                  renderItem={({index}) => (
                    <View
                      style={index === activeView ? styles.view4 : styles.view6}
                    />
                  )}
                />
              </View>
            </View>
            <Text style={{fontSize: 18, marginTop: 16}}>
              {dataProduct?.name}
            </Text>
            <View style={{marginVertical: 8, flexDirection: 'row'}}>
              {dataProduct?.stock === 0 || dataProduct?.stock === undefined ? (
                <Text
                  style={[
                    styles.text3,
                    {color: Colors.WHITE, backgroundColor: Colors.GREY},
                  ]}>
                  Stok Habis
                </Text>
              ) : (
                <Text style={[styles.text3]}>Stok Tersedia</Text>
              )}
            </View>
            {dataProduct?.flashale?.discount === undefined ? (
              ''
            ) : (
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    color: Colors.GREY,
                    marginRight: 8,
                    textDecorationLine: 'line-through',
                  }}>
                  {convertCurrency(dataProduct?.price, 'Rp. ')}
                </Text>
                <Text style={{color: Colors.BLUE}}>
                  {dataProduct?.flashale?.discount}%
                </Text>
              </View>
            )}
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text2}>
                {dataProduct?.price === undefined
                  ? ''
                  : convertCurrency(
                      (dataProduct?.price *
                        (100 -
                          (dataProduct?.flashale?.discount === '' ||
                          dataProduct?.flashale?.discount === undefined
                            ? 0
                            : dataProduct?.flashale?.discount))) /
                        100,
                      'Rp. ',
                    )}
              </Text>
              <MaterialCommunityIcons
                name="information-outline"
                size={18}
                style={{paddingTop: 10}}
              />
            </View>
          </View>
          <View style={[styles.container]}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontWeight: 'bold'}}>Promo Untuk Produk Ini</Text>
              <TouchableOpacity>
                <Text>Lihat Semua</Text>
              </TouchableOpacity>
            </View>
            <View style={{height: 'auto', flexDirection: 'row', marginTop: 5}}>
              <Text
                style={{
                  backgroundColor: Colors.BLUE,
                  paddingHorizontal: 13,
                  paddingHorizontal: 11,
                  borderWidth: 1,
                  color: Colors.WHITE,
                }}>
                Promo
              </Text>
            </View>
          </View>
          <View style={styles.container}>
            <Text style={{fontWeight: 'bold'}}>Informasi Produk</Text>
            <View style={styles.view}>
              <Text style={styles.textGrey50}>Berat</Text>
              <Text style={styles.textBlack50}>{dataProduct?.weight} gram</Text>
            </View>
            <View style={styles.view}>
              <Text style={styles.textGrey50}>Brand</Text>
              <Text style={styles.textBlack50}>{dataProduct?.brand?.name}</Text>
            </View>
            <View style={styles.view}>
              <Text style={styles.textGrey50}>SKU</Text>
              <Text style={styles.textBlack50}>{dataProduct?.sku_code}</Text>
            </View>
            <View style={styles.view}>
              <Text style={styles.textGrey50}>Kategori</Text>
              <Text style={styles.textBlack50}>
                {dataProduct?.category?.name}
              </Text>
            </View>
          </View>
          <View style={styles.container}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontWeight: 'bold'}}>Deskripsi Produk</Text>
              <TouchableOpacity
                onPress={() => setDeskripsi(deskripsi === '' ? 1 : '')}>
                {deskripsi === '' ? (
                  <AntDesign name="down" size={18} />
                ) : (
                  <AntDesign name="up" size={18} />
                )}
              </TouchableOpacity>
            </View>
            {deskripsi === '' ? (
              dataProduct.description === '' ? (
                ''
              ) : (
                <Text
                  style={[styles.textGrey50, {marginTop: 16, width: '100%'}]}>
                  {dataProduct.description}
                </Text>
              )
            ) : (
              ''
            )}
          </View>
          <View style={styles.container}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontWeight: 'bold', width: '50%'}}>
                Brand Terkait
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ItemList', {
                    id: dataProduct?.brand?.id,
                    Name: dataProduct?.brand?.name,
                    Cek: 'BRAND',
                  });
                }}

                style={[styles.textGrey50, {textAlign: 'right'}]}>
                <Text style={{textAlign: 'right'}}>Lihat Semua</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              horizontal={true}
              data={dataBrandTerkait}
              pagingEnabled
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('DetailItem', {
                      id: item.id,
                    });
                  }}
                  horizontal={true}
                  style={{marginTop: 18, height: 'auto'}}>
                  <View style={styles.view2}>
                    <Image
                      source={{uri: item?.images[0]?.image_url}}
                      style={{
                        margin: 6,
                        height: 130,
                      }}
                    />
                    <Text
                      style={[
                        styles.textGrey50,
                        {marginTop: 8, width: '100%'},
                      ]}>
                      {item.name}
                    </Text>
                    {item?.flashale?.discount === undefined ? (
                      ''
                    ) : (
                      <View style={{flexDirection: 'row'}}>
                        <Text
                          style={{
                            color: Colors.GREY,
                            marginRight: 8,
                            textDecorationLine: 'line-through',
                          }}>
                          {convertCurrency(item?.price, 'Rp. ')}
                        </Text>
                        <Text style={{color: Colors.BLUE}}>
                          {item?.flashale?.discount}%
                        </Text>
                      </View>
                    )}
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.text2}>
                        {convertCurrency(
                          (item?.price *
                            (100 -
                              (item?.flashale?.discount === '' ||
                              item?.flashale?.discount === undefined
                                ? 0
                                : item?.flashale?.discount))) /
                            100,
                          'Rp. ',
                        )}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={styles.container}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontWeight: 'bold', width: '50%'}}>
                Produk Terkait
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ItemList', {
                    id: dataProduct?.category?.id,
                    Name: dataProduct?.category?.name,
                    Cek: 'BRAND',
                  });
                }}
                style={styles.textGrey50}>
                <Text style={{textAlign: 'right'}}>Lihat Semua</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              horizontal={true}
              data={dataCategoryTerkait}
              pagingEnabled
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('DetailItem', {
                      id: item.id,
                    });
                  }}
                  horizontal={true}
                  style={{marginTop: 5, height: 'auto'}}>
                  <View style={styles.view2}>
                    <Image
                      source={{uri: item?.images[0]?.image_url}}
                      style={{
                        margin: 6,
                        height: 130,
                      }}
                    />
                    <Text
                      style={[
                        styles.textGrey50,
                        {marginTop: 8, width: '100%'},
                      ]}>
                      {item.name}
                    </Text>
                    {item?.flashale?.discount === undefined ? (
                      ''
                    ) : (
                      <View style={{flexDirection: 'row'}}>
                        <Text
                          style={{
                            color: Colors.GREY,
                            marginRight: 8,
                            textDecorationLine: 'line-through',
                          }}>
                          {convertCurrency(item?.price, 'Rp. ')}
                        </Text>
                        <Text style={{color: Colors.BLUE}}>
                          {item?.flashale?.discount}%
                        </Text>
                      </View>
                    )}
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.text2}>
                        {convertCurrency(
                          (item?.price *
                            (100 -
                              (item?.flashale?.discount === '' ||
                              item?.flashale?.discount === undefined
                                ? 0
                                : item?.flashale?.discount))) /
                            100,
                          'Rp. ',
                        )}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={{marginTop: '25%'}} />
        </ScrollView>
      )}
      <ModalCenter2_adt show={modalTop}>
        <View style={{flexDirection: 'row', height: 'auto', width: '100%'}}>
          <TouchableOpacity
            style={{width: '10%'}}
            onPress={() => setModalTop(false)}>
            <AntDesign name="close" size={25} />
          </TouchableOpacity>
          <View style={{width: '80%', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold'}}>Beli Sekarang</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', height: 'auto'}}>
          <View style={styles.modalTopView}>
            {image_list === undefined ? (
              ''
            ) : (
              <Image
                source={{
                  uri: image_list[0]?.image_url,
                }}
                style={{width: '100%', height: 100, resizeMode: 'center'}}
              />
            )}
          </View>
          <View style={{width: '5%'}}></View>
          <View style={{width: '60%'}}>
            <Text style={{color: Colors.BLACK}}>{dataProduct?.name}</Text>
            <Text style={{fontWeight: 'bold', color: Colors.BLUE}}>
              Rp. {dataProduct?.price}
            </Text>
            <Text>Stok: {dataProduct?.stock}</Text>
          </View>
        </View>
        <View style={styles.modalTopView2}>
          <Text>Warna</Text>
          <View style={{flexDirection: 'row', marginTop: 8}}>
            {modalWarnaAvail.includes('Hitam') ? (
              <TouchableOpacity onPress={() => setModalWarna('Hitam')}>
                <Text
                  style={[
                    styles.modalTopTouch,
                    {
                      backgroundColor:
                        modalWarna === 'Hitam' ? 'blue' : 'rgba(0,0,0,0.1)',
                      color: modalWarna === 'Hitam' ? 'white' : 'black',
                    },
                  ]}>
                  Hitam
                </Text>
              </TouchableOpacity>
            ) : (
              <Text style={[styles.modalTopTouch, styles.modalTopIcon]}>
                Hitam
              </Text>
            )}
            {modalWarnaAvail.includes('Putih') ? (
              <TouchableOpacity onPress={() => setModalWarna('Putih')}>
                <Text
                  style={[
                    styles.modalTopTouch,
                    {
                      backgroundColor:
                        modalWarna === 'Putih' ? 'blue' : 'rgba(0,0,0,0.1)',
                      color: modalWarna === 'Putih' ? 'white' : 'black',
                    },
                  ]}>
                  Putih
                </Text>
              </TouchableOpacity>
            ) : (
              <Text style={[styles.modalTopTouch, styles.modalTopIcon]}>
                Putih
              </Text>
            )}
            {modalWarnaAvail.includes('Pink') ? (
              <TouchableOpacity onPress={() => setModalWarna('Pink')}>
                <Text
                  style={[
                    styles.modalTopTouch,
                    {
                      backgroundColor:
                        modalWarna === 'Pink' ? 'blue' : 'rgba(0,0,0,0.1)',
                      color: modalWarna === 'Pink' ? 'white' : 'black',
                    },
                  ]}>
                  Pink
                </Text>
              </TouchableOpacity>
            ) : (
              <Text style={[styles.modalTopTouch, styles.modalTopIcon]}>
                Pink
              </Text>
            )}
          </View>
        </View>
        <View style={[styles.modalTopView2]}>
          <Text>Jumlah (Stok: {dataProduct?.stock})</Text>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <TouchableOpacity
              onPress={() =>
                dataProduct?.stock === '' || dataProduct?.stock === undefined
                  ? ''
                  : setModalCount(prevCount =>
                      prevCount > 0 ? prevCount - 1 : 0,
                    )
              }>
              <Entypo name="minus" size={25} color="grey" />
            </TouchableOpacity>

            <Text style={styles.modalText}>{modalCount}</Text>
            <TouchableOpacity
              onPress={() =>
                dataProduct?.stock === '' || dataProduct?.stock === undefined
                  ? ''
                  : setModalCount(prevCount =>
                      prevCount < dataProduct?.stock
                        ? prevCount + 1
                        : dataProduct?.stock,
                    )
              }>
              <Entypo
                name="plus"
                size={25}
                color="white"
                style={{backgroundColor: 'blue', borderRadius: 50}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.modalTopView2, {paddingBottom: 0}]}>
          <Text>Penawaran (harga asli: Rp {dataProduct?.price})</Text>
          <TextInput
            onChangeText={text => setCatatan(text)}
            keyboardType="numeric">
            {catatan}
          </TextInput>
        </View>
        <View style={[styles.modalTopView2, {marginTop: 0}]}>
          {catatan === '' || modalCount === 0 || modalWarna === '' ? (
            <View style={[styles.bottomTouch3, {backgroundColor: 'grey'}]}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                Buat Sekarang
              </Text>
            </View>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setModalTop(false);
                setModal(true);
                // navigation.navigate('Chatting', {
                //   Code: 'buatpenawaran',
                //   id: dataProduct?.id,
                //   Warna: modalWarna,
                //   Jumlah: modalCount,
                //   Harga: catatan,
                //   Waktu: currentTime,
                //   WarnaAvail: modalWarnaAvail,
                // });
                // handleBuatSekarang();
                // setModalCount(0);
                // setCatatan('');
                // setModalWarna('');
              }}
              style={styles.bottomTouch3}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                Buat Sekarang
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ModalCenter2_adt>
      <ModalCenter_adt show={modal}>
        <Text style={{fontWeight: 'bold', color: 'black'}}>
          Berhasil Ditambahkan
        </Text>
        <Text style={{marginTop: 15}}>
          Produk telah berhasil ditambahkan ke
        </Text>
        <TouchableOpacity
          onPress={() => {
            setModal(false);
            navigation.navigate('Keranjang');
          }}
          style={[styles.bottomTouch3, {marginTop: 15}]}>
          <Text
            style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>
            Lihat Keranjang
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setModal(false);
            // navigation.navigate('Home');
          }}
          style={[styles.bottomTouch, {marginTop: 15, borderRadius: 0}]}>
          <Text
            style={{color: 'blue', fontWeight: 'bold', textAlign: 'center'}}>
            Lanjut Belanja
          </Text>
        </TouchableOpacity>
      </ModalCenter_adt>
      <ModalCenter_adt show={modal2}>
        <Text style={{fontWeight: 'bold', color: 'black', textAlign: 'center'}}>
          Apakah anda ingin melakukan Pre Order ?
        </Text>
        <Text style={{marginTop: 15, textAlign: 'center'}}>
          Strok barang sedang kosong. Apabila melakukan pre order, barang akan
          dikirim setelah stok tersedia
        </Text>
        <TouchableOpacity
          onPress={() => {
            setModal2(false);
            navigation.navigate('Keranjang');
          }}
          style={[styles.bottomTouch3, {marginTop: 15}]}>
          <Text
            style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>
            Lanjutkan Pre Order
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setModal2(false);
          }}
          style={[styles.bottomTouch, {marginTop: 15, borderRadius: 0}]}>
          <Text
            style={{color: 'blue', fontWeight: 'bold', textAlign: 'center'}}>
            Kembali ke detail produk
          </Text>
        </TouchableOpacity>
      </ModalCenter_adt>
      <ModalCenter2_adt show={modalTop2}>
        <View style={{flexDirection: 'row', height: 'auto', width: '100%'}}>
          <TouchableOpacity
            style={{width: '10%'}}
            onPress={() => setModalTop2(false)}>
            <AntDesign name="close" size={25} />
          </TouchableOpacity>
          <View style={{width: '80%', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold'}}>Masukkan Ke Keranjang</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', height: 'auto'}}>
          <View style={styles.modalTopView}>
            {image_list === undefined ? (
              ''
            ) : (
              <Image
                source={{
                  uri: image_list[0]?.image_url,
                }}
                style={{width: '100%', height: 100, resizeMode: 'center'}}
              />
            )}
          </View>
          <View style={{width: '5%'}}></View>
          <View style={{width: '60%'}}>
            <Text style={{color: 'black'}}>{dataProduct?.name}</Text>
            <Text style={{fontWeight: 'bold', color: 'blue'}}>
              Rp. {dataProduct?.price}
            </Text>
            <Text>Stok: {dataProduct?.stock}</Text>
          </View>
        </View>
        <View style={[styles.modalTopView2]}>
          <Text>Jumlah (Stok: {dataProduct?.stock})</Text>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <TouchableOpacity
              onPress={() =>
                dataProduct?.stock === '' || dataProduct?.stock === undefined
                  ? ''
                  : setModalCount(prevCount =>
                      prevCount > 0 ? prevCount - 1 : 0,
                    )
              }>
              <Entypo name="minus" size={25} color="grey" />
            </TouchableOpacity>

            <Text style={styles.modalText}>{modalCount}</Text>
            <TouchableOpacity
              onPress={() =>
                dataProduct?.stock === '' || dataProduct?.stock === undefined
                  ? ''
                  : setModalCount(prevCount =>
                      prevCount < dataProduct?.stock
                        ? prevCount + 1
                        : dataProduct?.stock,
                    )
              }>
              <Entypo
                name="plus"
                size={25}
                color="white"
                style={{backgroundColor: 'blue', borderRadius: 50}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.modalTopView2, {paddingBottom: 0}]}>
          <Text>Penawaran (harga asli: Rp {dataProduct?.price})</Text>
          <TextInput
            onChangeText={text => setCatatan(text)}
            keyboardType="numeric">
            {catatan}
          </TextInput>
        </View>
        <View style={[styles.modalTopView2, {marginTop: 0}]}>
          {catatan === '' || modalCount === 0 || modalWarna === '' ? (
            <View style={[styles.bottomTouch3, {backgroundColor: 'grey'}]}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                Buat Sekarang
              </Text>
            </View>
          ) : (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Chatting', {
                  Code: 'buatpenawaran',
                  id: dataProduct?.id,
                  Warna: modalWarna,
                  Jumlah: modalCount,
                  Harga: catatan,
                  Waktu: currentTime,
                  WarnaAvail: modalWarnaAvail,
                });
                setModalTop(false);
                handleBuatSekarang();
                setModalCount(0);
                setCatatan('');
                setModalWarna('');
              }}
              style={[styles.bottomTouch3]}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                Buat Sekarang
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ModalCenter2_adt>
      <View style={styles.bottomView}>
        {dataProduct?.stock === 0 ? (
          <TouchableOpacity
            onPress={() => setModal2(true)}
            style={styles.bottomTouch2}>
            <Text
              style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
              Pre Order
            </Text>
          </TouchableOpacity>
        ) : (
          <>
            <View style={{width: '48%'}}>
              <TouchableOpacity
                onPress={() => setModalTop2(true)}
                style={styles.bottomTouch}>
                <Text style={{color: 'blue', textAlign: 'center'}}>
                  Tambah Ke Keranjang
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{width: '4%'}} />
            <View style={{width: '48%'}}>
              <TouchableOpacity
                onPress={() => setModalTop(true)}
                style={styles.bottomTouch2}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  Beli Sekarang
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  //modal Top
  modalTopView: {
    width: '25%',
  },
  modalTopView2: {
    width: '100%',
    borderTopColor: 'grey',
    borderTopWidth: 1,
    marginTop: 16,
    paddingVertical: 16,
  },
  modalTopTouch: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    marginRight: 5,
  },
  modalTopIcon: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    color: 'white',
  },
  //modal Top
  bottomView: {
    height: '13%',
    padding: 16,
    bottom: 0,
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  bottomTouch: {
    width: '100%',
    paddingHorizontal: 19,
    paddingVertical: 11,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'center',
  },
  bottomTouch2: {
    width: '100%',
    paddingHorizontal: 19,
    paddingVertical: 11,
    backgroundColor: 'blue',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'center',
  },
  bottomTouch3: {
    width: '100%',
    paddingHorizontal: 19,
    paddingVertical: 11,
    backgroundColor: 'blue',
    borderWidth: 1,
    alignSelf: 'center',
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
    marginTop: 16,
    elevation: 5,
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  textGrey50: {color: 'grey', width: '50%'},
  textBlack50: {color: Colors.BLACK, width: '50%', textAlign: 'right'},

  modalText: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.GREY,
    marginHorizontal: 8,
    width: 24,
    textAlign: 'center',
  },
  view2: {
    padding: 8,
    width: 158,
    borderWidth: 1,
    borderColor: Colors.GREY,
    borderRadius: 10,
    marginRight: 5,
  },
  view5: {
    padding: 16,
    marginBottom: 16,
    position: 'absolute',
    flexDirection: 'row',
    height: 'auto',
    bottom: '13%',
    width: '100%',
    flexDirection: 'row-reverse',
  },
  touch: {
    backgroundColor: Colors.WHITE,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Colors.BLACK,
    padding: 10,
    alignItems: 'center',
  },
  text2: {
    marginTop: 8,
    color: Colors.BLACK,
    fontWeight: 'bold',
    marginRight: 5,
  },
  text3: {
    color: Colors.BLUE,
    textAlign: 'left',
    left: 0,
    backgroundColor: '#b4c3ed',
    paddingHorizontal: 7,
    paddingVertical: 1,
  },
  view3: {
    marginTop: 24,
    height: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  view4: {
    backgroundColor: Colors.GREY,
    height: 10,
    width: 10,
    borderRadius: 50,
    marginRight: 5,
  },
  view6: {
    backgroundColor: Colors.BLUE,
    height: 10,
    width: 25,
    borderRadius: 50,
    marginRight: 5,
  },
  image: {height: 247, width: 247, resizeMode: 'contain'},
});

export default DetailItemComponent;

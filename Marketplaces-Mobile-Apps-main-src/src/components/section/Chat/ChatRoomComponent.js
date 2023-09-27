import React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Button} from 'react-native-vector-icons/dist/Ionicons';

const ChatRoomComponent = ({
  messages,
  newMessage,
  setNewMessage,
  handleSend,
  handleShowImageView,
  showImageView,
  handleUpload,
  showUpload,
  messageItemRef,
  onTextLayout,
  messageItemHeight,
}) => {
  const renderMessageItem = ({item}) => {
    const isCurrentUser = item.sender === 'John'; // Change 'John' to the current user's name

    return (
      <View
        ref={messageItemRef}
        onLayout={onTextLayout}
        style={[
          styles.messageItem,
          isCurrentUser ? styles.messageItemRight : styles.messageItemLeft,
        ]}>
        <Text style={styles.sender}>{item.sender}</Text>
        {item.image ? (
          <View style={styles.barang1}>
            <View style={styles.askBarang}>
              <Image
                source={item.image}
                style={{width: 48, height: 48, borderRadius: 24}}
              />
              <View style={styles.product}>
                <Text style={styles.produkName}>
                  {' '}
                  Blender Toshiba BL15PH2, Blender in 1
                </Text>
                <Text style={styles.produkPrice}> Rp 1.190.000</Text>
              </View>
            </View>
            {!isCurrentUser && (
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity style={styles.Buy}>
                  <Text style={{fontSize: 12, color: '#2647E6'}}>
                    Beli Sekarang
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Keranjang}>
                  <Text style={{fontSize: 12, color: '#FFFFFF'}}>
                    Masukan Keranjang
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ) : (
          <View style={{width: 0, height: 0}} /> // Empty view when image is not provided
        )}
        <Text style={styles.messageText}>{item.message}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.customer}>
          <TouchableOpacity style={styles.back}>
            <Icon name="arrow-left" size={25} />
          </TouchableOpacity>
          <View style={styles.profile}></View>
          <View style={styles.name}>
            <Text style={styles.sender}>chatCustomer1</Text>
            <Text>Terakhir online 5 menit yang lalu</Text>
          </View>
        </View>
        <View style={styles.sender}></View>
      </View>
      <FlatList
        data={messages}
        renderItem={renderMessageItem}
        keyExtractor={item => item.id}
      />
      {showUpload && (
        <View style={styles.sendProduk}>
          <View style={styles.produk}>
            <View style={styles.gambarProduk}>
              <Image
                source={require('../../../assets/barang.png')}
                style={styles.produk2}
              />
            </View>
            <View style={styles.produkDetail}>
              <Text style={styles.produkName}> Blender Toshiba BL15…</Text>
              <Text style={styles.produkPrice}> Rp 1.190.000</Text>
            </View>
            <TouchableOpacity onPress={handleUpload}>
              <Icon name="window-close" style={styles.close} />
            </TouchableOpacity>
          </View>
        </View>
      )}

      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <TextInput
            placeholder="Tulis pesan..."
            onChangeText={text => setNewMessage(text)}
            value={newMessage}
          />
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={handleShowImageView}>
              <Icon name="plus-circle" size={24} color="#818C99" />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Icon name="arrow-circle-up" size={34} color="#2647E6" />
        </TouchableOpacity>
      </View>
      {showImageView && (
        <View style={styles.upload}>
          <TouchableOpacity onPress={handleUpload}>
            <View style={styles.uploadProduk}>
              <Icon name="tag" size={22} color="#FC9F4D" />
            </View>
            <Text>Produk</Text>
          </TouchableOpacity>
          <View style={styles.iconImage}>
            <View style={styles.uploadImage}>
              <Icon name="image" size={22} color="#473BF6" />
            </View>
            <Text>Gambar</Text>
          </View>
          <View style={styles.iconDokumen}>
            <View style={styles.uploadDokumen}>
              <Icon name="paperclip" size={22} color="#1736C7" />
            </View>
            <Text>Dokumen</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFBFF',
  },
  customer: {
    backgroundColor: '#FFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 2,
    justifyContent: 'flex-start',
    marginBottom: 20,
    borderBottomWidth: 2.9,
    borderBottomColor: '#3C444E1F',
  },
  profile: {
    height: 45,
    width: 45,
    borderRadius: 40,
    backgroundColor: '#E1E6EB',
  },
  back: {marginRight: 14},
  name: {margin: 10},

  messageItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    width: 190,
    marginLeft: 20,
  },
  messageItemRight: {
    alignSelf: 'flex-end',
    backgroundColor: '#E9EDFD', // Set a different background color for the current user's messages
    marginRight: 20,
    width: 283,
  },
  messageItemLeft: {
    alignSelf: 'flex-start',
    backgroundColor: '#F0F2F5', // Set a different background color for received messages
    marginLeft: 20,
    width: 283,
  },
  sender: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#000000',
  },
  messageText: {
    fontSize: 14,
  },
  time: {
    fontSize: 12,
    color: 'gray',
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    height: 67,
  },
  input: {
    flex: 1,
    width: 285,
    height: 40,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    backgroundColor: '#F0F2F5',
  },
  iconContainer: {
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButton: {
    marginLeft: 5,
    paddingHorizontal: 8,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  upload: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    flexDirection: 'row',
    width: 390,
  },
  uploadProduk: {
    height: 45,
    width: 45,
    borderRadius: 40,
    backgroundColor: '#FC9F4D1A',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  uploadImage: {
    height: 45,
    width: 45,
    borderRadius: 40,
    backgroundColor: '#805CF91A',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  iconImage: {marginLeft: 24, alignItems: 'center'},
  iconDokumen: {marginLeft: 15, alignItems: 'center'},
  uploadDokumen: {
    height: 45,
    width: 45,
    borderRadius: 40,
    backgroundColor: '#2DCBFB1A',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  produk: {
    backgroundColor: '#F0F2F5',
    width: 214,
    height: 62,
    justifyContent: 'flex-start',
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    flexDirection: 'row',
  },

  gambarProduk: {
    width: 46,
    height: 46,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    alignSelf: 'center',
  },
  produk2: {
    width: 33,
    height: 41,
  },
  sendProduk: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    flexDirection: 'row',
    width: 390,
    borderTopWidth: 2,
    borderTopColor: '#3C444E1F',
  },
  produkDetail: {alignSelf: 'center', paddingHorizontal: 5},
  produkName: {fontSize: 12, alignSelf: 'center', margin: 2},
  produkPrice: {
    fontSize: 12,
    margin: 2,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#000000',
  },
  close: {marginTop: 5, marginRight: 5},
  askBarang: {
    width: 253,
    height: 80,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'row',
  },
  barang1: {
    width: 253,
    height: 110,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 5,
  },
  product: {width: 140},
  Buy: {
    borderWidth: 1,
    borderColor: '#2647E6',
    marginHorizontal: 10,
    paddingHorizontal: 5,
    borderRadius: 2,
  },
  Keranjang: {
    backgroundColor: '#2647E6',
    paddingHorizontal: 5,
    borderRadius: 2,
  },
});

export default ChatRoomComponent;

import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {ScrollView} from 'react-native-gesture-handler';
import {Color} from '../../../component/global/GlobalStyles';
import {Colors} from '../../../styles';
import {TextBold, TextRegular} from '../../global/Text';
import PemberitahuanComponent from './PemberitahuanComponent';

const ItemListComponent = ({navigation, ItemList, title}) => {
  const RenderItemBrand = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          [navigation.navigate('DetailItem', {id: item.id})];
        }}
        style={{
          alignItems: 'center',
          padding: 6,
          width: '49%',
          borderColor: Colors.GREY,
          borderWidth: 1,
          margin: 1,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {item?.images ? (
            <Image
              source={{uri: item?.images[0]?.image_url}}
              style={{height: 148, width: 148}}
            />
          ) : (
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930',
              }}
              style={{height: 148, width: 148}}
            />
          )}
          <TextRegular
            text={item?.name}
            size={15}
            style={{textAlign: 'center', marginTop: 8}}
          />
          <View
            style={{textAlign: 'center', marginTop: 8, flexDirection: 'row'}}>
            <TextBold text={'Rp '} size={15} />
            <TextBold text={item?.price} size={15} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: '8%',
          flexDirection: 'row',
          alignSelf: 'center',
          alignContent: 'center',
          borderBottomColor: Colors.GREY,
          borderBottomWidth: 1,
        }}>
        <TouchableOpacity
          style={{width: '10%', marginTop: '3%'}}
          onPress={() => {
            [navigation.navigate('BottomNav')];
          }}>
          <AntDesign name="arrowleft" size={40} color="black" />
        </TouchableOpacity>
        <View
          style={{
            width: '80%',
          }}>
          <TextBold
            text={title}
            size={15}
            style={{
              marginTop: '4%',
              textAlignVertical: 'center',
              textAlign: 'center',
            }}
          />
        </View>
      </View>
      <View style={{padding: 13, width: '100%'}}>
        <ScrollView>
          <FlatList
            data={ItemList.data}
            renderItem={({item}) => <RenderItemBrand item={item} />}
            numColumns={2}
            pagingEnabled
          />
          <View style={{marginBottom: '15%'}} />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ItemListComponent;

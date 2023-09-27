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
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import {Color} from '../../../component/global/GlobalStyles';
import {Colors} from '../../../styles';
import {TextBold, TextRegular} from '../../global/Text';
import PemberitahuanComponent from './PemberitahuanComponent';

const AllBrandComponent = ({navigation, allBrand}) => {
  const RenderItemBrand = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ItemList', {
            id: item.id,
            Name: item.name,
            Cek: 'BRAND',
          });
        }}
        style={{
          marginLeft: 20,
          marginBottom: 20,
        }}>
        <Image
          source={{uri: item.image_url}}
          style={{aspectRatio: 1, resizeMode: 'contain', width: 80}}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      <View>
        <FlatList
          data={allBrand.data}
          renderItem={({item}) => <RenderItemBrand item={item} />}
          // horizontal
          initialNumToRender={4}
          showsHorizontalScrollIndicator={false}
          numColumns={3}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AllBrandComponent;

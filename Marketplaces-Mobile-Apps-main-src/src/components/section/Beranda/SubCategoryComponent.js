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
import {Colors} from '../../../styles';

const SubCategoryComponent = ({navigation, SubCategory}) => {
  const RenderItemBrand = ({item}) => {
    return (
      <TouchableOpacity
      onPress={() => {
        navigation.navigate('ItemList', { id: item.id, Name: item.name , Cek:'CATEGORY'});
      }}
        style={{
          alignItems: 'center',
          width: '25%',
          justifyContent: 'space-between',
          paddingVertical: 6,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {item.image_url ? (
            <Image
              source={{uri: item.image_url}}
              style={{height: 30, width: 30, borderRadius: 30 / 2}}
            />
          ) : (
            <View
              style={{
                backgroundColor: Colors.GREY,
                height: 30,
                width: 30,
                borderRadius: 30 / 2,
              }}></View>
          )}
          <Text
            style={{
              textAlign: 'center',
            }}>
            {item.description}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      <View style={{padding: 13, width: '100%'}}>
        <FlatList
          data={SubCategory.data}
          renderItem={({item}) => <RenderItemBrand item={item} />}
          // horizontal
          numColumns={4}
          pagingEnabled
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SubCategoryComponent;

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
import SubCategory from '../../../screen/Beranda/SubCategory';
import { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';

const AllCategoryComponent = ({
  navigation,
  AllCategory,
  showSub,
  setShowSub,
}) => {
  const isFocused = useIsFocused();
  useEffect(() => {
    setShowSub(-1);
  }, [isFocused]);

  const RenderItemBrand = ({item, id}) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            setShowSub(id);
          }}
          style={{
            backgroundColor: Colors.WHITE,
            borderBottomColor: Colors.GREY,
            padding: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomWidth: 1,
          }}>
          <TextBold text={item.description} color={Colors.BLACK} />
          <Ionicons name="chevron-down" size={22} />
        </TouchableOpacity>
        {showSub == id  ? (
          <View>
            <SubCategory navigation={navigation} id={item.id}/>
          </View>
        ) : null}
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <View>
        <FlatList
          data={AllCategory.data}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <RenderItemBrand item={item} id={index} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AllCategoryComponent;

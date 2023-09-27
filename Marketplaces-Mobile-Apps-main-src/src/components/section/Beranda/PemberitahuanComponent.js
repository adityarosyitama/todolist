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
import {TextBold, TextRegular} from '../../global/Text';
import {Colors} from '../../../styles';
import moment from 'moment/moment';

const PemberitahuanComponent = ({
  navigation,
  notification,
  postReadNotification,
}) => {
  const RenderItem = ({item}) => (
    <TouchableOpacity
      style={{
        width: '100%',
        backgroundColor: item.read == true ? Colors.WHITE : Colors.GREY_2,
        paddingLeft: 20,
        paddingRight: 10,
      }}
      onPress={() => postReadNotification(item.id)}>
      <View style={{flexDirection: 'row', width: '100%'}}>
        <TextRegular text={item.type} size={14} />
        <TextRegular text={' : '} size={14} />
        <TextRegular text={moment(item.created_at).format('DD MMM yyyy')} />
      </View>
      <View style={{flexDirection: 'row', marginTop: 6}}>
        <TextRegular text={item.title} size={14} />
      </View>
      <TextRegular
        text={item.description}
        size={14}
        color={'black'}
        style={{marginTop: 6}}
      />
      <View
        style={{
          backgroundColor: Colors.GREY,
          height: 1,
          marginVertical: 38,
          width: '100%',
        }}></View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={notification.data}
        renderItem={({item}) => <RenderItem item={item} />}
      />
    </View>
  );
};

export default PemberitahuanComponent;

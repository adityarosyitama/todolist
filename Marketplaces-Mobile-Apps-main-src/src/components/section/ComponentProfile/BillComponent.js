import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {Colors, Shadow, Mixins} from '../../../styles';

const BillComponent = () => {
  const [checked, setChecked] = useState(null);
  const [available, setAvailable] = useState('');

  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: Colors.WHITE}}>
      <View style={styles.cardView}>
        <TouchableOpacity style={styles.card}>
          {available === '' ? (
            <Text
              style={{
                fontSize: 12,
                lineHeight: 18,
                fontFamily: 'Inter_regular',
                color: Colors.BLUE_NAVY,
                textAlign: 'left',
              }}>
              All
            </Text>
          ) : available === 'Close' ? (
            <Text
              style={{
                fontSize: 12,
                lineHeight: 18,
                fontFamily: 'Inter_regular',
                color: Colors.BLACK,
                textAlign: 'left',
              }}>
              All
            </Text>
          ) : (
            ''
          )}
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.card}>
            <Text
              style={{
                fontSize: 12,
                lineHeight: 18,
                fontFamily: 'Inter_regular',
                color: '#111827',
              }}>
              Due Date
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.card}>
            <Text
              style={{
                fontSize: 12,
                lineHeight: 18,
                fontFamily: 'Inter_regular',
                color: '#111827',
              }}>
              Paid Off
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.card, styles.filter]}>
            <Text
              style={{
                fontSize: 12,
                lineHeight: 18,
                fontFamily: 'Inter_regular',
                color: '#111827',
              }}>
              Filter
            </Text>
            <Icon name="tune" size={16} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.head}>
          <View
            style={{
              // paddingHorizontal: 10,
              // backgroundColor: 'red',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              onPress={() => setChecked(checked === 1 ? null : 1)}>
              <Icon
                name={checked === 1 ? 'checkbox-marked' : 'checkbox-outline'}
                size={24}
                style={{paddingRight: 6}}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 18,
                fontFamily: 'Inter_regular',
                color: '#687083',
                alignSelf: 'center',
                marginRight: 16,
              }}>
              OID64746534354
            </Text>
          </View>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 18,
              fontFamily: 'Inter_regular',
              color: '#687083',
              textAlign: 'left',
              alignSelf: 'center',
            }}>
            10 October 2019
          </Text>
        </View>
        <View style={styles.detail}>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 18,
              fontFamily: 'Inter_regular',
              color: '#9aa2b1',
              textAlign: 'left',
            }}>
            Bill Total
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                fontWeight: '600',
                fontFamily: 'Inter_semibold',
                color: '#092540',
                textAlign: 'left',
              }}>
              $ 200.000
            </Text>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                fontWeight: '600',
                fontFamily: 'Inter_semibold',
                color: '#ff4d4d',
                textAlign: 'left',
              }}>
              -$ 96.000
            </Text>
          </View>
        </View>
        <View style={styles.due}>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 18,
              fontFamily: 'Inter_regular',
              color: '#1a3650',
              textAlign: 'left',
            }}>
            Due Date : 16 October 2022
          </Text>
        </View>
        <View style={styles.head}>
          <View
            style={{
              // paddingHorizontal: 10,
              // backgroundColor: 'red',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              onPress={() => setChecked(checked === 2 ? null : 2)}>
              <Icon
                name={checked === 2 ? 'checkbox-marked' : 'checkbox-outline'}
                size={24}
                style={{paddingRight: 6}}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 18,
                fontFamily: 'Inter_regular',
                color: '#687083',
                alignSelf: 'center',
                marginRight: 16,
              }}>
              OID64746534354
            </Text>
          </View>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 18,
              fontFamily: 'Inter_regular',
              color: '#687083',
              textAlign: 'left',
              alignSelf: 'center',
            }}>
            10 October 2019
          </Text>
        </View>
        <View style={styles.detail}>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 18,
              fontFamily: 'Inter_regular',
              color: '#9aa2b1',
              textAlign: 'left',
            }}>
            Bill Total
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                fontWeight: '600',
                fontFamily: 'Inter_semibold',
                color: '#092540',
                textAlign: 'left',
              }}>
              $ 200.000
            </Text>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                fontWeight: '600',
                fontFamily: 'Inter_semibold',
                color: '#ff4d4d',
                textAlign: 'left',
              }}>
              -$ 96.000
            </Text>
          </View>
        </View>
        <View style={styles.due}>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 18,
              fontFamily: 'Inter_regular',
              color: '#1a3650',
              textAlign: 'left',
            }}>
            Due Date : 16 October 2022
          </Text>
        </View>
        <View style={styles.head}>
          <View
            style={{
              // paddingHorizontal: 10,
              // backgroundColor: 'red',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              onPress={() => setChecked(checked === 3 ? null : 3)}>
              <Icon
                name={checked === 3 ? 'checkbox-marked' : 'checkbox-outline'}
                size={24}
                style={{paddingRight: 6}}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 18,
                fontFamily: 'Inter_regular',
                color: '#687083',
                alignSelf: 'center',
                marginRight: 16,
              }}>
              OID64746534354
            </Text>
          </View>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 18,
              fontFamily: 'Inter_regular',
              color: '#687083',
              textAlign: 'left',
              alignSelf: 'center',
            }}>
            10 October 2019
          </Text>
        </View>
        <View style={styles.detail}>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 18,
              fontFamily: 'Inter_regular',
              color: '#9aa2b1',
              textAlign: 'left',
            }}>
            Bill Total
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                fontWeight: '600',
                fontFamily: 'Inter_semibold',
                color: '#092540',
                textAlign: 'left',
              }}>
              $ 200.000
            </Text>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                fontWeight: '600',
                fontFamily: 'Inter_semibold',
                color: '#ff4d4d',
                textAlign: 'left',
              }}>
              -$ 96.000
            </Text>
          </View>
        </View>
        <View style={styles.due}>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 18,
              fontFamily: 'Inter_regular',
              color: '#1a3650',
              textAlign: 'left',
            }}>
            Due Date : 16 October 2022
          </Text>
        </View>
        <View style={styles.head}>
          <View
            style={{
              // paddingHorizontal: 10,
              // backgroundColor: 'red',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            {/* <TouchableOpacity onPress={toggleCheckbox}>
              <Icon
                name={checked ? 'checkbox-marked' : 'checkbox-outline'}
                size={24}
                style={{paddingRight: 6}}
              />
            </TouchableOpacity> */}
            <Text
              style={{
                fontSize: 16,
                lineHeight: 18,
                fontFamily: 'Inter_regular',
                color: '#687083',
                alignSelf: 'center',
                marginRight: 16,
              }}>
              OID64746534354
            </Text>
          </View>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 18,
              fontFamily: 'Inter_regular',
              color: '#687083',
              textAlign: 'left',
              alignSelf: 'center',
            }}>
            10 October 2019
          </Text>
        </View>
        <View style={styles.detail}>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 18,
              fontFamily: 'Inter_regular',
              color: '#9aa2b1',
              textAlign: 'left',
            }}>
            Bill Total
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                fontWeight: '600',
                fontFamily: 'Inter_semibold',
                color: '#092540',
                textAlign: 'left',
              }}>
              $ 200.000
            </Text>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                fontWeight: '600',
                fontFamily: 'Inter_semibold',
                color: '#ea9437',
                textAlign: 'left',
              }}>
              Process
            </Text>
          </View>
        </View>
        <View style={styles.head}>
          <View
            style={{
              // paddingHorizontal: 10,
              // backgroundColor: 'red',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            {/* <TouchableOpacity onPress={toggleCheckbox}>
              <Icon
                name={checked ? 'checkbox-marked' : 'checkbox-outline'}
                size={24}
                style={{paddingRight: 6}}
              />
            </TouchableOpacity> */}
            <Text
              style={{
                fontSize: 16,
                lineHeight: 18,
                fontFamily: 'Inter_regular',
                color: '#687083',
                alignSelf: 'center',
                marginRight: 16,
              }}>
              OID64746534354
            </Text>
          </View>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 18,
              fontFamily: 'Inter_regular',
              color: '#687083',
              textAlign: 'left',
              alignSelf: 'center',
            }}>
            10 October 2019
          </Text>
        </View>
        <View style={styles.detail}>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 18,
              fontFamily: 'Inter_regular',
              color: '#9aa2b1',
              textAlign: 'left',
            }}>
            Bill Total
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                fontWeight: '600',
                fontFamily: 'Inter_semibold',
                color: '#092540',
                textAlign: 'left',
              }}>
              $ 200.000
            </Text>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                fontWeight: '600',
                fontFamily: 'Inter_semibold',
                color: '#2ab95e',
                textAlign: 'left',
              }}>
              Paid
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.payment}>
        <View style={{height: 44}}>
          <Text style={[styles.sub, styles.typo]}>Sub Total</Text>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 24,
              fontWeight: '700',
              fontFamily: 'Inter_bold',
              color: '#092540',
              textAlign: 'right',
              marginTop: 2,
            }}>
            $ 400.000
          </Text>
        </View>
        <TouchableOpacity
          style={styles.component}
          onPress={() => navigation.navigate('DetailPayment')}>
          <Text style={[styles.button, styles.typo]}>Pay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    display: 'flex',
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 12,
    // margin: 8,
    padding: 4,
    elevation: 4,
    shadowColor: Colors.BLACK,
    shadowOpacity: 1,
    shadowOffset: {width: 0, height: 2},
  },

  card: {
    width: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.BLUE_NAVY,
    padding: 8,
  },

  filter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  content: {
    margin: 8,
    padding: 12,
    backgroundColor: Colors.WHITE,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#f7f7f7',
    elevation: 1,
  },

  head: {
    padding: 8,
    display: 'flex',
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    borderBottomWidth: 1,
    borderBottomColor: Colors.BLACK,
  },

  detail: {
    padding: 8,
    paddingVertical: 12,
    // backgroundColor: 'red',
  },

  due: {
    display: 'flex',
    backgroundColor: '#DEDEDE',
    padding: 12,
    marginBottom: 8,
    alignItems: 'center',
  },

  payment: {
    padding: 16,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#f7f7f7',
    backgroundColor: Colors.WHITE,
    // elevation: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  sub: {fontSize: 12, lineHeight: 18, color: '#9aa2b1', textAlign: 'left'},

  typo: {fontFamily: 'Inter_semibold', fontWeight: '600'},

  component: {
    borderRadius: 6,
    backgroundColor: '#2647e6',
    shadowColor: 'rgba(65, 78, 98, 0.12)',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    overflow: 'hidden',
    paddingHorizontal: 24,
    paddingVertical: 10,
    flexDirection: 'row',
  },

  button: {fontSize: 14, lineHeight: 20, color: '#fff', textAlign: 'center'},
});

export default BillComponent;

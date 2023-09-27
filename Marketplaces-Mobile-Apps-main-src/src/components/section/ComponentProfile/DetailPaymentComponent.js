import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../../styles';

const DetailPaymentComponent = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: Colors.WHITE}}>
      <View style={styles.viewBill}>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            fontWeight: '600',
            fontFamily: 'Inter_semibold',
            color: '#000',
            textAlign: 'left',
          }}>
          Total Payment
        </Text>
        <Text
          style={{
            fontSize: 28,
            lineHeight: 36,
            fontWeight: '600',
            fontFamily: 'Inter_semibold',
            color: '#2647e6',
            textAlign: 'left',
          }}>
          $ 400.000
        </Text>
      </View>
      <View style={styles.summary}>
        <View>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 24,
              fontWeight: '600',
              fontFamily: 'Inter_semibold',
              color: '#000',
              textAlign: 'left',
            }}>
            summary
          </Text>
        </View>
        <View
          style={{
            marginTop: 12,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 20,
              fontFamily: 'Inter_regular',
              color: '#687083',
              textAlign: 'left',
            }}>
            Bill 16 October 2022
          </Text>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 20,
              fontFamily: 'Inter_regular',
              color: '#092540',
              textAlign: 'right',
            }}>
            $ 200.000
          </Text>
        </View>
        <View
          style={{
            paddingBottom: 12,
            marginTop: 8,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            borderBottomColor: Colors.GREY_3,
          }}>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 20,
              fontFamily: 'Inter_regular',
              color: '#687083',
              textAlign: 'left',
            }}>
            Bill 16 November 2022
          </Text>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 20,
              fontFamily: 'Inter_regular',
              color: '#092540',
              textAlign: 'right',
            }}>
            $ 200.000
          </Text>
        </View>
        <View
          style={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 20,
              fontFamily: 'Inter_regular',
              color: '#687083',
              textAlign: 'left',
            }}>
            Total
          </Text>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 20,
              fontFamily: 'Inter_regular',
              color: '#092540',
              textAlign: 'right',
            }}>
            $ 400.000
          </Text>
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
          onPress={() => navigation.navigate('Payment')}>
          <Text style={[styles.button, styles.typo]}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewBill: {
    padding: 16,
    backgroundColor: Colors.WHITE,
  },

  summary: {
    padding: 16,
    backgroundColor: Colors.WHITE,
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
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
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

export default DetailPaymentComponent;

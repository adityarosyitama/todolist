import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
  Modal,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../../styles';
import Copy from 'react-native-vector-icons/MaterialCommunityIcons';
import UpDown from 'react-native-vector-icons/Feather';

const PaymentComponent = () => {
  const [text, setText] = useState('');
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [checked, setChecked] = useState(null);

  const copyText = () => {
    if (text !== '123 0813 5303 3922') {
      ToastAndroid.show('Teks berhasil disalin', ToastAndroid.SHORT);
      // Menggunakan Clipboard API untuk menyalin teks
      // import { Clipboard } from 'react-native'
      // Clipboard.setString(text)
    } else {
      ToastAndroid.show('Teks kosong', ToastAndroid.SHORT);
    }
  };

  const toggleTooltip = () => {
    setTooltipVisible(!tooltipVisible);
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.WHITE}}>
      <View style={styles.bill}>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            fontWeight: '600',
            fontFamily: 'Inter_semibold',
            color: '#000',
            textAlign: 'left',
          }}>
          Total Bill
        </Text>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 20,
            fontWeight: '600',
            fontFamily: 'Inter_semibold',
            color: '#2647e6',
            textAlign: 'left',
          }}>
          $ 200.000
        </Text>
      </View>
      <View style={{padding: 0}}></View>
      <View style={styles.bank}>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 20,
            fontFamily: 'Inter_regular',
            color: '#000',
            textAlign: 'left',
          }}>
          Bank BCA (Virtual Account)
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 24,
              lineHeight: 32,
              fontWeight: '600',
              fontFamily: 'Inter_semibold',
              color: '#2647e6',
              textAlign: 'left',
            }}>
            123 0813 5303 3922
          </Text>
          <TouchableOpacity onPress={copyText}>
            <Copy
              name="content-copy"
              size={20}
              style={{
                marginLeft: 10,
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{padding: 0}}></View>
      <View style={styles.banking}>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 20,
            fontFamily: 'Inter_regular',
            color: '#000',
            textAlign: 'left',
          }}>
          mBanking
        </Text>
        <TouchableOpacity onPress={() => setChecked(checked === 1 ? null : 1)}>
          <UpDown
            name={checked === 1 ? 'chevron-up' : 'chevron-down'}
            color={Colors.BLACK}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.banking}>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 20,
            fontFamily: 'Inter_regular',
            color: '#000',
            textAlign: 'left',
          }}>
          ATM
        </Text>
        <TouchableOpacity onPress={() => setChecked(checked === 2 ? null : 2)}>
          <UpDown
            name={checked === 2 ? 'chevron-up' : 'chevron-down'}
            color={Colors.BLACK}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.banking}>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 20,
            fontFamily: 'Inter_regular',
            color: '#000',
            textAlign: 'left',
          }}>
          iBanking
        </Text>
        <TouchableOpacity onPress={() => setChecked(checked === 3 ? null : 3)}>
          <UpDown
            name={checked === 3 ? 'chevron-up' : 'chevron-down'}
            color={Colors.BLACK}
          />
        </TouchableOpacity>
      </View>
      {/* <View>
        <Text style={{}}>1. {'Choose m-Transfer -> BCA Virtual Account'}</Text>
        <Text style={{}}>
          2. Input a Virtual Account Number 123 0813 5303 3922
        </Text>
        <Text style={{}}>
          3. Check your data in screen, make sure that the Merchant is a Shopee.
          if correct and the bill is true, click Yes
        </Text>
        <Text style={{}}>Input your PIN m-BCA and click OK</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  bill: {
    // display: 'flex',
    padding: 16,
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  bank: {
    padding: 16,
    backgroundColor: Colors.WHITE,
  },

  banking: {
    padding: 16,
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default PaymentComponent;

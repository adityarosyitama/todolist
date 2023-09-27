import React, {useState} from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../../styles';

const NotificationComponent = () => {
  const [switchConfirm, setSwitchConfirm] = useState(false);
  const [switchDelivery, setSwitchDelivery] = useState(false);
  const [switchOrder, setSwitchOrder] = useState(false);
  const [switchSuccess, setSwitchSuccess] = useState(false);
  const [switchPromo, setSwitchPromo] = useState(false);

  const toggleSwitchConfirm = () => {
    setSwitchConfirm(!switchConfirm);
  };
  const toggleSwitchDelivery = () => {
    setSwitchDelivery(!switchDelivery);
  };
  const toggleSwitchOrder = () => {
    setSwitchOrder(!switchOrder);
  };
  const toggleSwitchSuccess = () => {
    setSwitchSuccess(!switchSuccess);
  };
  const toggleSwitchPromo = () => {
    setSwitchPromo(!switchPromo);
  };

  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: Colors.WHITE}}>
      <View style={styles.notification}>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 20,
            fontFamily: 'Inter_regular',
            color: '#000',
            textAlign: 'left',
            textAlignVertical: 'center',
          }}>
          Waiting Confirmation
        </Text>
        <Switch
          trackColor={{false: Colors.BLACK, true: Colors.BLUE}}
          thumbColor={switchConfirm ? Colors.BLUE_NAVY : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitchConfirm}
          value={switchConfirm}
        />
      </View>
      <View style={styles.notification}>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 20,
            fontFamily: 'Inter_regular',
            color: '#000',
            textAlign: 'left',
            textAlignVertical: 'center',
          }}>
          Waiting Delivery
        </Text>
        <Switch
          trackColor={{false: Colors.BLACK, true: Colors.BLUE}}
          thumbColor={switchDelivery ? Colors.BLUE_NAVY : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitchDelivery}
          value={switchDelivery}
        />
      </View>
      <View style={styles.notification}>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 20,
            fontFamily: 'Inter_regular',
            color: '#000',
            textAlign: 'left',
            textAlignVertical: 'center',
          }}>
          Order Sending
        </Text>
        <Switch
          trackColor={{false: Colors.BLACK, true: Colors.BLUE}}
          thumbColor={switchOrder ? Colors.BLUE_NAVY : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitchOrder}
          value={switchOrder}
        />
      </View>
      <View style={styles.notification}>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 20,
            fontFamily: 'Inter_regular',
            color: '#000',
            textAlign: 'left',
            textAlignVertical: 'center',
          }}>
          Transaction Success
        </Text>
        <Switch
          trackColor={{false: Colors.BLACK, true: Colors.BLUE}}
          thumbColor={switchSuccess ? Colors.BLUE_NAVY : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitchSuccess}
          value={switchSuccess}
        />
      </View>
      <View style={styles.notification}>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 20,
            fontFamily: 'Inter_regular',
            color: '#000',
            textAlign: 'left',
            textAlignVertical: 'center',
          }}>
          Promo & Voucher
        </Text>
        <Switch
          trackColor={{false: Colors.BLACK, true: Colors.BLUE}}
          thumbColor={switchPromo ? Colors.BLUE_NAVY : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitchPromo}
          value={switchPromo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notification: {
    padding: 16,
    backgroundColor: Colors.WHITE,
    borderBottomColor: Colors.GREY_2,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default NotificationComponent;

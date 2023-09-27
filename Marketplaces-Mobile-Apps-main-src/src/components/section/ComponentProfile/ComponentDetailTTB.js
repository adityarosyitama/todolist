import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import {Colors, Mixins, Shadow, Typography} from '../../../styles';
import Icon from 'react-native-vector-icons/Feather';

const ComponentDetailTTB = () => {
  const [isUp, setIsUp] = useState(true);
  const handleIconPress = () => {
    setIsUp(!isUp);
  };

  // const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '##9AA2B1'}}>
      <View style={styles.card}>
        <View style={{flexDirection: 'column'}}>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 18,
              fontFamily: 'Inter_regular',
              color: '#9aa2b1',
              textAlign: 'left',
            }}>
            Status
          </Text>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 20,
              fontWeight: '900',
              fontFamily: 'Inter_semibold',
              color: '#092540',
              marginTop: 2,
              textAlign: 'left',
            }}>
            ON PROCESS
          </Text>
        </View>
        <View style={{padding: 8}} />
        <View style={{flexDirection: 'column'}}>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 18,
              fontFamily: 'Inter_regular',
              color: '#9aa2b1',
              textAlign: 'left',
            }}>
            No. TTB
          </Text>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 20,
              fontWeight: '900',
              fontFamily: 'Inter_semibold',
              color: '#092540',
              marginTop: 2,
              textAlign: 'left',
            }}>
            YK - 123G - DPN
          </Text>
        </View>
        <View style={{padding: 8}} />
        <View style={{flexDirection: 'column'}}>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 18,
              fontFamily: 'Inter_regular',
              color: '#9aa2b1',
              textAlign: 'left',
            }}>
            Type SKU
          </Text>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 20,
              fontWeight: '900',
              fontFamily: 'Inter_semibold',
              color: '#092540',
              marginTop: 2,
              textAlign: 'left',
            }}>
            JPG - WD178HY - 1733
          </Text>
        </View>
      </View>
      <View style={styles.tracking}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 20,
              fontWeight: '900',
              fontFamily: 'Inter_semibold',
              color: '#092540',
              marginTop: 2,
              textAlign: 'left',
            }}>
            History Tracking
          </Text>
          <TouchableOpacity onPress={handleIconPress}>
            <Icon name={isUp ? 'chevron-up' : 'chevron-down'} size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.warning}>
        <TouchableOpacity
          onPress={() => Alert.alert('Data Unknown')}
          style={{
            padding: 12,
            backgroundColor: Colors.RED_1,
            flexDirection: 'row',
            justifyContent: 'center',
            borderRadius: 5,
          }}>
          <Icon
            name="alert-circle"
            size={20}
            color={Colors.WHITE}
            style={{paddingRight: 5}}
          />
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
            Report Problem
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: Colors.WHITE,
    borderBottomWidth: 1,
    borderBottomColor: Colors.GREY_2,
  },

  tracking: {
    padding: 16,
    backgroundColor: Colors.WHITE,
  },

  warning: {
    position: 'absolute',
    padding: 16,
    backgroundColor: Colors.WHITE,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default ComponentDetailTTB;

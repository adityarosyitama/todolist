import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Box from 'react-native-vector-icons/AntDesign';
import File from 'react-native-vector-icons/MaterialIcons';
import {Colors, Shadow, Mixins} from '../../../styles';

const ComponentCheckTTB = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#f7f7f7'}}>
      <View
        style={{backgroundColor: '#f7f7f7', borderRadius: 10, marginTop: 0}}>
        <View style={styles.cardStatus}>
          <Text
            style={{
              fontWeight: '900',
              fontFamily: 'Inter_semibold',
              color: '#B33636',
              textAlign: 'left',
              lineHeight: 18,
              fontSize: 12,
            }}>
            STATUS PENDING
          </Text>
          <Text
            style={{
              fontFamily: 'Inter_regular',
              color: '#687083',
              textAlign: 'right',
            }}>
            ID 128910
          </Text>
        </View>
        <View style={styles.cardDetail}>
          <Box
            name="dropbox"
            size={20}
            color={Colors.BLUE}
            style={{overflow: 'hidden'}}
          />
          <View style={{marginLeft: 10}}>
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
                fontWeight: 'bold',
                fontFamily: 'Inter_semibold',
                color: '#092540',
                marginTop: 2,
                textAlign: 'left',
              }}>
              SMR - YYM - 128910
            </Text>
          </View>
        </View>
        <View style={styles.cardDetail2}>
          <File
            name="insert-drive-file"
            size={20}
            color={Colors.BLUE}
            style={{overflow: 'hidden'}}
          />
          <View style={{marginLeft: 10}}>
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
                fontWeight: 'bold',
                fontFamily: 'Inter_semibold',
                color: '#092540',
                marginTop: 2,
                textAlign: 'left',
              }}>
              MYK - WD189HY - 0912
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('CheckingTTB')}>
          <View style={styles.cardStatus}>
            <Text
              style={{
                fontWeight: '900',
                fontFamily: 'Inter_semibold',
                color: '#1d8242',
                textAlign: 'left',
                lineHeight: 18,
                fontSize: 12,
              }}>
              ON PROCESS
            </Text>
            <Text
              style={{
                fontFamily: 'Inter_regular',
                color: '#687083',
                textAlign: 'right',
              }}>
              ID 130603
            </Text>
          </View>
          <View style={styles.cardDetail}>
            <Box
              name="dropbox"
              size={20}
              color={Colors.BLUE}
              style={{overflow: 'hidden'}}
            />
            <View style={{marginLeft: 10}}>
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
                  fontWeight: 'bold',
                  fontFamily: 'Inter_semibold',
                  color: '#092540',
                  marginTop: 2,
                  textAlign: 'left',
                }}>
                YK - 123G - DPN
              </Text>
            </View>
          </View>
          <View style={styles.cardDetail2}>
            <File
              name="insert-drive-file"
              size={20}
              color={Colors.BLUE}
              style={{overflow: 'hidden'}}
            />
            <View style={{marginLeft: 10}}>
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
                  fontWeight: 'bold',
                  fontFamily: 'Inter_semibold',
                  color: '#092540',
                  marginTop: 2,
                  textAlign: 'left',
                }}>
                JPG - WD178HY - 1733
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStatus: {
    padding: 5,
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.WHITE,
    // elevation: 1,
  },

  cardDetail: {
    padding: 5,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: Colors.WHITE,
    borderTopWidth: 1,
    borderColor: '#f7f7f7',
    alignSelf: 'stretch',
    flexDirection: 'row',
  },

  cardDetail2: {
    padding: 5,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: Colors.WHITE,
    // borderTopWidth: 1,
    // borderColor: '#f7f7f7',
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
});

export default ComponentCheckTTB;

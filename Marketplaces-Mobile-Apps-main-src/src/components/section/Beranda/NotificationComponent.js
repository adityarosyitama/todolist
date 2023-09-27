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

const NotificationComponent = ({
  navigation,
  notification,
  postReadNotification,
}) => {
  const [isOpenTradeIn, setisOpenTradeIn] = useState(true);
  const inverseTradeIn = () => setisOpenTradeIn(true);
  const inverseNewCar = () => setisOpenTradeIn(false);

  return (
    <View style={{flex: 1, backgroundColor: Colors.WHITE}}>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          width: '100%',
          paddingHorizontal: 16,
          borderRadius: 8,
          marginTop: 30,
          backgroundColor: Colors.WHITE,
        }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            backgroundColor: Colors.WHITE,
            borderRadius: 8,
          }}>
          <TouchableOpacity onPress={inverseTradeIn} style={styles.button}>
            {isOpenTradeIn ? (
              <TextBold
                text={'Pemberitahuan'}
                size={14}
                color={Colors.PRIMARY}
              />
            ) : (
              <TextRegular
                text={'Pemberitahuan'}
                size={14}
                color={Colors.DEEPBLUE}
              />
            )}
            {isOpenTradeIn ? (
              <View
                style={{
                  width: '100%',
                  height: 10,
                  backgroundColor: Colors.GREY,
                  marginTop: 20,
                  marginBottom: 20,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  paddingHorizontal: 5,
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    width: '100%',
                    height: 5,
                    backgroundColor: Colors.PRIMARY,
                    borderRadius: 5,
                  }}></View>
              </View>
            ) : (
              <View
                style={{
                  width: '100%',
                  height: 10,
                  backgroundColor: Colors.GREY,
                  marginTop: 20,
                  marginBottom: 20,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  paddingHorizontal: 5,
                }}></View>
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={inverseNewCar} style={[styles.button]}>
            {isOpenTradeIn ? (
              <TextRegular text={'Berita'} size={14} color={Colors.DEEPBLUE} />
            ) : (
              <TextBold text={'Berita'} size={14} color={Colors.PRIMARY} />
            )}
            {isOpenTradeIn ? (
              <View
                style={{
                  width: '100%',
                  height: 10,
                  backgroundColor: Colors.GREY,
                  marginTop: 20,
                  marginBottom: 20,
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                }}></View>
            ) : (
              <View
                style={{
                  width: '100%',
                  height: 10,
                  backgroundColor: Colors.GREY,
                  marginTop: 20,
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                  marginBottom: 20,
                  justifyContent: 'center',
                  paddingHorizontal: 5,
                }}>
                <View
                  style={{
                    width: '100%',
                    height: 5,
                    backgroundColor: Colors.PRIMARY,
                    borderRadius: 5,
                  }}></View>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{backgroundColor: Colors.WHITE}}>
        <View style={{width: '100%'}}>
          {isOpenTradeIn ? (
            <PemberitahuanComponent
              navigation={navigation}
              notification={notification}
              postReadNotification={value => postReadNotification(value)}
            />
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  cardprofile: {
    backgroundColor: Colors.WHITE,
    padding: 12,
    width: '100%',
    marginTop: 12,
    borderRadius: 5,
  },
  inputText: {
    marginTop: 20,
    width: '100%',
    alignSelf: 'center',
  },
  btnLogin: {
    width: '100%',
    alignSelf: 'center',
    height: 48,
    borderRadius: 6,
    paddingHorizontal: 16,
    backgroundColor: Colors.PRIMARY,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    height: 40,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NotificationComponent;

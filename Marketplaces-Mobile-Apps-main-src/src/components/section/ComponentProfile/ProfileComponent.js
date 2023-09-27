import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Trophy from 'react-native-vector-icons/Entypo';
import User from 'react-native-vector-icons/FontAwesome';
import Notification from 'react-native-vector-icons/Ionicons';
import Exit from 'react-native-vector-icons/MaterialCommunityIcons';
import Fingerprint from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Colors, Shadow, Mixins} from '../../../styles';
import {useSelector, useDispatch} from 'react-redux';
import convertCurrency from '../../../utils/helpers';

const ProfileComponent = ({dataUser}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({type: 'LOGOUT'});
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.card}>
          <Text
            style={{
              fontSize: 20,
              lineHeight: 24,
              fontWeight: 'bold',
              fontFamily: 'Inter_semibold',
              color: Colors.WHITE,
              textAlign: 'left',
              padding: 16,
            }}>
            {dataUser?.data?.store_name ?? 'Nama Toko Tidak Tersedia'}
          </Text>
          <View style={styles.frameParent}>
            <View>
              <Text
                style={{
                  fontSize: 12,
                  lineHeight: 18,
                  fontFamily: 'Inter_regular',
                  color: '#f9fafb',
                  opacity: 0.7,
                  textAlign: 'left',
                }}>
                Pemilik
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  lineHeight: 20,
                  fontWeight: '600',
                  fontFamily: 'Inter_semibold',
                  color: '#fff',
                  marginTop: 2,
                  textAlign: 'left',
                }}>
                {dataUser?.data?.owner_name ?? '-'}
              </Text>
            </View>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={{uri: 'https://i.ibb.co/1qN7rBp/Line-37.png'}}
            />
            <View style={styles.ownerGroup}>
              <Text
                style={{
                  fontSize: 12,
                  lineHeight: 18,
                  fontFamily: 'Inter_regular',
                  color: '#f9fafb',
                  opacity: 0.7,
                  textAlign: 'left',
                }}>
                Sales
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  lineHeight: 20,
                  fontWeight: '600',
                  fontFamily: 'Inter_semibold',
                  color: '#fff',
                  marginTop: 2,
                  textAlign: 'left',
                }}>
                {dataUser?.data?.sales ?? '-'}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.creditCard}>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 18,
              fontFamily: 'Inter_regular',
              color: '#9aa2b1',
              textAlign: 'left',
              marginTop: 16,
            }}>
            Credit Available
          </Text>
          <Text
            style={{
              fontSize: 24,
              lineHeight: 32,
              fontWeight: 'bold',
              fontFamily: 'Inter_semibold',
              color: '#2647e6',
              textAlign: 'left',
            }}>
            {convertCurrency(dataUser?.data?.credit_limit, 'Rp ')}
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontStyle: 'italic',
              lineHeight: 16,
              fontFamily: 'Inter_regular',
              color: '#9aa2b1',
              textAlign: 'left',
              marginTop: 8,
              marginBottom: 16,
            }}>
            Total Credit Rp. 10.000.000
          </Text>
        </View>
        <View style={styles.termCard}>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 20,
              fontFamily: 'Inter_regular',
              fontWeight: 'bold',
              color: '#1a3650',
              textAlign: 'left',
            }}>
            Term Of Payment (TOP)
          </Text>
          <View style={{padding: 10}}></View>
          <Text
            style={{
              fontSize: 18,
              lineHeight: 20,
              fontFamily: 'Inter_regular',
              color: '#9aa2b1',
              textAlign: 'left',
              // width: 275,
            }}>
            Invoice must be pay maximal 14 day after the transaction created.
            Don't be late!
          </Text>
        </View>
        <View style={styles.menu}>
          <Trophy name="trophy" size={20} color={Colors.GREY_DARK} />
          <TouchableOpacity
            style={{marginLeft: 10}}
            onPress={() => navigation.navigate('Loyalty')}>
            <Text>Loyalty</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menu}>
          <Icon name="carryout" size={20} color={Colors.GREY_DARK} />
          <TouchableOpacity
            style={{marginLeft: 10}}
            onPress={() => navigation.navigate('Bill')}>
            <Text>Bill</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.menu}>
          <Trophy name="inbox" size={20} color={Colors.GREY_DARK} />
          <TouchableOpacity
            style={{marginLeft: 10}}
            onPress={() => navigation.navigate('CheckTTB')}>
            <Text>Check TTB</Text>
          </TouchableOpacity>
        </View> */}
        <View style={styles.menu}>
          <User name="user-circle-o" size={20} color={Colors.GREY_DARK} />
          <TouchableOpacity
            style={{marginLeft: 10}}
            onPress={() => navigation.navigate('ChangeProfile')}>
            <Text>Change Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menu}>
          <Notification
            name="notifications"
            size={20}
            color={Colors.GREY_DARK}
          />
          <TouchableOpacity
            style={{marginLeft: 10}}
            onPress={() => navigation.navigate('Notification')}>
            <Text>Notification</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menu}>
          <Icon name="questioncircleo" size={20} color={Colors.GREY_DARK} />
          <TouchableOpacity
            style={{marginLeft: 10}}
            onPress={() => navigation.navigate('Faq')}>
            <Text>FAQ</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menu}>
          <Fingerprint name="fingerprint" size={20} color={Colors.GREY_DARK} />
          <TouchableOpacity
            style={{marginLeft: 10}}
            onPress={() => navigation.navigate('Biometric')}>
            <Text>Biomeric</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menu}>
          <Exit name="exit-to-app" size={20} color={Colors.RED} />
          <TouchableOpacity
            style={{marginLeft: 10}}
            onPress={
              () => handleLogout()

              // dispatch({type: 'LOGIN'});
              // Alert.alert('Logout Success');
              // navigation.navigate('Login');
            }>
            <Text style={{color: Colors.RED}}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },

  card: {
    backgroundColor: '#2647E6',
    opacity: 0.72,
    height: 128,
    flex: 1,
    width: '100%',
  },

  frameParent: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: -10,
  },

  frameChild: {
    width: 1,
    height: 35,
    marginLeft: 24,
  },

  ownerGroup: {marginLeft: 24},

  creditCard: {
    display: 'flex',
    margin: 10,
    marginHorizontal: 10,
    marginTop: -10,
    backgroundColor: Colors.WHITE,
    flexDirection: 'column',
    elevation: 2,
    borderRadius: 3,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  termCard: {
    display: 'flex',
    backgroundColor: '#DEDEDE',
    elevation: 2,
    marginHorizontal: 12,
    margin: 10,
    borderRadius: 3,
    paddingLeft: 12,
    paddingVertical: 10,
    paddingRight: 26,
  },

  menu: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginLeft: 14,
    // borderBottomWidth: 1,
    // elevation: 2,
    // ...Shadow.Normal,
  },
});

export default ProfileComponent;

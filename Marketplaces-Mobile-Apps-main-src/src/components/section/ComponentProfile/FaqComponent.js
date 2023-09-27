import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import {TextBold, TextMedium, TextRegular} from '../../global/Text';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../../styles';

export const FaqComponent = ({navigation}) => {
  return (
    <ScrollView style={styles.scrollView}>
      {/* <View style={styles.title}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            top: 18,
            left: 16,
          }}>
          <Icon name="arrowleft" size={24} color={Colors.BLACK} />
        </TouchableOpacity>
        <TextBold text="FAQ" size={16} color={Colors.PRIMARY} />
      </View> */}
      <View style={styles.contentItem}>
        <View style={styles.bodyContent}>
          <View style={styles.contentSearch}>
            <TextRegular text="Cari Pertanyaan" size={12} color={Colors.ICON} />
          </View>
        </View>
      </View>

      <View style={styles.contentItem2}>
        <View style={styles.textContent}>
          <View style={styles.textTitle}>
            <TextBold text="Akun" size={16} color={Colors.PRIMARY} />
          </View>
          <View style={styles.textItem}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TextRegular
                text="Mengapa saya tidak menerima kode OTP?"
                size={14}
                color={Colors.BLACK}
              />
              <Entypo name="chevron-right" size={16} color={Colors.BLACK} />
            </View>
          </View>
          <View style={styles.textItem}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TextRegular
                text="Bagaimana cara mengubah alamat?"
                size={14}
                color={Colors.BLACK}
              />
              <Entypo name="chevron-right" size={16} color={Colors.BLACK} />
            </View>
          </View>
          <View style={styles.textItem}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TextRegular
                text="Mengapa saya tidak menerima kode OTP?"
                size={14}
                color={Colors.BLACK}
              />
              <Entypo name="chevron-right" size={16} color={Colors.BLACK} />
            </View>
          </View>
          <View
            style={{alignItems: 'center', paddingTop: 16, paddingBottom: 4}}>
            <TextRegular text="Lihat Semua" size={12} color={Colors.ICON} />
          </View>
        </View>
      </View>

      <View style={styles.contentItem2}>
        <View style={styles.textContent}>
          <View style={styles.textTitle}>
            <TextBold text="Pembelian" size={16} color={Colors.PRIMARY} />
          </View>
          <View style={styles.textItem}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TextRegular
                text="Mengapa saya tidak menerima kode OTP?"
                size={14}
                color={Colors.BLACK}
              />
              <Entypo name="chevron-right" size={16} color={Colors.BLACK} />
            </View>
          </View>
          <View style={styles.textItem}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TextRegular
                text="Bagaimana cara mengubah alamat?"
                size={14}
                color={Colors.BLACK}
              />
              <Entypo name="chevron-right" size={16} color={Colors.BLACK} />
            </View>
          </View>
          <View style={styles.textItem}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TextRegular
                text="Mengapa saya tidak menerima kode OTP?"
                size={14}
                color={Colors.BLACK}
              />
              <Entypo name="chevron-right" size={16} color={Colors.BLACK} />
            </View>
          </View>
          <View
            style={{alignItems: 'center', paddingTop: 16, paddingBottom: 4}}>
            <TextRegular text="Lihat Semua" size={12} color={Colors.ICON} />
          </View>
        </View>
      </View>

      <View styles={styles.problemItem}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  title: {
    width: '100%',
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
  contentItem: {
    backgroundColor: Colors.WHITE,
    borderColor: Colors.OUTLINE,
    borderBottomWidth: 1,
    width: '100%',
    borderRadius: 2,
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 2,
  },
  contentItem2: {
    backgroundColor: Colors.WHITE,
    borderColor: Colors.OUTLINE,
    borderWidth: 1,
    width: '100%',
    borderRadius: 2,
    marginBottom: 16,
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 3,
  },
  bodyContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingBottom: 12,
  },
  contentSearch: {
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.SEARCHSURFACE,
    borderRadius: 2,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: Colors.SEARCHLABEL,
  },
  textContent: {
    paddingVertical: 12,
    paddingLeft: 16,
  },
  textTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    paddingVertical: 16,
    paddingRight: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.OUTLINE,
  },
});

export default FaqComponent;

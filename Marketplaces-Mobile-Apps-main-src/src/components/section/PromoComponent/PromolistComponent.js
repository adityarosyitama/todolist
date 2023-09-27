import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Colors} from '../../../styles';

export default function PromoList({detailPromo, route, navigation}) {
  const promo = route.params.promo;
  const detail = route.params.detail;

  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Detail Promo', {detail: detail, promo: promo})
        }
        activeOpacity={0.8}
        style={styles.promo}>
        <View style={styles.headerPromo}>
          <Text style={styles.teksHeaderPromo}>{promo?.title}</Text>
        </View>
        <View style={styles.detailPromo}>
          <Text style={styles.teksDetailPromo}>{promo?.content}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  promo: {
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 4,
    borderColor: Colors.LIGHTGRAYISHBLUE,
    height: 100,
    backgroundColor: Colors.WHITE,
    elevation: 4,
    marginTop: 16,
    marginHorizontal: 16,
  },
  headerPromo: {
    borderBottomWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderColor: Colors.LIGHTGRAYISHBLUE,
  },
  detailPromo: {
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  teksHeaderPromo: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    lineHeight: 20,
    color: Colors.VERYDARKGRAYISHBLUE,
  },
  teksDetailPromo: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    lineHeight: 18,
    color: Colors.DARKGRAYISHBLUE,
  },
});

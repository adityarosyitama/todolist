import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../../styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function PromoUI({detailPromo, promo, detail, list}) {
  const hasPromo = promo;

  return (
    <View style={styles.container}>
      {hasPromo ? (
        <View style={styles.blokPromo}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 12,
            }}>
            <Text style={styles.teksBrandPromo}>
              {detail?.[0]?.brand?.name}
            </Text>
            <TouchableOpacity onPress={list}>
              <Text style={styles.listText}>Lihat Semua</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={detailPromo}
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
      ) : (
        <View style={[styles.statusContainer, {flexDirection: 'column'}]}>
          <FontAwesome
            name="info-circle"
            size={30}
            color={Colors.DARKGRAYISHBLUE}
          />
          <Text style={[styles.statusText, {textAlign: 'center'}]}>
            Maaf, untuk saat ini belum ada{'\n'}event Campaign ataupun Promo :v
          </Text>
        </View>
      )}
      {/* <FlatList
                data={promo}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
              /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  campaignJudul: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  campaignText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    lineHeight: 24,
    color: Colors.VERYDARKBLUE,
  },
  detailText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    lineHeight: 20,
    color: Colors.DARKGRAYISHBLUE,
  },
  banner: {
    width: Dimensions.get('screen').width - 34,
    maxHeight: 129,
    borderRadius: 6,
  },
  blokPromo: {
    paddingHorizontal: 16,
    marginTop: 25,
  },
  promo: {
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 4,
    borderColor: Colors.LIGHTGRAYISHBLUE,
    height: 100,
    backgroundColor: Colors.WHITE,
    elevation: 4,
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
  teksBrandPromo: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    lineHeight: 21,
    color: Colors.VERYDARKGRAYISHBLUE,
  },
  listText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: Colors.BRIGHTBLUE,
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
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 24,
  },
  statusText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    lineHeight: 20,
    color: Colors.DARKGRAYISHBLUE,
    marginLeft: 8,
  },
});

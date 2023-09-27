import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../../style';

export default function RiwayatUI({data}) {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            // onPress={() => {
            //   [navigation.navigate('DetailItem', {id: item.id})];
            // }}
            style={styles.listButton}>
            <View
              style={{
                padding: item.padding,
                paddingHorizontal: item.paddingHorizontal,
                paddingVertical: item.paddingVertical,
              }}>
              <Image
                source={item.image}
                style={[
                  styles.imageList,
                  {width: item.width, height: item.height},
                ]}
              />
            </View>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.jumlahvView}>
                <Text style={styles.jumlah}>{item.jumlah}</Text>
              </View>
              <Text style={styles.nameList}>{item.title}</Text>
              <Text style={styles.harga}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: Colors.WHITE,
  },
  listButton: {
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: Colors.LIGHTGRAYISHBLUE,
    paddingVertical: 16,
  },
  imageList: {
    marginRight: 8,
  },
  jumlahvView: {
    backgroundColor: Colors.LIGHTGRAYISHBLUE,
    marginBottom: 5,
    paddingHorizontal: 7,
    paddingVertical: 2,
    width: 26,
  },
  jumlah: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    lineHeight: 18,
    color: Colors.BRIGHTBLUE,
  },
  nameList: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    lineHeight: 18,
    color: Colors.DARKGRAYISHBLUE,
    marginBottom: 5,
  },
  harga: {
    fontSize: 12,
    fontFamily: 'Inter-Bold',
    lineHeight: 18,
    color: Colors.VERYDARKBLUE,
  },
});

import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../../styles';
export default function CampaignUI({navigation, banner}) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {Array.from({length: 3}).map((_, index) => (
          <TouchableOpacity
            key={index}
            style={{marginBottom: 16, maxHeight: 129}}
            onPress={navigation}>
            <Image source={banner} style={styles.banner} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
    paddingTop: 16,
    backgroundColor: Colors.WHITE,
  },
  banner: {
    maxHeight: 129,
    width: Dimensions.get('screen').width - 34,
    borderRadius: 6,
  },
});

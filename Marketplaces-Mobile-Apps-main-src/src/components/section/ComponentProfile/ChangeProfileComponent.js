import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../../styles';
import launchImageLibrary from 'react-native-image-picker';

const ChangeProfileComponent = () => {
  // Image Picker
  const [imageData2, setImageData2] = useState(null);
  const pickImage2 = () => {
    launchImageLibrary({mediaType: 'photo', includeBase64: true}, response => {
      if (!response.didCancel && !response.errorCode) {
        const base64Data = `data:${response.assets[0].type};base64,${response.assets[0].base64}`;
        setImageData2(base64Data);
      }
    });
  };

  const [imageData, setImageData] = useState(null);
  const pickImage = () => {
    launchImageLibrary({mediaType: 'photo', includeBase64: true}, response => {
      if (!response.didCancel && !response.errorCode) {
        const base64Data = `data:${response.assets[0].type};base64,${response.assets[0].base64}`;
        setImageData(base64Data);
      }
    });
  };
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, padding: 16, backgroundColor: Colors.WHITE}}>
      <ScrollView>
        <View style={styles.Content}>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 18,
              fontFamily: 'Inter_regular',
              color: Colors.BLACK,
              textAlign: 'left',
            }}>
            Name
          </Text>
          <TextInput
            placeholder="Your Name"
            // onChangeText={''}
            // value=""
            style={styles.InputText}
          />
          <View style={styles.Gap} />
          <Text
            style={{
              fontSize: 12,
              lineHeight: 18,
              fontFamily: 'Inter_regular',
              color: Colors.BLACK,
              textAlign: 'left',
            }}>
            Number Phone
          </Text>
          <TextInput
            placeholder="Your Name"
            // onChangeText={''}
            // value=""
            style={styles.InputText}
          />
          <View style={styles.Gap} />
          <Text
            style={{
              fontSize: 12,
              lineHeight: 18,
              fontFamily: 'Inter_regular',
              color: Colors.BLACK,
              textAlign: 'left',
            }}>
            Email
          </Text>
          <TextInput
            placeholder="Your Name"
            // onChangeText={''}
            // value=""
            style={styles.InputText}
          />
          <View style={styles.Gap} />
          <Text
            style={{
              fontSize: 12,
              lineHeight: 18,
              fontFamily: 'Inter_regular',
              color: Colors.BLACK,
              textAlign: 'left',
            }}>
            Bank
          </Text>
          <TextInput
            placeholder="Your Name"
            // onChangeText={''}
            // value=""
            style={styles.InputText}
          />
          <View style={styles.Gap} />
          <Text
            style={{
              fontSize: 12,
              lineHeight: 18,
              fontFamily: 'Inter_regular',
              color: Colors.BLACK,
              textAlign: 'left',
            }}>
            No. Rekening
          </Text>
          <TextInput
            placeholder="Your Name"
            // onChangeText={''}
            // value=""
            style={styles.InputText}
          />
          <View style={styles.Gap} />
          <Text
            style={{
              fontSize: 12,
              lineHeight: 18,
              fontFamily: 'Inter_regular',
              color: Colors.BLACK,
              textAlign: 'left',
            }}>
            No. KTP
          </Text>
          <TextInput
            placeholder="Your Name"
            // onChangeText={''}
            // value=""
            style={styles.InputText}
          />
          <View style={styles.Gap} />
          <Text
            style={{
              fontSize: 12,
              lineHeight: 18,
              fontFamily: 'Inter_regular',
              color: Colors.BLACK,
              textAlign: 'left',
            }}>
            Foto KTP
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Content: {
    // display: 'flex',
    flexDirection: 'column',
    columnGap: 10,
  },

  InputText: {
    marginTop: 4,
    borderColor: Colors.GREY,
    borderWidth: 1,
    borderRadius: 5,
    padding: 4,
    elevation: 0,
  },

  Gap: {
    backgroundColor: Colors.WHITE,
    width: '100%',
    height: 3,
    marginVertical: 5,
  },
});

export default ChangeProfileComponent;

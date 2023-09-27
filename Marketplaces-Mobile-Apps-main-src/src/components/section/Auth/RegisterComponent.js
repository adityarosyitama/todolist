import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../styles';

const RegisterComponent = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}>
        <KeyboardAvoidingView
          behavior="padding"
          enabled
          keyboardVerticalOffset={-500}>
          <Image source={require('../../../asset/images/logocsi.png')} />
          <Text style={styles.welcome}>Sign Up</Text>
          <Image
            source={require('../../../asset/images/imagesignup.png')}
            style={{alignSelf: 'center', marginVertical: 12}}
          />
          <View style={styles.input}>
            <Fontisto name="email" size={28} color="black" />
            <TextInput placeholder="Email" style={{marginLeft: 6}} />
          </View>
          <View style={styles.input}>
            <MaterialCommunityIcons name="cellphone" size={28} color="black" />
            <TextInput placeholder="Phone" style={{marginLeft: 6}} />
          </View>
          <View style={styles.input}>
            <MaterialCommunityIcons
              name="lock-outline"
              size={28}
              color="black"
            />
            <TextInput placeholder="Password" style={{marginLeft: 6}} />
          </View>
          <LinearGradient
            locations={[0, 0.5, 1]}
            colors={['#2dcbfb', '#3e6ee6', '#3e6be5']}
            useAngle={true}
            angle={-90}
            style={styles.bottom}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>CREATE</Text>
          </LinearGradient>
        </KeyboardAvoidingView>
      </ScrollView>
      <View style={{bottom: 0, alignItems: 'flex-end'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    padding: 16,
  },
  welcome: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
    alignSelf: 'center',
    marginTop: 22,
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottom: {
    borderRadius: 19,
    width: 107,
    padding: 10,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 34,
  },
});

export default RegisterComponent;

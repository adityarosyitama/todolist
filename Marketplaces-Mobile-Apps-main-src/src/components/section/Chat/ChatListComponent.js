import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import ChatRoom from '../../../screen/Chat/ChatRoom';

const ChatListComponent = ({
  chats,
  searchKeyword,
  setSearchKeyword,
  navigation,
}) => {
  const renderChatItem = ({item}) => (
    <View>
      <TouchableOpacity
        style={styles.chatItem}
        onPress={() => navigation.navigate('ChatRoom')}>
        <View style={styles.displayPicture}>
          <Icon name="circle" size={48} color="#E1E6EB" />
        </View>
        <View style={styles.sender}>
          <Text style={styles.senderText}>{item.sender}</Text>
          <Text style={styles.message}>{item.message}</Text>
        </View>
        <View style={styles.date}>
          <Text style={styles.dateText}>4 juni 2024</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Cari Chat"
        onChangeText={text => setSearchKeyword(text)}
        value={searchKeyword}
      />
      <FlatList
        data={chats}
        renderItem={renderChatItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  searchInput: {
    height: 40,
    borderRadius: 2,
    backgroundColor: '#E1E6EB',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  chatItem: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  displayPicture: {
    marginRight: 10,
    justifyContent: 'center',
  },
  sender: {
    fontSize: 16,
    fontWeight: 'bold',
    width: 250,
  },
  message: {
    fontSize: 14,
    color: '#666',
  },
  date: {fontSize: 10},
});

export default ChatListComponent;

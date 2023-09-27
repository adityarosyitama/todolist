import React, {useState} from 'react';
import ChatListComponent from '../../components/section/Chat/ChatListComponent';

const ChatList = ({navigation}) => {
  const [chats, setChats] = useState([
    {id: '1', sender: 'John', message: 'Halo, apa kabar?'},
    {
      id: '2',
      sender: 'Jane',
      message: 'Hai John, kabar baik. Bagaimana denganmu?',
    },
    {id: '3', sender: 'John', message: 'Saya juga baik, terima kasih.'},
  ]);

  const [searchKeyword, setSearchKeyword] = useState('');

  const searchChats = () => {
    if (!searchKeyword) {
      return chats;
    }

    return chats.filter(chat =>
      chat.message.toLowerCase().includes(searchKeyword.toLowerCase()),
    );
  };

  return (
    <ChatListComponent
      chats={searchChats()}
      searchKeyword={searchKeyword}
      setSearchKeyword={setSearchKeyword}
      navigation={navigation}
    />
  );
};

export default ChatList;

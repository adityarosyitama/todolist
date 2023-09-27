import React, {useState, useEffect, useRef} from 'react';
import ChatRoomComponent from '../../components/section/Chat/ChatRoomComponent';

const ChatRoom = ({navigation}) => {
  const [messages, setMessages] = useState([
    {
      id: '2',
      sender: 'Jane',
      message:
        'Ada warna lain apa nggak? soalnya mau pesan yang warna hitam, terima kasih',
      image: require('../../assets/barang1.png'),
      time: '10:05 AM',
    },
    {
      id: '3',
      sender: 'John',
      message: 'Ada Kak, sebentar',
      time: '10:10 AM',
    },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [showImageView, setShowImageView] = useState(false);
  const [showUpload, setUpload] = useState(false);

  const handleSend = () => {
    if (showUpload) {
      const newId = (messages.length + 1).toString();
      const currentTime = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
      const newMessageData = {
        id: newId,
        sender: 'John',
        message: newMessage.trim() !== '' ? newMessage : '',
        image: require('../../assets/barang.png'),
        time: currentTime,
      };
      setMessages([...messages, newMessageData]);
      setUpload(false); // Hide the upload view after sending the image
      setNewMessage(''); // Clear the newMessage input
    } else {
      if (newMessage.trim() !== '') {
        const newId = (messages.length + 1).toString();
        const currentTime = new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        });
        const newMessageData = {
          id: newId,
          sender: 'John',
          message: newMessage,
          time: currentTime,
        };
        setMessages([...messages, newMessageData]);
        setNewMessage(''); // Clear the newMessage input
      }
    }
  };

  const handleShowImageView = () => {
    setShowImageView(!showImageView);
  };

  const handleUpload = () => {
    setShowImageView(false);
    setUpload(!showUpload);
  };
  const messageItemRef = useRef(null);
  const [messageItemHeight, setMessageItemHeight] = useState(null);

  const onTextLayout = event => {
    const {height} = event.nativeEvent.layout;
    if (height !== messageItemHeight) {
      setMessageItemHeight(height);
    }
  };

  useEffect(() => {
    if (messageItemRef.current) {
      messageItemRef.current.measure((x, y, width, height) => {
        if (height !== messageItemHeight) {
          setMessageItemHeight(height);
        }
      });
    }
  }, [messageItemHeight]);

  return (
    <ChatRoomComponent
      messages={messages}
      newMessage={newMessage}
      setNewMessage={setNewMessage}
      handleSend={handleSend} // Use the combined function for sending both text and image
      handleShowImageView={handleShowImageView}
      handleUpload={handleUpload}
      showUpload={showUpload}
      showImageView={showImageView}
      navigation={navigation}
      onTextLayout={onTextLayout}
      messageItemRef={messageItemRef}
      messageItemHeight={messageItemHeight}
    />
  );
};

export default ChatRoom;

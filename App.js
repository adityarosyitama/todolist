import React, {useEffect, useState} from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
} from 'react-native';
import {db} from './firebase';
import {
  onSnapshot,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore/lite';
import moment from 'moment/moment';
import {useDispatch, useSelector} from 'react-redux';
import {Calendar} from 'react-native-calendars';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {notificationListener, requestPermission} from './utils/common';

export default function App({navigation}) {
  const dispatch = useDispatch();
  const timestamp = moment().format('HH:mm:ss.sssZ');
  const datestamp = moment().format('YYYY-MM-DD');
  const today = moment().format('YYYY-MM-DD');
  async function getAllTasks() {
    const querySnapshot = await getDocs(collection(db, 'todolist'));
    return querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
  }

  async function addTask(taskData) {
    await addDoc(collection(db, 'todolist'), taskData);
  }

  async function updateTask(taskId, newData) {
    const taskRef = doc(db, 'todolist', taskId);
    await updateDoc(taskRef, newData);
  }

  async function deleteTask(taskId) {
    const taskRef = doc(db, 'todolist', taskId);
    await deleteDoc(taskRef);
  }
  const [benar, setBenar] = useState(true);
  const handleBenar = () => {
    setBenar(!benar);
  };
  const [id, setID] = useState('');
  const [tugas, setTugas] = useState('');
  const [tgl, setTgl] = useState('');
  const [data, setData] = useState([]);
  const clear = () => {
    setID('');
    setTugas('');
    setTgl('');
  };
  const getAllTasks2 = async () => {
    try {
      const tasks = await getAllTasks();
      // console.log('firebase todolist:', tasks);
      setData(tasks);
      // await addTask({task: 'Tugas Baru3', time: timestamp});
      // await updateTask('7ciySDxnRuW4QvViv0NX', {time: timestamp});
      // await deleteTask('ID_Tugas_Yang_Akan_Dihapus');
      dispatch({type: 'RESET_DATA_TASK'});
      dispatch({type: 'ADD_DATA_TASK', data: data});
      clear();
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }
  };
  const handleAdd = async () => {
    try {
      await addTask({
        task: tugas,
        date: tgl,
      });
      dispatch({type: 'RESET_DATA_TASK'});
      dispatch({type: 'ADD_DATA_TASK', data: data});
      clear();
      ToastAndroid.show('Berhasil !', ToastAndroid.SHORT);
      handleBenar();
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }
  };
  const handleUpdate = async () => {
    try {
      await updateTask(id, {
        task: tugas,
        date: tgl,
      });
      dispatch({type: 'RESET_DATA_TASK'});
      dispatch({type: 'ADD_DATA_TASK', data: data});
      clear();
      ToastAndroid.show('Berhasil !', ToastAndroid.SHORT);
      handleBenar();
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }
  };
  const handleDelete = async () => {
    try {
      await deleteTask(id);
      dispatch({type: 'RESET_DATA_TASK'});
      dispatch({type: 'ADD_DATA_TASK', data: data});
      clear();
      ToastAndroid.show('Berhasil !', ToastAndroid.SHORT);
      handleBenar();
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }
  };

  useEffect(() => {
    getAllTasks2();
    console.log('local todolist:', taskLocalData);
  }, [benar]);

  const {taskLocalData} = useSelector(state => state.task);
  const [showPickerDate, setshowPickerDate] = useState(false);

  useEffect(() => {
    // requestPermission();
    // notificationListener();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    setshowPickerDate(false)
  }, [tgl]);

  return (
    <ScrollView style={style.container}>
      <Text style={style.text}>App</Text>
      <View
      >
        <FlatList
          style={{marginBottom: 10}}
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => [
                setID(item.id),
                setTugas(item.task),
                setTgl(item.date),
              ]}
              style={{paddingHorizontal: 16, paddingVertical: 5}}>
              <Text>
                id: {item?.id}, task: {item?.task}, date: {item?.date}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <Text style={style.text}>Add todolist</Text>
      <View style={{width: '100%', marginBottom: '-30%'}}>
        <Text style={style.text}>id</Text>
        <View style={style.textinput} onChangeText={text => setID(text)}>
          <Text>{id}</Text>
        </View>
        <Text style={style.text}>Task</Text>
        <TextInput
          style={style.textinput}
          value={tugas}
          onChangeText={text => setTugas(text)}
        />
        <Text style={style.text}>Tgl dan waktu</Text>
        <TouchableOpacity
          style={style.textinput}
          onPress={() => setshowPickerDate(true)}>
          <Text>{tgl}</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={showPickerDate}
          onConfirm={text => setTgl(text.toISOString())}
          // onCancel={}
          mode="datetime"
          is24Hour={true}
        />
        <TouchableOpacity style={style.tombol} onPress={() => handleAdd()}>
          <Text style={[style.text, {textAlign: 'center'}]}>Tombol Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.tombol}>
          <Text
            style={[style.text, {textAlign: 'center'}]}
            onPress={() => handleUpdate()}>
            Tombol Update
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.tombol} onPress={() => handleDelete()}>
          <Text style={[style.text, {textAlign: 'center'}]}>Tombol Delete</Text>
        </TouchableOpacity>
      </View>
      <Calendar
        current={today}
        style={{marginBottom: '80%'}}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e',
        }}
      />
      {/* <View style={{height: '50%'}} /> */}
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  text: {
    color: 'black',
    fontSize: 15,
    textAlign: 'left',
    marginTop: 1,
  },
  textinput: {
    width: '100%',
    borderColor: 'black',
    marginTop: '3%',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 2,
    color: 'black',
    height: '6%',
    justifyContent: 'center',
    // alignItems:'center'
  },
  tombol: {
    marginTop: '3%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: '100%',
  },
});

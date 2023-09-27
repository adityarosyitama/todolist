import React, {useState, useEffect} from 'react';
import ProfileComponent from '../../components/section/ComponentProfile/ProfileComponent';
import {useDispatch, useSelector} from 'react-redux';
import apiProvider from '../../utils/service/apiProvider';

const Profile = () => {
  const dispatch = useDispatch();
  const {loginData} = useSelector(state => state.login);
  const [dataUser, setDataUser] = useState(null);

  const getUserData = async () => {
    try {
      const response = await apiProvider.getUser(loginData.token);
      setDataUser(response);
    } catch (error) {}
  };

  useEffect(() => {
    if (loginData.token) {
      getUserData();
    }
  }, [loginData.token]);
  return <ProfileComponent dataUser={dataUser} />;
};

export default Profile;

import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Color,
  FontFamily,
  FontSize,
  Padding,
  Border,
} from '../../component/global/GlobalStyles';
import BerandaComponent from '../../components/section/Beranda/BerandaComponent';
import {useDispatch, useSelector} from 'react-redux';
import apiProvider from '../../utils/service/apiProvider';
import {useIsFocused} from '@react-navigation/native';
import {useEffect} from 'react';
import {useState} from 'react';
import SearchComponent from '../../components/section/Beranda/SearchComponent';
import {useRef} from 'react';

const Search = ({navigation, route}) => {
  const {loginData, isLoggedIn} = useSelector(state => state.login);
  const {searchHist} = useSelector(state => state.searchHist);
  const dispatch = useDispatch();
  const TOKEN = loginData.token;
  const isFocused = useIsFocused();
  const textInputRef = useRef(null);
  const [text, setText] = useState('');

  useEffect(() => {
    if (isFocused) {
      // Fokuskan TextInput ketika layar ini diaktifkan
      textInputRef.current.focus();
    }
  }, [isFocused]);

  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState('');
  const [lastPage, setLastPage] = useState('');
  const [maxPage, setMaxPage] = useState('');

  const handleSearch = async currentPage => {
    const name = searchText;
    const page = currentPage === '' ? 1 : currentPage;
    console.log('name', name)
    try {
      const response = await apiProvider.getSearchProduct(name, page, TOKEN);
      console.log('reponse', response);
      setSearchResults(response);
      setCurrentPage(response.meta.current_page);
      setLastPage(response.meta.last_page);
      const response2 = await apiProvider.getSearchProduct('');
      setMaxPage(response2.meta.last_page);
      if (response.length === undefined) {
      } else {

      }
    } catch (error) {}
  };

  const [isFocused2, setIsFocused2] = useState(false);

  const handleBlur = () => {
    setIsFocused2(false);
    handleSearch();
  };

  const handleFocus = () => {
    setIsFocused2(true);
  };

  const handleNextPage = async () => {
    const nextPage = currentPage === lastPage ? currentPage : currentPage + 1;
    setCurrentPage(nextPage);
    handleSearch(nextPage);
  };

  const handleBackPage = async () => {
    const previousPage = currentPage === 1 ? currentPage : currentPage - 1;
    setCurrentPage(previousPage);
    handleSearch(previousPage);
  };

  const handleClearSearch = async () => {
    const asearchHist = searchHist === undefined ? '' : searchHist;
    // const idhist = moment()
    const texthist = searchText
    const datahista = texthist
    const datahist = [...asearchHist,...datahista]
    console.log('datahist :',datahist)
    dispatch({type: 'ADD_SEARCH', data: datahist});
    setSearchText('');
  }

  const handleClearHist = async () => {
    dispatch({type: 'RESET_SEARCH'});
  }
  

  return (
    <SearchComponent
      navigation={navigation}
      textInputRef={textInputRef}
      setText={setText}
      text={text}
      searchText={searchText}
      searchResults={searchResults}
      handleSearch={handleSearch}
      setSearchText={setSearchText}
      currentPage={currentPage}
      lastPage={lastPage}
      maxPage={maxPage}
      handleNextPage={handleNextPage}
      handleBackPage={handleBackPage}
      handleBlur={handleBlur}
      handleFocus={handleFocus}
      searchHist={searchHist}
      handleClearSearch={handleClearSearch}
      handleClearHist={handleClearHist}
    />
  );
};

export default Search;

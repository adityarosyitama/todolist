import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {ScrollView} from 'react-native-gesture-handler';
import {Color} from '../../../component/global/GlobalStyles';
import {Colors} from '../../../styles';
import {TextBold, TextRegular} from '../../global/Text';

const SearchComponent = ({
  navigation,
  ItemList,
  title,
  textInputRef,
  text,
  setText,
  searchText,
  searchResults,
  handleSearch,
  setSearchText,
  currentPage,
  lastPage,
  maxPage,
  handleNextPage,
  handleBackPage,
  handleBlur,
  handleFocus,
  searchHist,
  handleClearSearch,
  handleClearHist,
  searchHistreverse,
}) => {
  console.log('searchResults component:', searchResults);
  console.log('searchHist:', searchHist);
  const SearchResults = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DetailItem', {
            id: item.id,
          });
          handleClearSearch();
        }}
        style={styles.searchResultsView4}>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{width: '80%'}}>
            <Text>Nama: {item.name}</Text>
            <Text>Brand: {item.brand.name}</Text>
            <Text>Category: {item.category.name}</Text>
          </View>
          <View style={{width: '20%'}}>
            <Image
              source={{
                uri: item?.images[0]?.image_url,
              }}
              style={styles.searchResultsImage}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const SearchHist = ({item}) => {
    return (
      <TouchableOpacity
        // onPress={() => {
        //   navigation.navigate('DetailItem', {
        //     id: item.id,
        //   });
        //   setSearchText('');
        // }}
        style={styles.searchResultsView4}>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{width: '80%'}}>
            <Text>{item}</Text>
          </View>
          <View style={{width: '20%'}}></View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.viewHeader}>
        <TouchableOpacity
          style={{width: '5%', alignItems: 'center'}}
          onPress={() => navigation.navigate('BottomNav')}>
          <AntDesign name="arrowleft" size={30} color="#D1D5DC" />
        </TouchableOpacity>
        <View style={styles.search}>
          <TextInput
            style={{width: '90%'}}
            ref={textInputRef}
            placeholder="Cari Produk..."
            value={searchText}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChangeText={text => setSearchText(text)}
          />
          {searchText === '' || searchText === undefined ? (
            ''
          ) : (
            <TouchableOpacity
              style={{alignSelf: 'center'}}
              onPress={() => handleClearSearch()}>
              <AntDesign name="close" size={30} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {searchText === undefined ||
      searchText === '' ||
      searchResults === undefined ||
      searchResults.length === 0 ||
      lastPage === maxPage ? (
        <View style={{padding: 16}}>
          <TouchableOpacity onPress={() => handleClearHist()}>
            <Text>Clear History</Text>
          </TouchableOpacity>
          <View>
            <FlatList
              data={searchHist.reverse()}
              keyExtractor={item => item}
              renderItem={({item}) => <SearchHist item={item} />}
            />
          </View>
        </View>
      ) : (
        <View style={styles.searchResultsView3}>
          <View style={{backgroundColor: Colors.WHITE}}>
            {currentPage === 1 ? (
              ''
            ) : (
              <View style={styles.searchResultsView5}>
                <TouchableOpacity
                  onPress={() => handleBackPage()}
                  style={styles.searchResultsView6}>
                  <Text style={{color: 'white'}}>Back Page</Text>
                </TouchableOpacity>
              </View>
            )}
            <ScrollView>
              <FlatList
                data={searchResults.data}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => <SearchResults item={item} />}
              />

              <View style={styles.searchResultsView7}>
                {lastPage === 1 ? (
                  ''
                ) : (
                  <Text>
                    {currentPage} : {lastPage} Page
                  </Text>
                )}
                {currentPage === lastPage ? (
                  ''
                ) : (
                  <TouchableOpacity
                    onPress={() => handleNextPage()}
                    style={styles.searchResultsTouch}>
                    <Text style={{color: 'white'}}>Next Page</Text>
                  </TouchableOpacity>
                )}
              </View>
              <View style={{marginTop: currentPage === lastPage ? 0:'20%'}}></View>
            </ScrollView>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    borderRadius: 6,
    borderColor: '#D1D5DC',
    borderWidth: 1,
    width: '90%',
    height: '100%',
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
  viewHeader: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    // height: '5%',
  },
  //search box component
  headerView: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 16,
    elevation: 3,
  },
  headerTextInput: {
    marginVertical: 8,
    width: '80%',
    borderColor: Colors.GREY,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    alignSelf: 'center',
    marginRight: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  searchResultsView3: {
    width: '100%',
    height: 'auto',
    paddingHorizontal: 16,
  },
  searchResultsView4: {
    marginTop: 8,
    borderTopColor: Colors.GREY,
    borderTopWidth: 1,
    paddingTop: 8,
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  searchResultsView5: {
    paddingHorizontal: 5,
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginBottom: 5,
  },
  searchResultsView6: {
    alignItems: 'center',
    backgroundColor: Colors.BLUE,
    width: '100%',
  },
  searchResultsView7: {
    paddingHorizontal: 5,
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginBottom: 5,
    marginTop: 5,
  },
  searchResultsImage: {
    resizeMode: 'center',
    width: '100%',
    height: 70,
  },
  searchResultsTouch: {
    alignItems: 'center',
    backgroundColor: Colors.BLUE,
    width: '100%',
  },
});

export default SearchComponent;

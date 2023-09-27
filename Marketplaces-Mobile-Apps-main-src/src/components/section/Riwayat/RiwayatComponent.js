import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../../styles';
import { TextBold, TextMedium, TextRegular } from '../../global/Text';
import moment from 'moment';
import convertCurrency from '../../../utils/helpers';
import SortModal from '../../modal/SortRiwayatModal';

const TransaksiTab = ({ array, navigation, onlineTab, offlineTab, activeTab, modalVisible, modalShowing, modalClosing, sortingData }) => {
    return (
            <View style={{height: '100%'}}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.filterButton} onPress={modalShowing}>
                        <Ionicons name="md-filter" size={20} color="black" />
                    </TouchableOpacity>
                    <TextBold text='Riwayat' color={Colors.BLACK} style={styles.headerText} size={20} />
                </View>
                <View style={styles.line} />
                {modalVisible && (
                    <SortModal onClose={modalClosing} onSort={sortingData} />
                )}

                <View style={styles.tabContainer}>
                    <TouchableOpacity
                        onPress={onlineTab}
                        style={styles.tabButton}
                    >
                        <TextRegular size={16} style={styles.tabText} text='Transaksi Online' />
                        {activeTab === 'online' ? (
                            <View style={styles.leftTab}>
                                <View style={styles.blueLine}></View>
                            </View>
                        ) : (
                            <View style={styles.leftTab}></View>
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={offlineTab}
                        style={styles.tabButton}
                    >
                        <TextRegular size={16} style={styles.tabText} text='Transaksi Offline' />
                        {activeTab === 'offline' ? (
                            <View style={styles.rightTab}>
                                <View style={styles.blueLine}></View>
                            </View>
                        ) : (
                            <View style={styles.rightTab}></View>
                        )}
                    </TouchableOpacity>
                </View>

                {activeTab === 'online' && (
                    <View style={styles.tabContent}>
                        <FlatList
                            data={array}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => navigation.navigate('Detail', { transaction: item })} style={styles.listButton}>
                                    <View style={styles.code_dateText}>
                                        <TextMedium text={item.invoice_no} size={14} />
                                        <TextMedium text={moment(item.created_at).format('DD MMM YYYY')} size={14} />
                                    </View>
                                    <View style={styles.product_priceText}>
                                        <View style={{ alignItems: 'flex-start' }}>
                                            <TextMedium text='Jumlah Produk' size={14} />
                                            <TextBold text={item.items.length} size={18} color={'black'} style={{ paddingTop: 6 }} />
                                        </View>
                                        <View style={{ alignItems: 'flex-end' }}>
                                            <TextMedium text='Total Harga' size={14} />
                                            <TextBold text={convertCurrency(item.total_price, 'Rp ')} size={18} color={'black'} style={{ paddingTop: 6 }} />
                                        </View>
                                    </View>
                                    <View style={styles.stateText}>
                                        <TextMedium text={item.state} size={14} color={'black'} />
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                )}

                {activeTab === 'offline' && (
                    <View style={styles.tabContent}>
                        {/* Konten untuk Transaksi Offline */}
                    </View>
                )}

            <TouchableOpacity style={{ position: 'absolute', alignSelf: 'flex-end', bottom: 10, right: 6, backgroundColor: Colors.LIMEGREEN, paddingVertical: 6, paddingHorizontal: 11, borderRadius: 4, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Image source={{ uri: 'https://i.ibb.co/Xbpx0b9/whatsapp-1-2x.png' }} style={{ width: 20, height: 20, marginRight: 10 }} />
                <TextRegular text='Hubungi CS Kami' size={16} color={Colors.WHITE} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    filterButton: {
        padding: 15,
        paddingHorizontal: 20
    },
    headerText: {
        flex: 1,
        textAlign: 'center',
        marginRight: 65
    },
    line: {
        borderWidth: 0.3,
        borderColor: 'grey',
        opacity: 0.2
    },
    leftTab: {
        width: '100%',
        height: 7,
        backgroundColor: 'lightgrey',
        marginTop: 15,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        paddingHorizontal: 5,
        justifyContent: 'center',
    },
    rightTab: {
        width: '100%',
        height: 7,
        backgroundColor: 'lightgrey',
        marginTop: 15,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        paddingHorizontal: 5,
        justifyContent: 'center',
    },
    blueLine: {
        width: '100%',
        height: 3,
        backgroundColor: 'blue',
        borderRadius: 5,
    },
    tabContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 12,
        position: 'relative',
    },
    tabButton: {
        flex: 1,
        position: 'relative',
        zIndex: 1,
    },
    tabContent: {
        paddingTop: 10,
        paddingHorizontal: 20
    },
    tabText: {
        textAlign: 'center'
    },
    listButton: {
        flex: 1, borderWidth: 1,
        marginBottom: 10,
        borderColor: Colors.GREY_PLACEHOLDER,
        borderRadius: 6
    },
    code_dateText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        padding: 7,
        paddingHorizontal: 14,
        borderColor: Colors.GREY_PLACEHOLDER
    },
    product_priceText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 7,
        paddingHorizontal: 14,
        borderBottomWidth: 1,
        borderColor: Colors.GREY_PLACEHOLDER
    },
    stateText: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 7,
        backgroundColor: Colors.GREY_PLACEHOLDER
    }
});

export default TransaksiTab;
import React, { useEffect, useState } from 'react';
import { View, Modal, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { TextBold, TextMedium, TextRegular } from '../global/Text';
import { Colors } from '../../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SortModal = ({ visible, onClose, onSort }) => {
    const [selectedSortOption, setSelectedSortOption] = useState('');
    const [modalAnimation] = useState(new Animated.Value(0));

    useEffect(() => {
        if (visible) {
            Animated.spring(modalAnimation, {
                toValue: 1,
                friction: 8,
                tension: 60,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.spring(modalAnimation, {
                toValue: 0,
                friction: 8,
                tension: 60,
                useNativeDriver: true,
            }).start();
        }
    }, [visible, modalAnimation]);

    const handleSortOptionSelect = (sortOption) => {
        setSelectedSortOption(sortOption);
    };

    const handleSave = () => {
        onSort(selectedSortOption);
        onClose();
    };

    const modalTranslateY = modalAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [74, 0],
    });

    return (
        <Modal transparent visible={visible} onRequestClose={onClose} animationType="slide">
            <View style={styles.container}>
                <Animated.View style={[styles.body, { transform: [{ translateY: modalTranslateY }] }]}>
                    <View style={styles.header}>
                        <TextBold text="Mau lihat status apa?" color={Colors.VERYDARKBLUE} size={17} />
                        <TouchableOpacity onPress={onClose}>
                            <Icon name="close" size={25} color={Colors.BLACK} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.optionsContainer}>
                        <TouchableOpacity
                            style={styles.sortButton}
                            onPress={() => handleSortOptionSelect('all')}
                        >
                            <TextRegular text="Semua Status" color={Colors.GREY_DARK} size={18}/>
                            {selectedSortOption === 'all' ? (
                                <Icon name="circle-slice-8" size={25} color={Colors.BRIGHTBLUE} />
                            ) : (
                                <Icon name="circle-outline" size={25} color={Colors.GREY} />
                            )}
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.sortButton}
                            onPress={() => handleSortOptionSelect('accepted')}
                        >
                            <TextRegular text="Order Diterima" color={Colors.GREY_DARK} size={18}/>
                            {selectedSortOption === 'accepted' ? (
                                <Icon name="circle-slice-8" size={25} color={Colors.BRIGHTBLUE} />
                            ) : (
                                <Icon name="circle-outline" size={25} color={Colors.GREY} />
                            )}
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.sortButton}
                            onPress={() => handleSortOptionSelect('waiting')}
                        >
                            <TextRegular text="Menunggu Pengiriman" color={Colors.GREY_DARK} size={18}/>
                            {selectedSortOption === 'waiting' ? (
                                <Icon name="circle-slice-8" size={25} color={Colors.BRIGHTBLUE} />
                            ) : (
                                <Icon name="circle-outline" size={25} color={Colors.GREY} />
                            )}
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.sortButton}
                            onPress={() => handleSortOptionSelect('shipped')}
                        >
                            <TextRegular text="Dikirim" color={Colors.GREY_DARK} size={18}/>
                            {selectedSortOption === 'shipped' ? (
                                <Icon name="circle-slice-8" size={25} color={Colors.BRIGHTBLUE} />
                            ) : (
                                <Icon name="circle-outline" size={25} color={Colors.GREY} />
                            )}
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.sortButton}
                            onPress={() => handleSortOptionSelect('completed')}
                        >
                            <TextRegular text="Selesai" color={Colors.GREY_DARK} size={18}/>
                            {selectedSortOption === 'completed' ? (
                                <Icon name="circle-slice-8" size={25} color={Colors.BRIGHTBLUE} />
                            ) : (
                                <Icon name="circle-outline" size={25} color={Colors.GREY} />
                            )}
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                        <TextMedium text="Terapkan" size={18} color={Colors.WHITE} />
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        paddingBottom: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },
    body: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingHorizontal: 16,
        paddingTop: 10,
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    optionsContainer: {
        marginBottom: 255,
    },
    sortButton: {
        width: '100%',
        height: 57,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: Colors.GREY_2,
    },
    saveButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 44,
        backgroundColor: 'blue',
        borderRadius: 6,
    },
});

export default SortModal;

import React from "react";
import { Dimensions, FlatList, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../../styles";
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function DetailCampaignUI({ navigation, progress, data, join, confirm, cancel, modal, verificationModal, successModal, showProgress }) {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image
                    source={{ uri: 'https://i.ibb.co/q1LJss1/Banner-Campaign.png' }}
                    style={styles.banner}
                />
                <View style={styles.detail}>
                    <Text style={styles.judulCampaign}>PHILLIPS CAMPAIGN 2022</Text>
                    <Text style={styles.jumlahPeserta}>190 Participants</Text>
                    <View style={styles.tanggalAcara}>
                        <Text style={styles.tanggal}>12 - 20 November 2019</Text>
                    </View>
                    {showProgress && (
                        <View style={styles.progressViewContainer}>
                            <View style={styles.progressHeader}>
                                <Text style={styles.progressText}>Progress Anda</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Riwayat Progress Anda')}>
                                    <Text style={styles.detailText}>Lihat Semua</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.progressBarView}>
                                <View style={styles.progressContainer}>
                                    <View style={[styles.progressBar, { width: `${progress}%` }]} />
                                </View>
                                <Text style={styles.progressPersen}>{progress}%</Text>
                            </View>
                        </View>
                    )}
                    <Text style={styles.SK}>Syarat & Ketentuan</Text>
                    <Text style={styles.deskripsi}>Duis et sed felis enim morbi ultricies cras fringilla commodo. Lorem ut quis vitae, blandit nunc cras duis lorem tortor. Ac lorem et nunc urna consectetur magnis amet tellus.
                        {'\n\n'}
                        Sollicitudin cras convallis mattis bibendum ullamcorper tincidunt. Turpis justo mattis dui nec neque sed. Eros sit dignissim ullamcorper viverra. Consectetur amet, amet, vitae odio imperdiet nulla elementum mi integer. Eget ultrices fringilla nunc posuere ac.
                        {'\n\n'}
                        Fringilla cursus nam venenatis molestie sagittis sagittis nisi. Ut maecenas maecenas volutpat, risus nibh semper amet. Nec feugiat purus pellentesque purus, lacus. Risus, morbi quis quis egestas. Massa aliquam mollis in rutrum tellus sed massa neque.</Text>
                    <Text style={styles.hadiah}>Hadiah</Text>
                    <Text style={styles.deskripsi}>Duis et sed felis enim morbi ultricies cras fringilla commodo. Lorem ut quis vitae, blandit nunc cras duis lorem tortor. Ac lorem et nunc urna consectetur magnis amet tellus.</Text>
                </View>
                <View style={styles.daftar}>
                    <View style={styles.produkHeader}>
                        <Text style={styles.produkText}>Produk Untuk Campaign Ini</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('PHILLIPS CAMPAIGN 2022')}>
                            <Text style={styles.detailText}>Lihat Semua</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                style={[styles.listHeader, { marginRight: index === data.length - 1 ? 1 : 14 }]}>
                                <View style={{ padding: item.padding, marginBottom: 8 }}>
                                    <Image
                                        source={item.image}
                                        style={[styles.imageList, { width: item.width, height: item.height }]}
                                    />
                                </View>
                                <Text
                                    style={styles.nameList}>
                                    {item.title}
                                </Text>
                                <Text
                                    style={styles.hargaList}>
                                    {item.price}
                                </Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text
                                        style={styles.hargaDiskon}>
                                        {item.originalPrice}
                                    </Text>
                                    <Text
                                        style={styles.diskonList}>
                                        {item.discount}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </ScrollView>
            {!showProgress && (
                <View style={styles.joinHeader}>
                    <TouchableOpacity style={styles.joinButton} onPress={join}>
                        <Text style={styles.joinText}>Ikut Campaign</Text>
                    </TouchableOpacity>
                </View>
            )}
            <Modal visible={modal} transparent animationType='fade'>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Apakah Anda yakin ingin {'\n'} bergabung di campaign ini?</Text>
                        <TouchableOpacity style={[styles.button, { backgroundColor: Colors.BRIGHTBLUE, marginBottom: 8 }]} onPress={confirm}>
                            <Text style={styles.buttonText}>Iya</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { borderColor: Colors.BRIGHTBLUE, borderWidth: 1 }]} onPress={cancel}>
                            <Text style={[styles.buttonText, { color: Colors.BRIGHTBLUE }]}>Tidak</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal visible={verificationModal} transparent animationType='fade'>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <AntDesign name="clockcircleo" size={35} color={Colors.BRIGHTBLUE} />
                        <Text style={[styles.modalText, { textAlign: 'center', marginTop: 20, marginBottom: 0 }]}>Request Anda Akan {'\n'} Diverifikasi oleh Admin</Text>
                    </View>
                </View>
            </Modal>
            <Modal visible={successModal} transparent animationType='fade'>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <AntDesign name="checkcircleo" size={35} color={Colors.BRIGHTBLUE} />
                        <Text style={[styles.modalText, { textAlign: 'center', marginTop: 20, marginBottom: 0 }]}>Selamat Anda telah {'\n'} bergabung di Philips Campaign 2022</Text>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
    },
    banner: {
        width: Dimensions.get('screen').width,
        maxHeight: 166,
    },
    detail: {
        padding: 16,
        marginBottom: 16,
        backgroundColor: Colors.WHITE,
        elevation: 2
    },
    judulCampaign: {
        fontSize: 16,
        fontFamily: 'Inter-SemiBold',
        lineHeight: 24,
        color: Colors.VERYDARKBLUE
    },
    jumlahPeserta: {
        fontSize: 14,
        fontFamily: 'Inter-Regular',
        lineHeight: 20,
        color: Colors.DARKGRAYISHBLUE
    },
    tanggalAcara: {
        alignItems: 'center',
        backgroundColor: Colors.LIGHTGRAYISHBLUE,
        paddingVertical: 8,
        marginVertical: 16
    },
    tanggal: {
        fontSize: 12,
        fontFamily: 'Inter-Regular',
        lineHeight: 18,
        color: Colors.VERYDARKBLUE
    },
    progressViewContainer: {
        marginBottom: 21.25
    },
    progressHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 11.75
    },
    progressText: {
        fontSize: 14,
        fontFamily: 'Inter-SemiBold',
        lineHeight: 20,
        color: Colors.VERYDARKBLUE
    },
    progressBarView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    progressContainer: {
        width: '90%',
        height: 8,
        borderRadius: 4,
        backgroundColor: Colors.LIGHTGRAYISHBLUE,
        overflow: 'hidden',
    },
    progressBar: {
        height: '100%',
        backgroundColor: Colors.BRIGHTBLUE,
    },
    progressPersen: {
        fontSize: 14,
        fontFamily: 'Inter-Regular',
        lineHeight: 20,
        color: Colors.VERYDARKBLUE
    },
    SK: {
        fontSize: 14,
        fontFamily: 'Inter-SemiBold',
        lineHeight: 20,
        color: Colors.VERYDARKBLUE,
        marginBottom: 8
    },
    deskripsi: {
        fontSize: 14,
        fontFamily: 'Inter-Regular',
        lineHeight: 20,
        color: Colors.DARKGRAYISHBLUE
    },
    hadiah: {
        fontSize: 14,
        fontFamily: 'Inter-SemiBold',
        lineHeight: 20,
        color: Colors.VERYDARKBLUE,
        marginTop: 16,
        marginBottom: 8
    },
    produkText: {
        fontSize: 16,
        fontFamily: 'Inter-SemiBold',
        lineHeight: 24,
        color: Colors.VERYDARKBLUE
    },
    daftar: {
        padding: 16,
        marginBottom: 27,
        backgroundColor: Colors.WHITE,
        elevation: 2
    },
    detailText: {
        fontSize: 14,
        fontFamily: 'Inter-Regular',
        lineHeight: 20,
        color: Colors.DARKGRAYISHBLUE
    },
    produkHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16
    },
    listHeader: {
        justifyContent: 'center',
        padding: 6,
        margin: 2,
        borderRadius: 6,
        backgroundColor: Colors.WHITE,
        elevation: 2,
    },
    imageList: {
        alignSelf: 'center',
    },
    nameList: {
        fontSize: 12,
        fontFamily: 'Inter-Regular',
        lineHeight: 18,
        color: Colors.DARKGRAYISHBLUE,
        marginBottom: 5,
    },
    hargaList: {
        fontSize: 12,
        fontFamily: 'Inter-Bold',
        lineHeight: 18,
        color: Colors.VERYDARKBLUE,
    },
    hargaDiskon: {
        fontSize: 10,
        fontFamily: 'Inter-Regular',
        lineHeight: 16,
        color: Colors.DARKGRAYISHBLUE,
        textDecorationLine: 'line-through',
        marginRight: 5,
    },
    diskonList: {
        fontSize: 10,
        fontFamily: 'Inter-SemiBold',
        lineHeight: 16,
        color: Colors.LIMEGREEN,
    },
    joinHeader: {
        paddingHorizontal: 16,
        paddingBottom: 29,
        paddingTop: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        elevation: 2, width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    joinButton: {
        backgroundColor: 'blue',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderRadius: 6
    },
    joinText: {
        fontSize: 12,
        fontFamily: 'Inter-SemiBold',
        lineHeight: 18,
        color: 'white'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 16,
        width: '82%',
        borderRadius: 8,
        alignItems: 'center',
    },
    modalText: {
        color: Colors.VERYDARKBLUE,
        fontSize: 16,
        fontFamily: 'Inter-SemiBold',
        lineHeight: 24,
        textAlign: 'center',
        marginBottom: 16
    },
    button: {
        paddingVertical: 8,
        borderRadius: 6,
        marginHorizontal: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Inter-SemiBold',
        lineHeight: 18,
    },
});
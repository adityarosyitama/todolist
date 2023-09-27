import React, { useState } from "react";
import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View, useAnimatedValue } from "react-native";
import { TextBold, TextMedium, TextRegular } from "../../global/Text";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Colors } from "../../../styles";
import moment from "moment";
import convertCurrency from "../../../utils/helpers";

export default function RiwayatDetail({ navigation, route }) {
    const detail = route.params.transaction

    return (
        <ScrollView>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={20} color="black" />
                </TouchableOpacity>
                <TextBold text='Detail' color={Colors.BLACK} style={styles.headerText} size={20} />
            </View>
            <View style={styles.line} />

            <ImageBackground source={{ uri: 'https://i.ibb.co/k3WqGDm/Group-221-2x.png' }} style={styles.imageBackground}>
                {[
                    { label: 'Order ID:', value: detail.invoice_no },
                    { label: 'Tanggal Order:', value: moment(detail.created_at).format('DD MMM YYYY') },
                    { label: 'Status:', value: detail.state },
                ].map((item, index) => (
                    <View key={index} style={styles.id_date_stateText}>
                        <TextRegular text={item.label} size={16} color={Colors.WHITE} />
                        <TextBold text={item.value} size={16} color={Colors.WHITE} />
                    </View>
                ))}
            </ImageBackground>

            <View style={styles.productList}>
                <TextMedium text={`Anda Membeli ${detail.items.length} Jenis Produk`} size={18} style={{ marginBottom: 10 }} />
                <FlatList
                    data={detail?.items}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.listButton} onPress={() => navigation.navigate('DetailItem', {id: item})}>
                            <FontAwesome name="circle" color={Colors.RED} size={10} style={{ padding: 6 }} />
                            <View style={styles.image_productName}>
                                <Image
                                    source={{
                                        uri:
                                            item?.product?.images[0]?.image_url || 'https://www.delta-mobrey.com/wp-content/uploads/2018/05/Product-Image-Coming-Soon-300x300.png'
                                    }}
                                    style={styles.images}
                                />
                                <Text>{item.product.name}</Text>
                            </View>
                            <View style={styles.price_quantity_stateText}>
                                <View style={styles.textContainer}>
                                    <TextMedium text='Nominal' size={16} />
                                    <View style={[styles.lineList, { width: '65%', marginTop: 10 }]} />
                                    <TextMedium text={convertCurrency(item.product.price, "Rp ")} size={16} style={{ marginTop: 5 }} />
                                </View>
                                <View style={styles.textContainer}>
                                    <TextMedium text='Jumlah' size={16} />
                                    <View style={[styles.lineList, { width: '265%', marginTop: 10, opacity: 0.6 }]} />
                                    <TextMedium text={`x${item.quantity}`} size={16} style={{ marginTop: 5 }} />
                                </View>
                                <View style={styles.textContainer}>
                                    <TextMedium text='Status' size={16} />
                                    <View style={[styles.lineList, { width: '65%', marginTop: 10, marginLeft: 20 }]} />
                                    <View style={[styles.stateBackground, { backgroundColor: item.pre_order ? Colors.GREY : Colors.PRIMARY_5 }]}>
                                        <TextMedium text={item.pre_order ? "Pre Order" : "Stok Tersedia"} size={16} color={item.pre_order ? "black" : "blue"} />
                                    </View>
                                </View>
                            </View>

                            <View style={[styles.lineList, { opacity: 0.6 }]} />
                            <View style={styles.subTotal}>
                                <TextRegular text='Subtotal' size={16} />
                                <TextBold text={convertCurrency(item.final_price, 'Rp ')} size={16} />
                            </View>
                            <View style={styles.delivered}>
                                <TextRegular text='Jumlah Terkirim' size={16} />
                                <TextBold text={`${item?.delivered_qty} buah`} size={16} />
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    backButton: {
        padding: 15,
        paddingHorizontal: 20
    },
    headerText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 17,
        marginRight: 65
    },
    line: {
        borderWidth: 0.3,
        borderColor: 'grey',
        opacity: 0.2
    },
    imageBackground: {
        padding: 10,
        paddingHorizontal: 16
    },
    id_date_stateText: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 8
    },
    productList: {
        padding: 16,
        backgroundColor: 'white'
    },
    listButton: {
        flex: 1,
        borderWidth: 1,
        marginBottom: 10,
        borderColor: 'lightgrey',
        borderRadius: 6,
        paddingBottom: 10
    },
    image_productName: {
        flexDirection: 'row',
        paddingTop: 16,
        paddingHorizontal: 16,
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderColor: 'lightgrey',
        alignItems: 'center'
    },
    images: {
        height: 56,
        width: 56,
    },
    price_quantity_stateText: {
        flexDirection: "row",
        marginBottom: 8,
    },
    textContainer: {
        flex: 1,
        alignItems: "center",
    },
    lineList: {
        borderWidth: 0.3,
        borderColor: "grey",
        opacity: 0.2,
        marginBottom: 8,
        marginHorizontal: 20
    },
    stateBackground: {
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 5,
        alignItems: "center",
    },
    subTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    delivered: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    }
})


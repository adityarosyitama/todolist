import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../../styles";

export default function HadiahUI({ data }) {
    return (
        <View style={styles.container}>
            <FlatList
                horizontal={false}
                numColumns={2}
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={[styles.listButton, { marginRight: index === data.length - 1 ? 0 : 16 }]}>
                        <View style={[styles.listHeader, { padding: item.padding }]}>
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
                                style={styles.hargaAsli}>
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
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 14,
        backgroundColor: Colors.WHITE
    },
    listButton: {
        justifyContent: 'center',
        marginTop: 16,
        padding: 6,
        margin: 2,
        borderRadius: 6,
        backgroundColor: Colors.WHITE,
        elevation: 2,
    },
    listHeader: {
        marginBottom: 8
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
    hargaAsli: {
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
    }
})
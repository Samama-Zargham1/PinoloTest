import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { COLORS, fontWeight, height, width } from '../Config'
import Cross from "../assets/svgs/Cross.svg"
import Payoutbutton from "../assets/svgs/Payoutbutton.svg"
import Edit from "../assets/svgs/Edit.svg"
import { DATA_Navigation } from '../Data/StaticData'
import Arrow from "../assets/svgs/Arrow.svg"
const MyVehicles = (props) => {

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity activeOpacity={0.6} style={styles.sideNavi}>
                <View style={styles.naviView}>
                    <View style={{ flexDirection: "row" }}>
                        {item.icon}
                        <Text style={[styles.naviTitle, { color: index < 5 ? COLORS.black : "#a3a2a2" }]}>{item.name}</Text>
                    </View>
                    <Arrow style={{ marginRight: width * 0.05 }} />
                </View>
                <View style={styles.bottomLine} />
            </TouchableOpacity>
        )

    }

    return (
        <View style={{ flex: 1 }}>
            <Image
                source={require("../assets/Back.png")}
                style={{ width: width, height: height, position: "absolute" }}
            />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => { props.navigation.navigate("ParkOutCompleted") }} activeOpacity={0.7}>
                    <Cross />
                </TouchableOpacity>

                <Text style={{ fontSize: 24, color: COLORS.white, fontFamily: fontWeight[600] }}>Veljko Arsic</Text>
                <TouchableOpacity onPress={() => { props.navigation.navigate("ParkOutCompleted") }} activeOpacity={0.8}>
                    <Edit />
                </TouchableOpacity>

            </View>
            <Text style={styles.Balance}>{"Balance"}</Text>
            <Text style={styles.value}>{"1290,00 rsd"}</Text>
            <View style={styles.Shadow} />
            <TouchableOpacity
                style={{
                    alignSelf: "center",
                }}
                onPress={() => { props.navigation.navigate("ParkOutCompleted") }}
                activeOpacity={0.9}>

                <Payoutbutton width={width * 0.4} height={height * 0.09} />
            </TouchableOpacity>
            <View style={styles.whiteView} />
            <FlatList
                style={{ marginTop: height * 0.035 }}
                data={DATA_Navigation}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />

        </View>
    )
}

export default MyVehicles

const styles = StyleSheet.create({
    Shadow:{
        elevation: 17,
        backgroundColor: 'rgba(52, 52, 51, 0.001)',
        position: "absolute",
        width: width * 0.38,
        height: height*0.065,
        borderRadius: 100,
        alignSelf: "center",
        marginTop: height * 0.222
    },
    Balance: {
        fontSize: 18,
        color: COLORS.white,
        textAlign: "center", fontFamily:
            fontWeight[500],
        marginTop: height * 0.006
    },
    naviTitle: {
        marginLeft: width * 0.09,
        position: "absolute",
        fontSize: 18,
        alignSelf: "center",
        fontFamily: fontWeight[400]
    },

    sideNavi: {
        width: "93%",
        marginLeft: width * 0.065,
        marginBottom: height * 0.02,
        justifyContent: "center",
    },
    whiteView: {
        backgroundColor: COLORS.white,
        position: "absolute",
        width: width,
        height: height,
        top: height * 0.305,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
    },
    bottomLine: {
        borderBottomWidth: 1,
        borderColor: "#b5b3b3",
        marginTop: height * 0.007
    },
    naviView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    value: {
        fontSize: 20,
        color: COLORS.white,
        textAlign: "center", fontFamily: fontWeight[700],
        marginTop: -height * 0.013
    },
    header: {
        flexDirection: "row",
        width: "97%",
        alignItems: "center",
        justifyContent: "space-between",
        alignSelf: "center",
        marginVertical: height * 0.035
    },
    gradientBtn: {
        width: width * 0.4,
        height: height * 0.07,
        alignSelf: "center",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        elevation: 10,
        margin: height * 0.02
    },
    gredientbtnText: {
        color: COLORS.white,
        fontSize: 18
    }
})
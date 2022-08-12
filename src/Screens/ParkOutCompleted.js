import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Parkout from "../assets/svgs/Parkout.svg";
import { COLORS, fontWeight, height, width } from '../Config';
import { ParkoutData } from '../Data/StaticData';
import GAMLA from "../assets/svgs/GAMLA.svg";

const ParkOutCompleted = (props) => {
    return (
        <View style={styles.parkout}>
            <Text style={styles.headtxt}>Park Out completed! </Text>
            <Parkout style={{ margin: height * 0.05, marginTop: height * 0.068, alignSelf: "center" }} />
            {
                ParkoutData.map((item, index) => {
                    return (
                        <View key={index} style={[styles.RowData, { marginTop: index == 0 ? height * 0.055 : 0 }]}>
                            <Text style={styles.earn}>{item.name}</Text>
                            <Text style={styles.value}>{item.value}</Text>

                        </View>
                    )
                })
            }
            <View style={[styles.RowData, { marginTop: height * 0.014 }]}>
                <Text style={styles.total}>{"Total:"}</Text>
                <Text style={styles.totalValue}>{"380, 00 rsd"}</Text>
            </View>
            <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.primaryButtom1]}
                onPress={() => { props.navigation.navigate("MyVehicles") }}>
                <GAMLA />
            </TouchableOpacity>
            <Text style={styles.rate}>Rate your bidder</Text>
            <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.primaryButtom]}
                onPress={() => { props.navigation.navigate("MyVehicles") }}>
                <Text style={[styles.primaryBtntxt]}>Great!</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ParkOutCompleted

const styles = StyleSheet.create({
    total: {
        fontSize: 16,
        fontFamily: fontWeight[400],
        marginVertical: height * 0.01,
        color: COLORS.black
    },
    earn: {
        fontSize: 16,
        fontFamily: fontWeight[400],
        marginVertical: height * 0.007,
        color: COLORS.lightText
    },
    parkout: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    RowData: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        alignSelf: "center"
    },
    totalValue: {
        fontSize: 16,
        fontFamily: fontWeight[500],
        marginVertical: height * 0.01,
        color: "#6ACD58"
    },
    headtxt: {
        fontSize: 24,
        fontFamily: fontWeight[600],
        color: COLORS.black,
        alignSelf: "center",
        marginTop: height * 0.045
    },
    rate: {
        fontSize: 14,
        fontFamily: fontWeight[400],
        color: COLORS.black,
        alignSelf: "center",
        marginTop: height * 0.013
    },
    primaryButtom: {
        width: "88%",
        alignItems: "center",
        height: height * 0.06,
        borderRadius: 30,
        justifyContent: "center",
        marginBottom: 10,
        alignSelf: "center",
        backgroundColor: COLORS.Primary,
        marginTop: height * 0.028
    },
    primaryButtom1: {
        width: "64%",
        alignItems: "center",
        borderRadius: 5,
        justifyContent: "center",
        marginBottom: 13,
        alignSelf: "center",
        marginTop: height * 0.08
    },
    primaryBtntxt: {
        fontSize: 16,
        color: COLORS.white,
        fontFamily: fontWeight[600]
    },
    value: {
        fontSize: 16, fontFamily: fontWeight[500],
        marginVertical: height * 0.007,
        color: COLORS.black
    }

})
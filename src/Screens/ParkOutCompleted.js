import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Parkout from "../assets/svgs/Parkout.svg";
import { COLORS, height, width } from '../Config';
import { ParkoutData } from '../Data/StaticData';
import GAMLA from "../assets/svgs/GAMLA.svg";

const ParkOutCompleted = (props) => {
    return (
        <View style={styles.parkout}>
            <Text style={styles.headtxt}>Park Out completed! </Text>
            <Parkout style={{ margin: height * 0.05, alignSelf: "center" }} />
            {
                ParkoutData.map((item, index) => {
                    return (
                        <View key={index} style={[styles.RowData, { marginTop: index == 0 ? 40 : 0 }]}>
                            <Text style={{ fontSize: 15, marginVertical: 5, color:COLORS.lightText }}>{item.name}</Text>
                            <Text style={styles.value}>{item.value}</Text>

                        </View>
                    )
                })
            }
            <View style={[styles.RowData, { marginTop: 12 }]}>
                <Text style={{ fontSize: 15, marginVertical: 10, color: COLORS.black }}>{"Total:"}</Text>
                <Text style={{ fontSize: 15, fontWeight: "500", marginVertical: 10, color: "#6ACD58" }}>{"380, 00 rsd"}</Text>
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
    parkout: {
        flex: 1,
    },
    RowData: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        alignSelf: "center"
    },
    headtxt: {
        fontWeight: "600",
        fontSize: 23,
        color: COLORS.black,
        alignSelf: "center",
        marginTop: height * 0.05
    },
    rate: {
        fontSize: 14,
        color: COLORS.black,
        alignSelf: "center",
        marginTop: height * 0.016
    },
    primaryButtom: {
        width: "90%",
        alignItems: "center",
        height: height * 0.067,
        borderRadius: 30,
        justifyContent: "center",
        marginBottom: 13,
        alignSelf: "center",
        backgroundColor: COLORS.Primary,
        marginTop: height * 0.035
    },
    primaryButtom1: {
        width: "64%",
        alignItems: "center",
        height: height * 0.058,
        borderRadius: 5,
        justifyContent: "center",
        marginBottom: 13,
        alignSelf: "center",
        marginTop: height * 0.1
    },
    primaryBtntxt: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.white
    },
    value: {
        fontSize: 15,
        fontWeight: "500",
        marginVertical: 5,
        color: COLORS.black
    }

})
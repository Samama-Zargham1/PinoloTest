import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { COLORS, height, width } from '../Config'
import AnyIcon, { Icons } from '../components/AnyIcon'
import Cross from "../assets/svgs/Cross.svg"
import Edit from "../assets/svgs/Edit.svg"
import LinearGradient from 'react-native-linear-gradient';
import { DATA_Navigation } from '../Data/StaticData'
import Arrow from "../assets/svgs/Arrow.svg"
const MyVehicles = (props) => {

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity activeOpacity={0.6} style={styles.sideNavi}>
                <View style={styles.naviView}>
                    <View style={{ flexDirection: "row" }}>
                        {item.icon}
                        <Text style={{
                            marginLeft: width * 0.03,
                            fontSize: 17,
                            color: index < 5 ? COLORS.black : "#a3a2a2"
                        }}>{item.name}</Text>
                    </View>
                    <Arrow style={{ marginRight: width * 0.05 }} />
                </View>
                <View style={styles.bottomLine} />
            </TouchableOpacity>
        )

    }
    
    return (
        <View style={{}}>
            <Image
                source={require("../assets/Back.png")}
                style={{ width: width, height: height, position: "absolute" }}
            />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => { props.navigation.navigate("ParkOutCompleted") }} activeOpacity={0.7}>
                    <Cross />
                </TouchableOpacity>

                <Text style={{ fontSize: 22, color: COLORS.white, fontWeight: "600" }}>Veljko Arsic</Text>
                <TouchableOpacity onPress={() => { props.navigation.navigate("ParkOutCompleted") }} activeOpacity={0.8}>
                    <Edit />
                </TouchableOpacity>

            </View>
            <Text style={{ fontSize: 16, color: COLORS.white, textAlign: "center", marginTop: 7 }}>{"Balance"}</Text>
            <Text style={{ fontSize: 18, fontWeight: "700", color: COLORS.white, textAlign: "center" }}>{"1290,00 rsd"}</Text>
            <TouchableOpacity onPress={() => { props.navigation.navigate("ParkOutCompleted") }} activeOpacity={0.9}>
                <LinearGradient colors={["#FF9433", "#FFAA55", COLORS.Primary]} style={styles.gradientBtn}>
                    <Text style={styles.gredientbtnText}>
                        Payout
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
            <View style={styles.whiteView} />
            <FlatList
                style={{ marginTop: height * 0.045 }}
                data={DATA_Navigation}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />

        </View>
    )
}

export default MyVehicles

const styles = StyleSheet.create({
    SecondaryView: {
        flex: 1
    },
    sideNavi: {
        width: "93%",
        marginLeft: width * 0.065,
        marginBottom: height * 0.02
    },
    whiteView: {
        backgroundColor: COLORS.white,
        position: "absolute",
        width: width,
        height: height,
        top: height * 0.34,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
    },
    bottomLine: {
        borderBottomWidth: 1,
        borderColor: "#b5b3b3",
        marginTop: height * 0.005
    },
    naviView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    header: {
        flexDirection: "row",
        width: "90%",
        alignItems: "center",
        justifyContent: "space-between",
        alignSelf: "center",
        marginVertical: height * 0.04
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
        fontWeight: "800",
        fontSize: 18
    }
})
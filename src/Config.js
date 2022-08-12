const COLORS = {
    Primary: '#EA780F',
    Secondary: "#fafafa",
    green: "#357C79",
    gray: "#F1F1F1",
    black: "#000000",
    white: "#FFFFFF",
    lightText: "#787878"
}
const fontWeight = {
    700: "baloo2-bold",
    800: "baloo2-extrabold",
    500: "baloo2-medium",
    400: "baloo2-regular",
    600: "baloo2-semibold"
}
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");

export { COLORS, width, height, fontWeight }

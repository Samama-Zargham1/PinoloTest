import React from "react";
import { Dimensions } from "react-native";
import { Image } from 'react-native'

import Car from "../assets/svgs/Car.svg";
import CreditCard from "../assets/svgs/CreditCard.svg";
import History from "../assets/svgs/History.svg";
import Settings from "../assets/svgs/Settings.svg";
import Leaf from "../assets/svgs/Leaf.svg";
import Faq from "../assets/svgs/Faq.svg";
import Term from "../assets/svgs/Term.svg";
import Privacy from "../assets/svgs/Privacy.svg";
import Support from "../assets/svgs/Support.svg";
import LogOut from "../assets/svgs/LogOut.svg";


const { width, height } = Dimensions.get("window");
export const DATA_Navigation = [
  {
    name: "My vehicles",
    icon: <Image
      style={{ width: width * 0.048, height: height * 0.022, alignSelf: "center" }}
      source={require("../assets/Car.png")} />,
    route: ""
  },
  {
    name: "My cards",
    icon: <CreditCard width={width * 0.045} />,
    route: ""
  },
  {
    name: "My history",
    icon: <History width={width * 0.045} />
  },
  {
    name: "Settings",
    icon: <Settings width={width * 0.045} />
  },
  {
    name: "Pinolo’s missions",
    icon: <Leaf width={width * 0.045} height={height * 0.028} />
  },
  {
    name: "FAQ",
    icon: <Faq width={width * 0.045} />
  },

  {
    name: "Terms & Conditions",
    icon: <Term width={width * 0.045} />
  },

  {
    name: "Privacy policy",
    icon: <Privacy width={width * 0.045} />
  },

  {
    name: "Support",
    icon: <Support width={width * 0.045} />
  },
  {
    name: "Log out",
    icon: <LogOut width={width * 0.045} />,
    iconbg: "#D4F4FF",
  },


];
export const ParkoutData = [
  { name: "Fixed earnings:", value: "100,00 rsd" },
  { name: "Share (15%):", value: "180,00 rsd" },
  { name: "Waiting (4 min):", value: "100,00 rsd" }
]

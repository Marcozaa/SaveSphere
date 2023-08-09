import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

import { StyleSheet, Text, View } from "react-native";
import SquareMoneyInfo from "./SquareMoneyInfo";
export default function MoneyInfoSection() {
  return (
    <View style={styles.container}>
      <SquareMoneyInfo
        number={1500}
        info={"Monthly budget"}
        iconName={"cash-outline"}
      />
      <SquareMoneyInfo
        number={2600}
        info={"Incomes"}
        iconName={"arrow-down-outline"}
      />
      <SquareMoneyInfo
        number={1000}
        info={"Expenses"}
        iconName={"arrow-back-outline"}
      />
      <SquareMoneyInfo
        number={800}
        info={"Savings"}
        iconName={"arrow-forward-outline"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

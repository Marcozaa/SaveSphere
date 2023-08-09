import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

import { StyleSheet, Text, View } from "react-native";

export default function SquareMoneyInfo({ number, info, iconName }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name={iconName} size={30} color="#03045e" />
      </View>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{number}€</Text>
      <Text style={{ fontSize: 15 }}>{info}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    margin: 10,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    borderColor: "lightgrey",
    borderWidth: 1,
    borderRadius: 25,
    padding: 10,
    width: 150,
    height: 150,
  },
});

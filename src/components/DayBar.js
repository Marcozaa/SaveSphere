import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";

export default function DayBar({ date }) {
  const parsedDate = new Date(date);
  const dayNumber = parsedDate.getDate();
  const monthName = parsedDate.toLocaleString("default", { month: "long" });
  return (
    <View style={styles.DayBarContainer}>
      <Text style={styles.DayBarText}>{`${dayNumber} ${monthName}`}</Text>
      {/*<Text style={styles.DayBarText}>-10€ +24€</Text>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  DayBarContainer: {
    width: "100%",
    height: 50,
    backgroundColor: "grey",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  DayBarText: {
    fontSize: 15,
    color: "white",
  },
});

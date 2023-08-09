import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import monthToText from "../utils/MonthToText";

export default function MonthBar(
  { month, setMonth } //props
) {
  const handlePreviousMonth = () => {
    if (month === "01") {
      setMonth("12");
    } else {
      const newMonth = parseInt(month) - 1;
      setMonth(newMonth.toString().padStart(2, "0"));
    }
  };

  const handleNextMonth = () => {
    if (month === "12") {
      setMonth("01");
    } else {
      const newMonth = parseInt(month) + 1;
      setMonth(newMonth.toString().padStart(2, "0"));
    }
  };
  return (
    <View style={styles.container}>
      <Icon
        onPress={handlePreviousMonth}
        name={"chevron-back-circle"}
        size={30}
        color="#00b4d8"
      />

      <View style={styles.MonthContainer}>
        <Text style={styles.MonthText}>{monthToText(month)}</Text>
      </View>
      <Icon
        onPress={handleNextMonth}
        name={"chevron-forward-circle"}
        size={30}
        color="#00b4d8"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  MonthContainer: {
    borderRadius: 35,
    backgroundColor: "#00b4d8",
    padding: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 150,
  },
  MonthText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    display: "flex",
    flexDirection: "row",
    gap: 17,
  },
});

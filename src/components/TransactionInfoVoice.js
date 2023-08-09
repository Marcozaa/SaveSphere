import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function TransactionInfoVoice({
  iconName,
  info,
  date,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.iconTextContainer}>
        <Icon name={iconName} size={30} color="#57ADBF" />
        <Text style={styles.infoText}>{info}</Text>
      </View>
      <View style={styles.dateTextContainer}>
        <Text style={styles.infoText}>
          {date === undefined
            ? selectedCategory?.tagName
            : date?.toDateString().split(" ").slice(1).join(" ")}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    backgroundColor: "white",
    marginVertical: 10,
    padding: 20,
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  infoText: {
    fontSize: 20,
    fontWeight: "semibold",
    color: "black",
  },
  dateTextContainer: {
    backgroundColor: "#57ADBF",
    padding: 8,
    borderRadius: 15,
  },
  iconTextContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});

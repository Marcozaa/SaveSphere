import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function TransactionDescription() {
  const [description, onChangeDescription] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.iconTextContainer}>
        <Icon name={"pencil"} size={30} color="#57ADBF" />
        <TextInput
          style={styles.descriptionText}
          onChangeText={onChangeDescription}
          value={description}
          placeholder="Description..."
          placeholderTextColor="lightgrey"
          fontSize={15}
          fontWeight="semibold"
        />
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

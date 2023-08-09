import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import TransactionInfoVoice from "./TransactionInfoVoice";

export default function CategoryChoserVoice({
  iconName,
  info,
  bottomModalAndTitle,
  setBottomModalAndTitle,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <Pressable
      style={styles.fullWidth}
      onPress={() => {
        setBottomModalAndTitle(true);
      }}
    >
      <TransactionInfoVoice
        iconName={"pricetag"}
        info={"Category"}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  fullWidth: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  infoText: {
    fontSize: 20,
    fontWeight: "semibold",
    color: "black",
  },
});

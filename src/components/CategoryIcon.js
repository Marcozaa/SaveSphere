import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
export default function CategoryIcon({
  iconName,
  iconColor,
  tagName,
  selectedCategory,
  setSelectedCategory,
}) {
  if (tagName.length > 12) tagName = tagName.slice(0, 10) + "...";
  return (
    <Pressable
      style={styles.container}
      onPress={() => setSelectedCategory({ iconName, iconColor, tagName })}
    >
      <View style={styles.IconContainer}>
        <Icon name={iconName} size={30} color={iconColor} />
      </View>
      <Text style={styles.tagName}>{tagName}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "25%",
  },
  IconContainer: {
    borderRadius: 25,
    backgroundColor: "white",
    marginVertical: 10,
    width: 60,
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  tagName: {
    fontSize: 14,
    fontWeight: "semibold",
  },
});

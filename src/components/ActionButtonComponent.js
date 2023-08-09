import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import ActionButton from "react-native-action-button";
export default function ActionButtonComponent({ navigation, db }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
      <ActionButton buttonColor="rgba(231,76,60,1)">
        <ActionButton.Item
          buttonColor="#0077b6"
          title="Add new expense"
          onPress={() => navigation.navigate("AddTransaction")}
        >
          <Icon name="cash-outline" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#0077b6"
          title="Add new earning"
          onPress={() => {}}
        >
          <Icon name="enter-outline" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
}
const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white",
  },
});

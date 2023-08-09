import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import db from "../db/Database";
import textToIcon from "../utils/TextToIcon";
import Icon from "react-native-vector-icons/Ionicons";
import { useStore } from "../state/Store";

export default function HomeTransactionComponent({
  id,
  price,
  category,
  date,
}) {
  const deleteTransactionStore = useStore((store) => store.deleteTransaction);

  function dateToHours(date) {
    return date.slice(11, 16);
  }
  const deleteTransaction = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM transactions WHERE ID = ?",
        [id],
        (txObj, resultSet) => {
          deleteTransactionStore(id);
          (txObj, error) => {
            console.log(error);
          };
        }
      );
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{textToIcon(category)}</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoContainerMiddle}>
          <Text style={styles.price}>{price}$</Text>
          <Text style={styles.category}>
            {category} • {dateToHours(date)}{" "}
          </Text>
        </View>
        <View style={styles.infoContainerRight}>
          <Text onPress={() => deleteTransaction()}>
            {" "}
            <Icon name="trash-outline" size={30} color="#ff6961" />
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "85%",
    borderRadius: 20,
    backgroundColor: "whitesmoke",
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    zIndex: -1,
    margin: 10,
  },
  iconContainer: {
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    margin: 10,
  },
  icon: {
    margin: 0,
    padding: 0,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    width: "70%",

    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
  },
  category: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
    opacity: 0.4,
  },
  date: {
    fontSize: 15,
    fontWeight: "semibold",
    color: "black",
    opacity: 0.4,
  },
  infoContainerRight: {},
});

import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import SquareMoneyInfo from "../components/SquareMoneyInfo";
import MoneyInfoSection from "../components/MoneyInfoSection";
import ActionButtonComponent from "../components/ActionButtonComponent";
import MonthBar from "../components/MonthBar";
import * as SQLite from "expo-sqlite";
import { Button } from "react-native";
import db from "../db/Database";
import HomeTransactionComponent from "../components/HomeTransactionComponent";
import { ScrollView } from "react-native";
import { useStore } from "../state/Store";
export default function Homepage({ navigation }) {
  const [month, setMonth] = useState(getTodayMonth());
  const transactions = useStore((store) => store.transactions);
  const setTransactions = useStore((store) => store.setStore);
  //console.log(transactions);

  function getTodayMonth() {
    const today = new Date();
    const month = today.getMonth() + 1;
    return month.toString().padStart(2, "0");
  }
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists transactions (id integer primary key not null, amount int, category text, date text, description text);"
      );
    });

    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM transactions WHERE strftime('%m', date) = ? ORDER BY date DESC",
        [getTodayMonth()],
        (txObj, resultSet) => {
          console.log(resultSet.rows._array);
          setTransactions(resultSet.rows._array),
            (txObj, error) => {
              console.log(error);
            };
        }
      );
    });
  }, []);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM transactions WHERE strftime('%m', date) = ? ORDER BY date DESC",
        [month],
        (txObj, resultSet) => {
          console.log(resultSet.rows._array);
          setTransactions(resultSet.rows._array),
            (txObj, error) => {
              console.log(error);
            };
        }
      );
    });
  }, [month]);

  const addTransaction = (amount) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO transactions (amount) values (?)",
        [amount],
        (txObj, resultSet) => {
          let existingTransactions = [...transactions];
          existingTransactions.push({ id: resultSet.insertId, amount });
          setTransactions(existingTransactions);
        },
        (txObj, error) => {
          console.log(error);
        }
      );
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <MonthBar month={month} setMonth={setMonth} />
        <MoneyInfoSection />
        <ActionButtonComponent navigation={navigation} />
      </View>
      <ScrollView
        contentContainerStyle={[styles.ScrollView]}
        style={styles.transactionsView}
      >
        {transactions?.map((transaction) => {
          return (
            <HomeTransactionComponent
              id={transaction.id}
              key={transaction.id}
              price={transaction.amount}
              date={transaction.date}
              category={transaction.category}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  transactionsView: {
    display: "flex",

    zIndex: -1,
  },
  ScrollView: {
    alignItems: "center",
  },
});

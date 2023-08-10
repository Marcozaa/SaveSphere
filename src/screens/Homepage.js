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
import DayBar from "../components/DayBar";
export default function Homepage({ navigation }) {
  const [month, setMonth] = useState(getTodayMonth());
  const transactions = useStore((store) => store.transactions);
  const setTransactions = useStore((store) => store.setStore);
  const [groupedTransactions, setGroupedTransactions] = useState([]);

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
        [month],
        (_, { rows: { _array } }) => {
          const grouped = _array.reduce((acc, transaction) => {
            const date = transaction.date.split(" ")[0];
            if (!acc[date]) {
              acc[date] = [];
            }
            acc[date].push(transaction);
            return acc;
          }, {});
          setGroupedTransactions(Object.entries(grouped));
        }
      );
    });
  }, []);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM transactions WHERE strftime('%m', date) = ? ORDER BY date DESC",
        [month],
        (_, { rows: { _array } }) => {
          const grouped = _array.reduce((acc, transaction) => {
            const date = transaction.date.split(" ")[0];
            if (!acc[date]) {
              acc[date] = [];
            }
            acc[date].push(transaction);
            return acc;
          }, {});
          setGroupedTransactions(Object.entries(grouped));
        }
      );
    });
  }, [month, transactions]);

  console.log(groupedTransactions);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ borderBottomWidth: 2, borderBottomColor: "grey" }}>
        <MonthBar month={month} setMonth={setMonth} />
        <MoneyInfoSection />
        <ActionButtonComponent navigation={navigation} />
      </View>
      <ScrollView
        contentContainerStyle={[styles.ScrollView]}
        style={styles.transactionsView}
      >
        {groupedTransactions?.map(([date, transactions]) => (
          <>
            <DayBar date={date} />
            {transactions?.map((transaction) => (
              <HomeTransactionComponent
                key={transaction.id}
                id={transaction.id}
                price={transaction.amount}
                category={transaction.category}
                date={transaction.date}
              />
            ))}
          </>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
  transactionsView: {
    display: "flex",

    zIndex: -1,
  },
  ScrollView: {
    alignItems: "center",
  },
});

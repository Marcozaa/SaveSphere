import React from "react";
import { useState, useRef } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Button,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {
  Modal,
  SlideAnimation,
  ModalContent,
  BottomModal,
  ModalTitle,
  navigation,
} from "react-native-modals";
import TransactionInfoVoice from "../components/TransactionInfoVoice";
import CategoryChoserModal from "../components/CategoryChoserModal";
import CategoryChoserVoice from "../components/CategoryChooserVoice";
import DatePickerComponent from "../components/DatePickerComponent";
import { TextInput } from "react-native";
import TransactionDescription from "../components/TransactionDescription";
import db from "../db/Database";
import * as SQLite from "expo-sqlite";
import { useStore } from "../state/Store";

export default function AddTransaction({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [bottomModalAndTitle, setBottomModalAndTitle] = useState(false);
  const [number, onChangeNumber] = React.useState("");
  const [selectedCategory, setSelectedCategory] = useState({
    iconName: "bag",
    iconColor: "#77DD77",
    tagName: "Shopping",
  });

  const transaction = useStore((store) => store.transactions);
  const addTask = useStore((store) => store.addTransaction);

  const addTransaction = (amount) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO transactions (amount, category, description, date ) values (?, ?, ?, ?)",
        [
          amount,
          selectedCategory.tagName,
          "descrizione",
          date.toISOString().slice(0, 19).replace("T", " "),
        ],
        (txObj, resultSet) => {
          console.log(resultSet);
          addTask(
            date.toISOString().slice(0, 19).replace("T", " "),
            selectedCategory.tagName,
            amount
          );
          // let existingTransactions = [...transactions];
          // existingTransactions.push({ id: resultSet.insertId, amount });
          // setTransactions(existingTransactions);
        },
        (txObj, error) => {
          console.log(error);
        }
      );
    });
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.topContainer}>
        <View style={styles.topBar}>
          <Icon
            onPress={() => {
              navigation.goBack();
            }}
            name={"arrow-back-outline"}
            size={30}
            color="white"
          />
          <Text style={styles.currentPageName}>Expense</Text>
          <Icon name={"arrow-back-outline"} size={30} color="transparent" />
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.amountContainer}>
            <Text style={styles.amountPromptText}>How much?</Text>

            <TextInput
              style={styles.amountText}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="0$"
              keyboardType="numeric"
            />
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
      <View style={styles.bottomContainer}>
        <TransactionDescription />

        <Pressable
          style={{ width: " 100%", display: "flex", alignItems: "center" }}
          onPress={() => setDatePickerVisibility(true)}
        >
          <TransactionInfoVoice
            iconName={"calendar"}
            info={"Date"}
            date={date}
          />
        </Pressable>
        <CategoryChoserVoice
          bottomModalAndTitle={bottomModalAndTitle}
          setBottomModalAndTitle={setBottomModalAndTitle}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <CategoryChoserModal
          bottomModalAndTitle={bottomModalAndTitle}
          setBottomModalAndTitle={setBottomModalAndTitle}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Pressable
          style={styles.addTransactionButton}
          onPress={() => {
            addTransaction(number);
            navigation.goBack();
          }}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            Add Transaction
          </Text>
        </Pressable>
        <DatePickerComponent
          isDatePickerVisible={isDatePickerVisible}
          setDatePickerVisibility={setDatePickerVisibility}
          date={date}
          setDate={setDate}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#57ADBF",
  },
  topContainer: {
    backgroundColor: "#57ADBF",
    height: "35%",
  },
  text: {},
  bottomContainer: {
    display: "flex",
    justifyContent: "center",
    gap: 30,
    alignItems: "center",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: "white",
    height: "65%",
  },
  amountPromptText: {
    color: "whitesmoke",
    fontSize: 20,
    fontWeight: "semibold",
  },
  amountText: {
    color: "whitesmoke",
    fontSize: 50,
    fontWeight: "bold",
  },
  amountContainer: {
    display: "flex",
    justifyContent: "flex-end",
    height: "80%",
    padding: 10,
  },
  topBar: {
    paddingTop: 10,
    paddingHorizontal: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  currentPageName: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  addTransaction: {
    width: "100%",
    backgroundColor: "#57ADBF",
  },
  addTransactionButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#57ADBF",
  },
});

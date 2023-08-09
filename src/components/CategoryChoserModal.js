import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Animated, View, Text, ScrollView } from "react-native";
import { BottomModal, ModalContent, ModalTitle } from "react-native-modals";
import SwitchSelector from "react-native-switch-selector";
import CategoryIcon from "./CategoryIcon";
export default function CategoryChoserModal({
  bottomModalAndTitle,
  setBottomModalAndTitle,
  selectedCategory,
  setSelectedCategory,
}) {
  const [transactionType, setTransactionType] = useState("Expense");

  useEffect(() => {
    // run something every time name changes
    setBottomModalAndTitle(false);
  }, [selectedCategory]); // <-- dependency array

  return (
    <View>
      <BottomModal
        visible={bottomModalAndTitle}
        onTouchOutside={() => setBottomModalAndTitle(false)}
        height={0.5}
        width={1}
        onSwipeOut={() => setBottomModalAndTitle(false)}
        modalTitle={<ModalTitle title="Transaction Category" hasTitleBar />}
      >
        <ModalContent
          style={{
            flex: 1,
            backgroundColor: "fff",
          }}
        >
          <View style={styles.IconsContainer}>
            <SwitchSelector
              initial={0}
              onPress={(value) => setTransactionType(value)}
              textColor={"black"} //'#7a44cf'
              buttonColor={"#57ADBF"}
              borderColor={"#57ADBF"}
              hasPadding
              options={[
                { label: "Expense", value: "Expense" }, //images.feminino = require('./path_to/assets/img/feminino.png')
                { label: "Earning", value: "Earning" }, //images.masculino = require('./path_to/assets/img/masculino.png')
              ]}
              testID="gender-switch-selector"
              accessibilityLabel="gender-switch-selector"
            />

            {transactionType === "Expense"
              ? [
                  <View style={styles.IconsContainer}>
                    <CategoryIcon
                      iconName={"pizza"}
                      iconColor={"#77DD77"}
                      tagName={"Shopping"}
                      selectedCategory={selectedCategory}
                      setSelectedCategory={setSelectedCategory}
                    />
                    <CategoryIcon
                      iconName={"pizza"}
                      iconColor={"#77DD77"}
                      tagName={"Food"}
                      selectedCategory={selectedCategory}
                      setSelectedCategory={setSelectedCategory}
                    />

                    <CategoryIcon
                      iconName={"train"}
                      iconColor={"#77DD77"}
                      tagName={"Transits"}
                      selectedCategory={selectedCategory}
                      setSelectedCategory={setSelectedCategory}
                    />
                    <CategoryIcon
                      iconName={"airplane"}
                      iconColor={"#77DD77"}
                      tagName={"Trips"}
                      selectedCategory={selectedCategory}
                      setSelectedCategory={setSelectedCategory}
                    />
                    <CategoryIcon
                      iconName={"book"}
                      iconColor={"#77DD77"}
                      tagName={"Education"}
                      selectedCategory={selectedCategory}
                      setSelectedCategory={setSelectedCategory}
                    />
                    <CategoryIcon
                      iconName={"medkit"}
                      iconColor={"#77DD77"}
                      tagName={"Health"}
                      selectedCategory={selectedCategory}
                      setSelectedCategory={setSelectedCategory}
                    />
                    <CategoryIcon
                      iconName={"car"}
                      iconColor={"#77DD77"}
                      tagName={"Car"}
                      selectedCategory={selectedCategory}
                      setSelectedCategory={setSelectedCategory}
                    />
                    <CategoryIcon
                      iconName={"cash"}
                      iconColor={"#77DD77"}
                      tagName={"Taxes and bills"}
                      selectedCategory={selectedCategory}
                      setSelectedCategory={setSelectedCategory}
                    />
                  </View>,
                ]
              : [
                  <View style={styles.IconsContainer}>
                    <CategoryIcon
                      iconName={"card"}
                      iconColor={"#FAA0A0"}
                      tagName={"Shopping"}
                      selectedCategory={selectedCategory}
                      setSelectedCategory={setSelectedCategory}
                    />
                    <CategoryIcon
                      iconName={"pizza"}
                      iconColor={"#FAA0A0"}
                      tagName={"Food"}
                      selectedCategory={selectedCategory}
                      setSelectedCategory={setSelectedCategory}
                    />

                    <CategoryIcon
                      iconName={"train"}
                      iconColor={"#FAA0A0"}
                      tagName={"Transits"}
                      selectedCategory={selectedCategory}
                      setSelectedCategory={setSelectedCategory}
                    />
                    <CategoryIcon
                      iconName={"airplane"}
                      iconColor={"#FAA0A0"}
                      tagName={"Trips"}
                      selectedCategory={selectedCategory}
                      setSelectedCategory={setSelectedCategory}
                    />
                    <CategoryIcon
                      iconName={"book"}
                      iconColor={"#FAA0A0"}
                      tagName={"Education"}
                      selectedCategory={selectedCategory}
                      setSelectedCategory={setSelectedCategory}
                    />
                    <CategoryIcon
                      iconName={"medkit"}
                      iconColor={"#FAA0A0"}
                      tagName={"Health"}
                      selectedCategory={selectedCategory}
                      setSelectedCategory={setSelectedCategory}
                    />
                    <CategoryIcon
                      iconName={"car"}
                      iconColor={"#FAA0A0"}
                      tagName={"Car"}
                      selectedCategory={selectedCategory}
                      setSelectedCategory={setSelectedCategory}
                    />
                    <CategoryIcon
                      iconName={"cash"}
                      iconColor={"#FAA0A0"}
                      tagName={"Taxes and bills"}
                      selectedCategory={selectedCategory}
                      setSelectedCategory={setSelectedCategory}
                    />
                  </View>,
                ]}
          </View>
        </ModalContent>
      </BottomModal>
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
  IconsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

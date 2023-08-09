import DateTimePicker from "react-native-modal-datetime-picker";
import React, { useState } from "react";
import { Button, View } from "react-native";

export default function DatePickerComponent({
  isDatePickerVisible,
  setDatePickerVisibility,
  date,
  setDate,
}) {
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date);
    hideDatePicker();
  };
  return (
    <View>
      <DateTimePicker
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}

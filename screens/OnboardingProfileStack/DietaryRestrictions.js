import { StyleSheet, Text, View } from "react-native";
import React from "react";

import IconPill from "./IconPill";

const DietaryRestrictions = () => {
  return (
    <View style={styles.container}>
      <IconPill iconName={"X"} itemName={"milk"} />
      <IconPill iconName={"X"} itemName={"fish"}  />
      <IconPill iconName={"X"} itemName={"shellfish"} />
      <IconPill iconName={"X"} itemName={"eggs"} />
      <IconPill iconName={"X"} itemName={"peanuts"} />
      <IconPill iconName={"X"} itemName={"tree nuts"} />
      <IconPill iconName={"X"} itemName={"soy"} />
      <IconPill iconName={"X"} itemName={"wheat"} />
      <IconPill iconName={"+"} itemName={"+ More"} />
    </View>
  );
};

export default DietaryRestrictions;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    flexWrap: 'wrap',
  },
});
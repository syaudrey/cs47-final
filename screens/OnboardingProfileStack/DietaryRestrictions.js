import { StyleSheet, Text, View } from "react-native";
import React from "react";

import IconPill from "./IconPill";

const DietaryRestrictions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <IconPill iconName={"X"} itemName={"milk"} />
        <IconPill iconName={"X"} itemName={"fish"}  />
        <IconPill iconName={"X"} itemName={"shellfish"} />
      </View>
      <View style={styles.row}>
        <IconPill iconName={"X"} itemName={"eggs"} />
        <IconPill iconName={"X"} itemName={"peanuts"} />
        <IconPill iconName={"X"} itemName={"tree nuts"}  />
      </View>
      <View style={styles.row}>
        <IconPill iconName={"X"} itemName={"soy"} />
        <IconPill iconName={"X"} itemName={"wheat"} />
        <IconPill iconName={"+"} itemName={"+ More"} />
      </View>
    </View>
  );
};

export default DietaryRestrictions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start",
    width: '100%',
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
  },

  text: {
    fontSize: 16,
    fontWeight: '400',
  },

});
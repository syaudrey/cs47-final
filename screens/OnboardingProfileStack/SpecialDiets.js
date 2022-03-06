import { StyleSheet, Text, View } from "react-native";
import React from "react";

import IconPill from "./IconPill";

const SpecialDiets = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <IconPill iconName={"X"} itemName={"vegetarian"} />
        <IconPill iconName={"X"} itemName={"pescatarian"} />
      </View>
      <View style={styles.row}>
        <IconPill iconName={"X"} itemName={"vegan"} />
        <IconPill iconName={"X"} itemName={"kosher"} />
        <IconPill iconName={"X"} itemName={"keto"} />
      </View>
      <View style={styles.row}>
        <IconPill iconName={"X"} itemName={"diabetes"}  />
        <IconPill iconName={"+"} itemName={"+ More"} />
      </View>
    </View>
  );
};

export default SpecialDiets;

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
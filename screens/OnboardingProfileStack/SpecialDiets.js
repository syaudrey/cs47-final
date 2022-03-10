import { StyleSheet, Text, View } from "react-native";
import React from "react";

import IconPill from "./IconPill";

const SpecialDiets = () => {
  return (
    <View style={styles.container}>
      <IconPill iconName={"X"} itemName={"vegetarian"} />
      <IconPill iconName={"X"} itemName={"pescatarian"} />
      <IconPill iconName={"X"} itemName={"vegan"} />
      <IconPill iconName={"X"} itemName={"kosher"} />
      <IconPill iconName={"X"} itemName={"keto"} />
      <IconPill iconName={"X"} itemName={"diabetes"}  />
      <IconPill iconName={"+"} itemName={"+ More"} />
    </View>
  );
};

export default SpecialDiets;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    flexWrap: 'wrap',
  },

});
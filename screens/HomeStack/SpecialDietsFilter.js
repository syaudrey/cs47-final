import { StyleSheet, Text, View } from "react-native";
import React from "react";

import IconPillFilter from "./IconPillFilter";

const SpecialDietsFilter = () => {
    console.log("hi")
  return (
    <View style={styles.container}>
      <IconPillFilter iconName={"X"} itemName={"vegetarian"} type={"diet"} />
      <IconPillFilter iconName={"X"} itemName={"pescatarian"} type={"diet"} />
      <IconPillFilter iconName={"X"} itemName={"vegan"} type={"diet"} />
      <IconPillFilter iconName={"X"} itemName={"kosher"} type={"diet"} />
      <IconPillFilter iconName={"X"} itemName={"keto"} type={"diet"} />
      <IconPillFilter iconName={"X"} itemName={"diabetes"}  type={"diet"} />
      <IconPillFilter iconName={"+"} itemName={"+ More"} type={"diet"} />
    </View>
  );
};

export default SpecialDietsFilter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    flexWrap: 'wrap',
  },

});
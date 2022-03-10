import { StyleSheet, Text, View } from "react-native";
import React from "react";

import IconPillFilter from "./IconPillFilter";

const DietaryRestrictionsFilter = () => {
  console.log("yoyo")
  return (
    <View style={styles.container}>
      <IconPillFilter iconName={"X"} itemName={"milk"} type={"restriction"} />
      <IconPillFilter iconName={"X"} itemName={"fish"}  type={"restriction"}/>
      <IconPillFilter iconName={"X"} itemName={"shellfish"} type={"restriction"}/>
      <IconPillFilter iconName={"X"} itemName={"eggs"} type={"restriction"}/>
      <IconPillFilter iconName={"X"} itemName={"peanuts"} type={"restriction"}/>
      <IconPillFilter iconName={"X"} itemName={"tree nuts"} type={"restriction"}/>
      <IconPillFilter iconName={"X"} itemName={"soy"} type={"restriction"}/>
      <IconPillFilter iconName={"X"} itemName={"wheat"} type={"restriction"}/>
      <IconPillFilter iconName={"+"} itemName={"+ More"} type={"restriction"}/>
    </View>
  );
};

export default DietaryRestrictionsFilter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    flexWrap: 'wrap',
  },
});
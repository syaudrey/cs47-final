import { StyleSheet, Text, View } from "react-native";
import React from "react";

import IconPillFilter from "./IconPillFilter";

const DietaryRestrictionsFilter = ({chosenRestrictions, setChosenRestrictions, chosenDiets, setChosenDiets }) => {
    // console.log("in dietaryrestrictions")
    // console.log(chosenRestrictions)
  return (
    <View style={styles.container}>
      <IconPillFilter iconName={"X"} itemName={"milk"} type={"restriction"} chosenRestrictions={chosenRestrictions}
                              setChosenRestrictions={setChosenRestrictions} 
                              chosenDiets={chosenDiets}
                              setChosenDiets={setChosenDiets}/>
      <IconPillFilter iconName={"X"} itemName={"fish"}  type={"restriction"} chosenRestrictions={chosenRestrictions}
                              setChosenRestrictions={setChosenRestrictions} 
                              chosenDiets={chosenDiets}
                              setChosenDiets={setChosenDiets} />
      <IconPillFilter iconName={"X"} itemName={"shellfish"} type={"restriction"} chosenRestrictions={chosenRestrictions}
                              setChosenRestrictions={setChosenRestrictions} 
                              chosenDiets={chosenDiets}
                              setChosenDiets={setChosenDiets} />
      <IconPillFilter iconName={"X"} itemName={"eggs"} type={"restriction"} chosenRestrictions={chosenRestrictions}
                              setChosenRestrictions={setChosenRestrictions} 
                              chosenDiets={chosenDiets}
                              setChosenDiets={setChosenDiets} />
      <IconPillFilter iconName={"X"} itemName={"peanuts"} type={"restriction"} chosenRestrictions={chosenRestrictions}
                              setChosenRestrictions={setChosenRestrictions} 
                              chosenDiets={chosenDiets}
                              setChosenDiets={setChosenDiets} />
      <IconPillFilter iconName={"X"} itemName={"tree nuts"} type={"restriction"} chosenRestrictions={chosenRestrictions}
                              setChosenRestrictions={setChosenRestrictions} 
                              chosenDiets={chosenDiets}
                              setChosenDiets={setChosenDiets} />
      <IconPillFilter iconName={"X"} itemName={"soy"} type={"restriction"} chosenRestrictions={chosenRestrictions}
                              setChosenRestrictions={setChosenRestrictions} 
                              chosenDiets={chosenDiets}
                              setChosenDiets={setChosenDiets} />
      <IconPillFilter iconName={"X"} itemName={"wheat"} type={"restriction"} chosenRestrictions={chosenRestrictions}
                              setChosenRestrictions={setChosenRestrictions} 
                              chosenDiets={chosenDiets}
                              setChosenDiets={setChosenDiets} />
      <IconPillFilter iconName={"+"} itemName={"+ More"} type={"restriction"} chosenRestrictions={chosenRestrictions}
                              setChosenRestrictions={setChosenRestrictions} 
                              chosenDiets={chosenDiets}
                              setChosenDiets={setChosenDiets} />
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
import { StyleSheet, Text, View } from "react-native";
import React from "react";

import IconPillFilter from "./IconPillFilter";

const SpecialDietsFilter = ({chosenRestrictions, setChosenRestrictions, chosenDiets, setChosenDiets }) => {
    // console.log("hi")
    // console.log("in special diets")
    // console.log(chosenDiets)
  return (
    <View style={styles.container}>
      <IconPillFilter iconName={"X"} itemName={"vegetarian"} type={"diet"} chosenRestrictions={chosenRestrictions}
                              setChosenRestrictions={setChosenRestrictions} 
                              chosenDiets={chosenDiets}
                              setChosenDiets={setChosenDiets} />
      <IconPillFilter iconName={"X"} itemName={"pescatarian"} type={"diet"} chosenRestrictions={chosenRestrictions}
                              setChosenRestrictions={setChosenRestrictions} 
                              chosenDiets={chosenDiets}
                              setChosenDiets={setChosenDiets} />
      <IconPillFilter iconName={"X"} itemName={"vegan"} type={"diet"} chosenRestrictions={chosenRestrictions}
                              setChosenRestrictions={setChosenRestrictions} 
                              chosenDiets={chosenDiets}
                              setChosenDiets={setChosenDiets} />
      <IconPillFilter iconName={"X"} itemName={"kosher"} type={"diet"} chosenRestrictions={chosenRestrictions}
                              setChosenRestrictions={setChosenRestrictions} 
                              chosenDiets={chosenDiets}
                              setChosenDiets={setChosenDiets} />
      <IconPillFilter iconName={"X"} itemName={"keto"} type={"diet"} chosenRestrictions={chosenRestrictions}
                              setChosenRestrictions={setChosenRestrictions} 
                              chosenDiets={chosenDiets}
                              setChosenDiets={setChosenDiets} />
      <IconPillFilter iconName={"X"} itemName={"diabetes"}  type={"diet"} chosenRestrictions={chosenRestrictions}
                              setChosenRestrictions={setChosenRestrictions} 
                              chosenDiets={chosenDiets}
                              setChosenDiets={setChosenDiets} />
      <IconPillFilter iconName={"+"} itemName={"+ More"} type={"diet"} chosenRestrictions={chosenRestrictions}
                              setChosenRestrictions={setChosenRestrictions} 
                              chosenDiets={chosenDiets}
                              setChosenDiets={setChosenDiets} />
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
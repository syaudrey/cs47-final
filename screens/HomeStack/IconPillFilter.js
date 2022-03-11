import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Button } from 'react-native-elements';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
  parseIconFromClassName,
} from 'react-native-fontawesome';

const IconPillFilter = ({ itemName, iconName, chosenRestrictions, setChosenRestrictions, chosenDiets, setChosenDiets, type }) => {
  const [pressed, setPressed] = React.useState(false);
  const parsedIcon = parseIconFromClassName('fa-solid fa-leaf');
  // console.log("in icon pill")
  // console.log(chosenRestrictions)
  useEffect (() => {
    if (type == "diet") {
      if (chosenDiets.includes(itemName)) {
        setPressed(true);
      } 
    } else if (type == "restriction") {
      if (chosenRestrictions.includes(itemName)) {
        setPressed(true);
      } 
    }
  }, []); 

  const handlePress = () => {
    // console.log("before:")
    // console.log(chosenRestrictions)
    // console.log(chosenDiets)
    if (!pressed) {
      if (type == "restriction" && !chosenRestrictions.includes(itemName) && itemName != "+ More") {
        // setChosenRestrictions(chosenRestrictions.push(itemName))
        let updated = [...[itemName], ...chosenRestrictions]
        // console.log(updated)
        setChosenRestrictions(updated)
      } else if (type == "diet" && !chosenDiets.includes(itemName) && itemName != "+ More") {
        let updated = [...[itemName], ...chosenDiets]
        // console.log("diet:")
        // console.log(updated)
        setChosenDiets(updated)
      }
    } else {
      // console.log("remove!!!!!!!!!!!!!!!!!!!")
      if (type == "restriction" && chosenRestrictions.includes(itemName) && itemName != "+ More") {
        chosenRestrictions.splice(chosenRestrictions.indexOf(itemName), 1)
        // console.log(chosenRestrictions)
        setChosenRestrictions(chosenRestrictions)
      } else if (type == "diet" && chosenDiets.includes(itemName) && itemName != "+ More") {
        chosenDiets.splice(chosenDiets.indexOf(itemName), 1)
        // console.log(chosenDiets)
        setChosenDiets(chosenDiets)
      }
    }
    setPressed(!pressed)
    // console.log("after:")
    // console.log(chosenRestrictions)
    // console.log(chosenDiets)
  }

  // console.log("outside:")
  // console.log(chosenRestrictions)
  // console.log(chosenDiets)
  return (
    <View style={styles.container}>
      <Button 
        title={itemName}
        // buttonStyle={pressed ? styles.buttonPressed : styles.button} 
        buttonStyle={
          type == "diet" ? chosenDiets.includes(itemName) ? styles.buttonPressed : styles.button : 
          type == "restriction" ? chosenRestrictions.includes(itemName) ? styles.buttonPressed : styles.button :
          null
        } 
        // titleStyle={pressed ? styles.textPressed : styles.text} 
        titleStyle={
          type == "diet" ? chosenDiets.includes(itemName) ? styles.textPressed : styles.text : 
          type == "restriction" ? chosenRestrictions.includes(itemName) ? styles.textPressed : styles.text :
          null
        } 
        containerStyle={styles.buttonContainer} 
        onPress={handlePress}
      />
    </View>
  );
};

export default IconPillFilter;

const styles = StyleSheet.create({
  container: {
  },

  button: {
    backgroundColor: 'white',
    borderColor: 'grey',  
    borderWidth: 2, 
    borderRadius: 50,  
  },
  buttonPressed: {
    backgroundColor: '#f8b432',
    borderColor: '#f8b432',  
    borderWidth: 2, 
    borderRadius: 50,  
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: 'grey',
    padding: '2%',
  },
  textPressed: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    padding: '2%',
  },
  buttonContainer: {
    padding: '4%',
  },

});
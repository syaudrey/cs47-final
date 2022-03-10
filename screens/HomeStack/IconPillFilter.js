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

  const handlePress = () => {
    console.log("before:")
    console.log(chosenRestrictions)
    console.log(chosenDiets)
    if (!pressed) {
      if (type == "restriction" && !chosenRestrictions.includes(itemName) && itemName != "+ More") {
        setChosenRestrictions(chosenRestrictions.push(itemName))
      } else if (type == "diet" && !chosenDiets.includes(itemName) && itemName != "+ More") {
        setChosenDiets(chosenDiets.push(itemName))
      }
    } else {
      if (type == "restriction" && chosenRestrictions.includes(itemName) && itemName != "+ More") {
        setChosenRestrictions(chosenRestrictions.splice(chosenRestrictions.indexOf(itemName), 1))
      } else if (type == "diet" && chosenDiets.includes(itemName) && itemName != "+ More") {
        setChosenDiets(chosenDiets.splice(chosenDiets.indexOf(itemName), 1))
      }
    }
    setPressed(!pressed)
    console.log("after:")
    console.log(chosenRestrictions)
    console.log(chosenDiets)
  }

  return (
    <View style={styles.container}>
      <Button 
        title={itemName}
        buttonStyle={pressed ? styles.buttonPressed : styles.button} 
        titleStyle={pressed ? styles.textPressed : styles.text} 
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
    padding: '5%',
  },

});
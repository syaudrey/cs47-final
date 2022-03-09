import { StyleSheet, Text, View, Pressable, Button, Switch } from "react-native";
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import DietaryRestrictions from "../OnboardingProfileStack/DietaryRestrictions";
import SpecialDiets from "../OnboardingProfileStack/SpecialDiets";



const FilterModal = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: {backgroundColor: "#f8b432", paddingBottom: "4%",},});
    return () => navigation.getParent()?.setOptions({ tabBarStyle: {backgroundColor: "#f8b432", paddingBottom: "4%",}, });
  }, [navigation]);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
      setIsEnabled(previousState => !previousState);

  };

  return (
    <View style={styles.container}>

        <View style={styles.top}>
            <Text style={styles.subtitle}>Apply dietary profile?</Text>
            <Switch
                trackColor={{ false: "gray", true: "#f8b432" }}
                thumbColor={isEnabled ? "white" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>

        <View style={styles.body}>
            <Text style={styles.header}>Dietary Restrictions</Text>
            <DietaryRestrictions />
        </View>

        <View style={styles.body}>
            <Text style={styles.header}>Special Diets</Text>
            <SpecialDiets />
        </View>

        <View style={styles.bottom}>
        </View>

        {/* <View style={styles.bottom}>
            <Button 
            title="APPLY FILTERS" 
            buttonStyle={styles.button} 
            titleStyle={styles.buttonTitle} 
            containerStyle={styles.buttonContainer} 
            onPress={toggleModal}
            />
        </View> */}

      
    </View>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    flex: 1,
    // top: 0,
    // height: "70%",
    alignItems: "stretch",
    justifyContent: "center",
    // backgroundColor: 'white',
    paddingTop: "12%",
    paddingHorizontal: '12%',
    // flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#F1EBEA",
    borderRadius: 36,
    // marginLeft: 0,
    // marginTop: "24%",
    marginBottom: "24%",
  },
  xOut: {
    fontSize: 24,
    marginLeft: "4%",
    marginTop: "4%",

  },

  button: {
    backgroundColor: '#f8b432',
    borderRadius: 10,    
    height: 50,   
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: 'bold', 
  },
  buttonContainer: {
    width: '100%',
    marginHorizontal: 50,
    marginVertical: 10,
  },




  top: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "flex",
    flexDirection: "row",
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    paddingBottom: 12,
  },
  subtitle: {
    fontSize: 20,
    marginRight: 10,
  },

  body: {
    flex: 4,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    // borderWidth: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 16,
  },

  bottom: {
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  bottomText: {
    fontSize: 16,
    fontWeight: '300',
    fontStyle: 'italic',
    color: 'grey',
    textAlign: 'center',
  }

});
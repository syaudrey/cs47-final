import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import DietaryRestrictions from "./DietaryRestrictions";
import SpecialDiets from "./SpecialDiets";

const ProfileScreen = ({ firstName }) => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: {backgroundColor: "#f8b432", paddingBottom: "4%",},});
    return () => navigation.getParent()?.setOptions({ tabBarStyle: {backgroundColor: "#f8b432", paddingBottom: "4%",}, });
  }, [navigation]);

  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <Text style={styles.title}>Hey, {firstName}</Text>
        <Text style={styles.subtitle}>Complete your dietary profile!</Text>
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
        <Text style={styles.bottomText}>Your choices help us filter and recommend food that works for you.</Text>
      </View>

      
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: 'white',
    paddingTop: 80,
    paddingHorizontal: '12%',
  },

  top: {
    flex: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    paddingBottom: 12,
  },
  subtitle: {
    fontSize: 20,
  },

  body: {
    flex: 4,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 16,
  },

  bottom: {
    flex: 1,
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
import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DietaryRestrictions from "./DietaryRestrictions";
import SpecialDiets from "./SpecialDiets";

const ProfileScreen = ({ firstName }) => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: {backgroundColor: "#f8b432", paddingBottom: "4%",},});
  });

  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <View style={styles.settings}>
          <Text style={styles.title}>Hey, {firstName}</Text>
          <Pressable onPress={() => navigation.navigate('SettingsScreen')}>
            <Ionicons name='settings-outline' size={30} color='black' />
          </Pressable>
        </View>
        
        <Text style={styles.subtitle}>Get noms to work just for you!</Text>
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
        <Text style={styles.bottomText}>Come back and update your choices at any time! </Text>
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
    paddingTop: '20%',
    paddingBottom: '8%',
  },

  top: {
    flex: 2.5,
    alignItems: "flex-start",
    paddingLeft: '10%',
    paddingRight: '8%',
  },
  settings: {
    flexDirection: 'row',
    alignSelf: "stretch",
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    paddingBottom: '4%',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '300',
    paddingBottom: '2%',
  },

  body: {
    flex: 5,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: '5%',
    paddingLeft: '10%',
    paddingRight: '10%',
  },

  bottom: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  bottomText: {
    fontSize: 18,
    fontWeight: '300',
    fontStyle: 'italic',
    color: 'grey',
    textAlign: 'center',
  },
  

});
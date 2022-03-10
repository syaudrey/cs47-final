import { StyleSheet, Text, View, Pressable, ScrollView, Switch } from "react-native";
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import { Slider } from '@miblanchard/react-native-slider';
import Ionicons from 'react-native-vector-icons/Ionicons';

const QuestionsScreen = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.top}>
          <Text style={styles.title}>Quiz</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>What cuisine are you craving?</Text>
          <Text style={styles.text}>OPTIONS</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>Which flavor is tempting?</Text>
          <Text style={styles.text}>OPTIONS</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>Which texture sounds good?</Text>
          <Text style={styles.text}>OPTIONS</Text>
        </View>  

        <View style={styles.bottom}> 
          <Button 
            title="Get results!" 
            buttonStyle={styles.button} 
            titleStyle={styles.buttonTitle} 
            containerStyle={styles.buttonContainer} 
            onPress={() => {navigation.navigate("ResultsScreen")}}
          />
        </View>

      </ScrollView>
    </View>
  );
};

export default QuestionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: 'white',
    paddingTop: '20%',
  },

  top: {
    alignItems: "center",
    paddingBottom: '2%',
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    paddingBottom: '2%',
  },

  section: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingBottom: '6%',
    paddingLeft: '10%',
    paddingRight: '10%',
  },

  text: {
    fontSize: 20,
    fontWeight: '300',
    paddingBottom: '6%',
  },
 
  bottom: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: '#F1EBEA',
    borderRadius: 10,    
    height: 50,   
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: '800', 
    color: 'black',
  },
  buttonContainer: {
    width: '80%',
    marginBottom: '6%',
  },
  

});
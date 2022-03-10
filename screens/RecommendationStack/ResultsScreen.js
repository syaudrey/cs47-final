import { StyleSheet, Text, View, Pressable, ScrollView, Switch } from "react-native";
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import { Slider } from '@miblanchard/react-native-slider';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ResultsScreen = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.top}>
          <Text style={styles.title}>Results</Text>
          <Text style={styles.text}>Based on your answers... give this a try!</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>DISH NAME</Text>
          <Text style={styles.text}>PRICE</Text>
          <Text style={styles.text}>PHOTO</Text>
          <Text style={styles.text}>meets your restrictions & diets</Text>
          <Text style={styles.text}>Contains: LIST</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>from...</Text>
          <Text style={styles.text}>RESTO NAME</Text>
          <Text style={styles.text}>Cuisine</Text>
          <Text style={styles.text}>Distance</Text>
          <Text style={styles.text}>PHOTO</Text>
        </View>

        <View style={styles.bottom}> 
          <Button 
            title="See full menu" 
            buttonStyle={styles.button} 
            titleStyle={styles.buttonTitle} 
            containerStyle={styles.buttonContainer} 
            onPress={() => {navigation.navigate("ResultsScreen")}}
          />
          <Button 
            title="More information" 
            buttonStyle={styles.button} 
            titleStyle={styles.buttonTitle} 
            containerStyle={styles.buttonContainer} 
            onPress={() => {navigation.navigate("ResultsScreen")}}
          />
          <Text style={styles.text}>Try again</Text>
        </View>

      </ScrollView>
    </View>
  );
};

export default ResultsScreen;

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
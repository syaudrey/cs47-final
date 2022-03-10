import { StyleSheet, Text, View, Pressable, ScrollView, Switch, Image } from "react-native";
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
          <Pressable onPress={() => navigation.navigate('QuestionsScreen')}>
            <Ionicons name='arrow-back-outline' size={30} color='black' />
          </Pressable>
          <Text style={styles.title}>Results</Text>
          <Ionicons name='arrow-forward-outline' size={30} color='white' />
        </View>
        <Text style={styles.subtitle}>Try this out for your next noms!</Text>

        <View style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.header}>BBQ Mix</Text>
            <Text style={styles.subHeader}>$25.99</Text>
          </View>
          <Image source={require("../.././assets/bbq_mix.jpg")} style={styles.image}/>
          <View style={styles.horizontal}>
            <Ionicons name='checkmark-circle' size={20} color='green' />
            <Text style={styles.info}>meets your restrictions & diets</Text>
          </View>
          <Text style={styles.subInfo}>Contains: beef, short ribs, cabbage, rice</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.italicsText}>from...</Text>
          <Text style={styles.header}>L&L Hawaiian BBQ</Text>
          <View style={styles.row}>
            <Text style={styles.text}>Hawaiian, American</Text>
            <Text style={styles.text}>2 miles away</Text>
          </View>
          <Image source={require("../.././assets/llbbq.jpg")} style={styles.image}/>
        </View>

        <View style={styles.bottom}> 
          <Button 
            title="See full menu" 
            buttonStyle={styles.buttonMain} 
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
          <Pressable onPress={() => navigation.navigate('PreferencesScreen')}>
            <Text style={styles.action}>Try again!</Text>
          </Pressable>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    paddingBottom: '2%',
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '300',
    fontStyle: 'italic',
    paddingBottom: '8%',
    textAlign: "center",
  },

  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: '4%',
  },
  header: {
    fontSize: 20,
    fontWeight: '800',
  },
  subHeader: {
    fontSize: 18,
    fontWeight: '300',
  },
  image: {
    height: 180,
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },

  horizontal: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: '4%',
  },
  info: {
    fontSize: 16,
    fontWeight: '800',
    color: 'green',
    paddingLeft: '2%',
  },
  subInfo: {
    fontSize: 16,
    fontWeight: '300',
    paddingVertical: '3%',
  },

  italicsText: {
    fontSize: 16,
    fontWeight: '300',
    fontStyle: 'italic',
    paddingBottom: '3%',
  },
  text: {
    fontSize: 16,
    fontWeight: '300',
    paddingTop: '2%',
  },
  

  section: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingBottom: '6%',
    paddingLeft: '10%',
    paddingRight: '10%',
  },
 
  bottom: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonMain: {
    backgroundColor: '#F8B432',
    borderRadius: 10,    
    height: 50,   
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
    marginTop: '4%',
  },
  action: {
    fontSize: 16,
    fontWeight: '500', 
    color: 'grey',
    textDecorationLine: 'underline',
    paddingTop: '5%',
    paddingBottom: '10%',
  }

});
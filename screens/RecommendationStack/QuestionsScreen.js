import { StyleSheet, Text, View, Pressable, ScrollView, Switch, Image } from "react-native";
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import { Slider } from '@miblanchard/react-native-slider';
import Ionicons from 'react-native-vector-icons/Ionicons';

const QuestionsScreen = () => {
  const navigation = useNavigation();
  const [cuisine, setCuisine] = React.useState("");
  const [flavor, setFlavor] = React.useState("");
  const [texture, setTexture] = React.useState("");

  const [american, setAmerican] = React.useState(false);
  const [umami, setUmami] = React.useState(false);
  const [chewy, setChewy] = React.useState(false);
  
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.top}>
          <Pressable onPress={() => navigation.navigate('PreferencesScreen')}>
            <Ionicons name='arrow-back-outline' size={30} color='black' />
          </Pressable>
          <Text style={styles.title}>Quiz</Text>
          <Ionicons name='arrow-forward-outline' size={30} color='white' />
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>What cuisine are you craving?</Text>
          <View style={styles.row}>
            <View style={styles.option}>
              <Pressable onPress={() => setAmerican(!american)}>
                <Image source={require("../.././assets/american.jpg")} style={american ? styles.optionImage : styles.selectImage}/>
              </Pressable>
              <Text style={styles.optionText}>American</Text>
            </View>
            <View style={styles.option}>
              <Image source={require("../.././assets/japanese.jpg")} style={styles.optionImage}/>
              <Text style={styles.optionText}>Japanese</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.option}>
              <Image source={require("../.././assets/chinese.jpg")} style={styles.optionImage}/>
              <Text style={styles.optionText}>Chinese</Text>
            </View>
            <View style={styles.option}>
              <Image source={require("../.././assets/italian.jpg")} style={styles.optionImage}/>
              <Text style={styles.optionText}>Italian</Text>
            </View>
          </View>
          <View style={styles.none}>
            <Button 
              title="none of these" 
              buttonStyle={styles.optionButton} 
              titleStyle={styles.optionText} 
              containerStyle={styles.optionContainer} 
              onPress={() => {}}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>Which flavor is tempting?</Text>
          <View style={styles.row}>
            <View style={styles.option}>
              <Image source={require("../.././assets/sweet.jpg")} style={styles.optionImage}/>
              <Text style={styles.optionText}>Sweet</Text>
            </View>
            <View style={styles.option}>
              <Image source={require("../.././assets/salty.jpg")} style={styles.optionImage}/>
              <Text style={styles.optionText}>Salty</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.option}>
              <Pressable onPress={() => setUmami(!umami)}>
                <Image source={require("../.././assets/umami.jpg")} style={umami ? styles.optionImage : styles.selectImage}/>
              </Pressable>
              <Text style={styles.optionText}>Umami</Text>
            </View>
            <View style={styles.option}>
              <Image source={require("../.././assets/spicy.jpg")} style={styles.optionImage}/>
              <Text style={styles.optionText}>Spicy</Text>
            </View>
          </View>
          <View style={styles.none}>
            <Button 
              title="none of these" 
              buttonStyle={styles.optionButton} 
              titleStyle={styles.optionText} 
              containerStyle={styles.optionContainer} 
              onPress={() => {}}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>Which texture sounds good?</Text>
          <View style={styles.row}>
            <View style={styles.option}>
              <Image source={require("../.././assets/crunchy.jpg")} style={styles.optionImage}/>
              <Text style={styles.optionText}>Crunchy</Text>
            </View>
            <View style={styles.option}>
              <Image source={require("../.././assets/smooth.jpg")} style={styles.optionImage}/>
              <Text style={styles.optionText}>Smooth</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.option}>
              <Image source={require("../.././assets/creamy.jpg")} style={styles.optionImage}/>
              <Text style={styles.optionText}>Creamy</Text>
            </View>
            <View style={styles.option}>
              <Pressable onPress={() => setChewy(!chewy)}>
                <Image source={require("../.././assets/chewy.jpg")} style={chewy ? styles.optionImage : styles.selectImage}/>
              </Pressable>
              <Text style={styles.optionText}>Chewy</Text>
            </View>
          </View>
          <View style={styles.none}>
            <Button 
              title="none of these" 
              buttonStyle={styles.optionButton} 
              titleStyle={styles.optionText} 
              containerStyle={styles.optionContainer} 
              onPress={() => {}}
            />
          </View>
        </View>  

        <View style={styles.bottom}> 
          <Button 
            title="GET RESULTS!" 
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
    paddingBottom: '2%',
  },

  section: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: '3%',
  },
  option: {
    width: '46%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  none: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '2%',
    paddingBottom: '5%',
  },
  optionText: {
    fontSize: 18,
    fontWeight: '300',
    paddingTop: '5%',
    paddingBottom: '15%',
    color: 'black',
  },
  optionImage: {
    height: 130,
    width: 130,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  selectImage: {
    height: 130,
    width: 130,
    resizeMode: 'cover',
    borderRadius: 10,
    borderColor: '#F8B432',
    borderWidth: 6,
  },
  optionButton: {
    backgroundColor: '#F1EBEA',
    borderRadius: 10,    
    height: 50,   
  },
  optionContainer: {
    width: '100%',
  },

  text: {
    fontSize: 20,
    fontWeight: '800',
    paddingVertical: '6%',
  },
 
  bottom: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: '#F8B432',
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
    paddingTop: '10%'
  },
  

});
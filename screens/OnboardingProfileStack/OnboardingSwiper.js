import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Onboarding from 'react-native-onboarding-swiper';
import { Image, useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Done = () => (
    <Button title={'Get Started'} buttonStyle={styles.button} titleStyle={styles.buttonTitle} containerStyle={styles.buttonContainer} />
  );

const OnboardingSwiper = ({ setFinishedOnboarding }) => {
  const navigation = useNavigation();
  const [CTA, setCTA] = useState(false);

  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" }});
    return () => navigation.getParent()?.setOptions({ tabBarStyle: undefined });
  }, [navigation]);

  return (
    <Onboarding
      titleStyles={{ fontWeight: 'bold' }}
      subTitleStyles={{ paddingHorizontal: 20 }}
      bottomBarHighlight={false}

      onSkip={() => {
        navigation.navigate("RegisterScreen");
      }}
      pageIndexCallback={(pageIndex) => {(pageIndex == 2) ? setCTA(true) : setCTA(false)}}
      showPagination={!CTA}

      pages={[
        {
          backgroundColor: '#f8b432',
          image: <Ionicons name='map' size={100} color='black' />,
          title: 'Restaurant Walkthroughs',
          subtitle: 'See a “step by step” walkthrough of the dining experience at restaurants.',
        },
        {
          backgroundColor: '#f8b432',
          image: <Ionicons name='book' size={100} color='black' />,
          title: 'Filter & Sort Menus',
          subtitle: 'Easily filter out dishes based on your personal dietary restrictions.',
        },
        {
          backgroundColor: '#f8b432',
          image: <Ionicons name='restaurant' size={100} color='black' />,
          title: 'Get Personalized Noms',
          subtitle: ( 
            <View style={styles.container}>
              <Text style={styles.subtitle}>Get recommendations tailored to your taste, budget, and restrictions!</Text>
              <Button 
                title={'Get Started'} 
                onPress={() => {navigation.navigate("RegisterScreen")}} 
                buttonStyle={styles.button} titleStyle={styles.buttonTitle} 
                containerStyle={styles.buttonContainer} 
              />
            </View>
          ),
        },
      ]}
    />
  );
}

export default OnboardingSwiper;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: '10%',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#513b11',
  },

  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,  
  },
  buttonTitle: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  buttonContainer: {
    justifyContent: "flex-end",
    position: 'absolute',
    top: '600%',
    width: '100%',  
  }
});
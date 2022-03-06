import { StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "./ProfileScreen";
import OnboardingSwiper from "./OnboardingSwiper";
import RegisterScreen from "./RegisterScreen";
import LocationScreen from "./LocationScreen";

const Stack = createStackNavigator();

const OnboardingProfileStack = () => {
  const [finishedOnboarding, setFinishedOnboarding] = useState(false);
  const [firstName, setFirstName] = useState("");

  // Onboarding Screens
  if (!finishedOnboarding) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="OnboardingSwiper" component={OnboardingSwiper} />
        <Stack.Screen name="RegisterScreen">
          {(props) => (
            <RegisterScreen
              {...props}
              setFirstName={setFirstName}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="LocationScreen">
          {(props) => (
            <LocationScreen
              {...props}
              setFinishedOnboarding={setFinishedOnboarding}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    );
  }

  // Profile Screens
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="ProfileScreen">
        {(props) => (
          <ProfileScreen
            {...props}
            firstName={firstName}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default OnboardingProfileStack;

const styles = StyleSheet.create({});
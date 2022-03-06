import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeStack from "./screens/HomeStack";
import RecommendationStack from "./screens/RecommendationStack";
import OnboardingProfileStack from "./screens/OnboardingProfileStack";

import { useEffect } from "react";
import { useNavigation } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'HomeStack') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'RecommendationStack') {
              iconName = focused ? 'restaurant' : 'restaurant-outline';
            } else if (route.name === 'OnboardingProfileStack') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
          tabBarActiveBackgroundColor: '#f8b432',
          tabBarInactiveBackgroundColor: '#f8b432',
          tabBarStyle: {backgroundColor: "#f8b432", paddingBottom: "4%",},
          tabBarShowLabel: false,
          headerShown: false,
        })}
        initialRouteName="OnboardingProfileStack"
      >
        
        <Tab.Screen name="HomeStack" component={HomeStack} />
        <Tab.Screen name="RecommendationStack" component={RecommendationStack} />
        <Tab.Screen name="OnboardingProfileStack" component={OnboardingProfileStack} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8b432",
    alignItems: "center",
    justifyContent: "center"
  }
});
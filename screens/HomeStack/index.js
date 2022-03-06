import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Home";
import RestaurantPage from "./RestaurantPage";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="RestaurantPage" component={RestaurantPage} options={{
        headerStyle: {
          backgroundColor: '#f8b432',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 28,
        },
        headerBackTitleVisible: false,
        headerTintColor: 'black',
        headerTitleAlign: 'left',
      }} />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});

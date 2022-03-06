import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RecommendationStack = () => {
  return (
    <View style={styles.container}>
      <Text>RecommendationStack</Text>
    </View>
  );
};

export default RecommendationStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

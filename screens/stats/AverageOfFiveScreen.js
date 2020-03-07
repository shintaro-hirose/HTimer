import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AverageOfFiveScreen() {
  return (
    <View style={styles.container}>
      <Text>AverageOfFiveScreen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

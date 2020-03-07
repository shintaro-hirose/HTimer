import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Timer() {
  return (
    <View style={styles.container}>
      <Text>Timer!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

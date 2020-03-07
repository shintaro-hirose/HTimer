import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SingleTimeScreen() {
  return (
    <View style={styles.container}>
      <Text>SingleTimeScreen!</Text>
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

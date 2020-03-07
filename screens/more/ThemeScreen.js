import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ThemeScreen() {
  return (
    <View style={styles.container}>
      <Text>ThemeScreen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

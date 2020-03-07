import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LicensesScreen() {
  return (
    <View style={styles.container}>
      <Text>LicensesScreen!</Text>
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

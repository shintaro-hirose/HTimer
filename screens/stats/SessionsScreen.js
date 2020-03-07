import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SessionsScreen() {
  return (
    <View style={styles.container}>
      <Text>SessionsScreen!</Text>
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

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function SessionScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>SessionScreen!</Text>
      <Button
        title="Sessions"
        onPress={() => navigation.navigate('SessionsScreen')}
      />
      <Button
        title="Single time"
        onPress={() => navigation.navigate('SingleTimeScreen')}
      />
      <Button
        title="Session Details"
        onPress={() => navigation.navigate('SessionDetailsScreen')}
      />
      <Button
        title="Average of 5"
        onPress={() => navigation.navigate('AverageOfFiveScreen')}
      />
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

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function MoreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>MoreScreen!</Text>
      <Button
        title="Theme Settings"
        onPress={() => navigation.navigate('ThemeScreen')}
      />
      <Button
        title="Timer Settings"
        onPress={() => navigation.navigate('TimerSettingsScreen')}
      />
      <Button
        title="Licenses"
        onPress={() => navigation.navigate('LicensesScreen')}
      />
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

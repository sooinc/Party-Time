import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Main extends React.Component() {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up Main.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Main;

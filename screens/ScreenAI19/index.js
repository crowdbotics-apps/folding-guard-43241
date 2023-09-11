import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button, Image } from 'react-native';

const ScreenComponent = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.confirmationMessage}>
          Your configuration has been saved as a draft.
        </Text>
      </View>
      <View style={styles.section}>
        <Button title="Continue Editing" onPress={() => {}} />
        <Button title="Save and View Draft" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  confirmationMessage: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  image: {
    width: 100,
    height: 100
  }
});
export default ScreenComponent;
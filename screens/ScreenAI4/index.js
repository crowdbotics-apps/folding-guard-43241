import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, Image, View } from 'react-native';

const TermsAndConditionsScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image style={styles.logo} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text style={styles.title}>Terms and Conditions</Text>
        </View>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333'
  }
});
export default TermsAndConditionsScreen;
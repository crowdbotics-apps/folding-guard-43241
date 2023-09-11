import React from 'react';
import { SafeAreaView, StyleSheet, Image, TextInput, Button } from 'react-native';

const ProfileScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Button title="Profile Picture">
        <Image style={styles.profileImage} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
      </Button>
      <TextInput style={styles.input} placeholder="Full Name" />
      <TextInput style={styles.input} placeholder="Company Name" />
      <TextInput style={styles.input} placeholder="Company Phone Number" />
      <TextInput style={styles.input} placeholder="Email Address" defaultValue="email@example.com" />
      <TextInput style={styles.input} placeholder="Street Address" />
      <TextInput style={styles.input} placeholder="City" />
      <TextInput style={styles.input} placeholder="Zip Code" />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 16
  }
});
export default ProfileScreen;
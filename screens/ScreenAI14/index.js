import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Button, Text, Clipboard, StyleSheet, Image } from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const appShareLink = 'https://tinyurl.com/42evm3m3';

  const copyToClipboard = () => {
    Clipboard.setString(appShareLink);
  };

  const sendEmail = () => {// Code to send email
  };

  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Enter your email" keyboardType="email-address" />
      <View style={styles.linkContainer}>
        <Text style={styles.link}>{appShareLink}</Text>
        <Button title="Copy" onPress={copyToClipboard} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Send" onPress={sendEmail} />
        <Button title="Cancel" onPress={() => setEmail('')} />
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
  image: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
    marginBottom: 20
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginBottom: 20
  },
  link: {
    flex: 1,
    marginRight: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%'
  }
});
export default App;
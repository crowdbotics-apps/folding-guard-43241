import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Button, CheckBox, Text, Linking, Image, StyleSheet } from 'react-native';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSelected, setSelection] = useState(false);
  return <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TextInput style={styles.input} onChangeText={setUsername} value={username} placeholder="Username" />
      <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder="Password" secureTextEntry />
      <View style={styles.checkboxContainer}>
        <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox} />
        <Text style={styles.label}>I agree to the </Text>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI4");
      }}><Text style={styles.link} onPress={() => Linking.openURL('http://example.com')}>Terms and Conditions</Text></Pressable>
        <Text style={styles.label}> and </Text>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI5");
      }}><Text style={styles.link} onPress={() => Linking.openURL('http://example.com')}>Privacy Policy</Text></Pressable>
      </View>
      <Button title="Sign Up" onPress={() => {}} />
      <Button title="Forgot Password?" onPress={() => {}} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  checkbox: {
    alignSelf: 'center'
  },
  label: {
    margin: 8
  },
  link: {
    color: 'blue'
  }
});
export default SignUpScreen;
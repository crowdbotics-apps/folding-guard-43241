import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Button, Text, StyleSheet } from 'react-native';

const FeedbackScreen = () => {
  const [feedback, setFeedback] = useState('');
  const senderEmail = 'sender@example.com';

  const sendFeedback = () => {
    alert(`Feedback: ${feedback}`);
    setFeedback('');
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.emailText}>{senderEmail}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Write your feedback here..." value={feedback} onChangeText={setFeedback} multiline />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Send" onPress={sendFeedback} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  emailText: {
    fontSize: 18,
    color: '#333'
  },
  inputContainer: {
    flex: 1,
    padding: 20
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: '#333'
  },
  buttonContainer: {
    padding: 20
  }
});
export default FeedbackScreen;
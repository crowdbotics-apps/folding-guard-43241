import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';

const PrivacyPolicyScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image style={styles.logo} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text style={styles.title}>Privacy Policy</Text>
        </View>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          eu lorem et ultricies. In porta lorem at dui semper, nec ultrices
          arcu consequat. Morbi porta, neque sit amet varius dignissim, ex mi
          auctor magna, eget maximus purus libero in massa. 
        </Text>
        <Text style={styles.text}>
          Aenean ultrices bibendum nulla, eget varius diam fermentum id. Duis
          eget consequat velit. Suspendisse cursus malesuada facilisis. Nulla
          vestibulum pretium turpis, eget duis. 
        </Text>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff'
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
    marginBottom: 10,
    lineHeight: 24
  }
});
export default PrivacyPolicyScreen;
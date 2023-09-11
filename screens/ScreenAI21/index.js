import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, ScrollView } from 'react-native';

const ScreenComponent = () => {
  const customerInfo = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890'
  };
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  return <SafeAreaView style={_styles.AXsHxIJJ}>
      <ScrollView style={_styles.jmKcLtPC}>
        <View style={_styles.CvpEWMHp}>
          <Text style={_styles.YsGjWpjQ}>Customer Information</Text>
          <Text>Name: {customerInfo.name}</Text>
          <Text>Email: {customerInfo.email}</Text>
          <Text>Phone: {customerInfo.phone}</Text>
        </View>

        <View style={_styles.zBHiMOpv}>
          <Text style={_styles.xrnenxlr}>Created Space</Text>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.LIuNSpxE} />
        </View>

        <View style={_styles.QKiKNxWV}>
          <Text style={_styles.EPdWWUff}>Selected Items</Text>
          {items.map((item, index) => <Text key={index}>{item}</Text>)}
        </View>

        <View style={_styles.AdQWYviO}>
          <Button title="Submit" onPress={() => {}} />
          <Button title="Cancel" onPress={() => {}} color="red" />
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  AXsHxIJJ: {
    flex: 1,
    backgroundColor: "#fff"
  },
  jmKcLtPC: {
    padding: 20
  },
  CvpEWMHp: {
    marginBottom: 20
  },
  YsGjWpjQ: {
    fontSize: 20,
    fontWeight: "bold"
  },
  zBHiMOpv: {
    marginBottom: 20
  },
  xrnenxlr: {
    fontSize: 20,
    fontWeight: "bold"
  },
  LIuNSpxE: {
    width: "100%",
    height: 200
  },
  QKiKNxWV: {
    marginBottom: 20
  },
  EPdWWUff: {
    fontSize: 20,
    fontWeight: "bold"
  },
  AdQWYviO: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
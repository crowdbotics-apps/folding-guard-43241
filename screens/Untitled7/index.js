import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled7 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={() => {
        navigation.navigate("ScreenAI18");
      }}><Text style={styles.vXjtpclz}>{"View it in my space"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI8");
      }}><Text style={styles.zmPXcVzA}>{"My Drafts "}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI9");
      }}><Text style={styles.AZThufoL}>{"My Quotes"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI17");
      }}><Text style={styles.CEDCamyZ}>{"Settings"}</Text></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  vXjtpclz: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  zmPXcVzA: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  AZThufoL: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  CEDCamyZ: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled7;
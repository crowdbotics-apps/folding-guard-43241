import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
const dummyData = [{
  id: '1',
  status: 'Draft',
  date: '2021-09-01 10:00:00'
}, {
  id: '2',
  status: 'Draft',
  date: '2021-09-02 11:00:00'
}, {
  id: '3',
  status: 'Draft',
  date: '2021-09-03 12:00:00'
}, {
  id: '4',
  status: 'Draft',
  date: '2021-09-04 13:00:00'
}, {
  id: '5',
  status: 'Draft',
  date: '2021-09-05 14:00:00'
}];

const QuoteScreen = () => {
  const renderItem = ({
    item
  }) => <TouchableOpacity style={styles.itemContainer}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <View style={styles.textContainer}>
        <Text style={styles.quoteText}>Quote ID: {item.id}</Text>
        <Text style={styles.statusText}>Status: {item.status}</Text>
        <Text style={styles.dateText}>Requested: {item.date}</Text>
      </View>
    </TouchableOpacity>;

  return <SafeAreaView style={styles.container}>
      <FlatList data={dummyData} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 10
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  textContainer: {
    marginLeft: 10
  },
  quoteText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  statusText: {
    fontSize: 14,
    color: 'gray'
  },
  dateText: {
    fontSize: 14,
    color: 'gray'
  }
});
export default QuoteScreen;
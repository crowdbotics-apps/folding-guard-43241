import React from 'react';
import { SafeAreaView, View, Text, Image, Button, FlatList, StyleSheet } from 'react-native';
const draftsData = [{
  id: '1',
  name: 'Draft 1',
  date: '2021-09-01 10:00',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '2',
  name: 'Draft 2',
  date: '2021-09-02 11:00',
  image: 'https://tinyurl.com/42evm3m3'
} // add more drafts here
];

const DraftsScreen = () => {
  const renderItem = ({
    item
  }) => <View style={styles.item}>
      <Image source={{
      uri: item.image
    }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.date}>{item.date}</Text>
      <View style={styles.buttons}>
        <Button title="Share" onPress={() => {}} />
        <Button title="Delete Draft" onPress={() => {}} color="red" />
      </View>
    </View>;

  return <SafeAreaView style={styles.container}>
      <FlatList data={draftsData} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  date: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
export default DraftsScreen;
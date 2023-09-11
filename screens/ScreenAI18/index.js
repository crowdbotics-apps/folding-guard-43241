import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, Image, StyleSheet } from 'react-native';

const CreateMySpaceScreen = () => {
  const [products, setProducts] = useState([{
    id: 1,
    name: 'Product 1',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: 2,
    name: 'Product 2',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: 3,
    name: 'Product 3',
    image: 'https://tinyurl.com/42evm3m3'
  }]);

  const handleSaveDraft = () => {// Save draft logic here
  };

  const handleRequestQuote = () => {// Request quote logic here
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create My Space</Text>
      <View style={styles.productsContainer}>
        {products.map(product => <View key={product.id} style={styles.productCard}>
            <Image source={{
          uri: product.image
        }} style={styles.productImage} />
            <Text style={styles.productName}>{product.name}</Text>
          </View>)}
      </View>
      <Button title="Save as Draft" onPress={handleSaveDraft} />
      <Button title="Request a Quote" onPress={handleRequestQuote} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  productCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden'
  },
  productImage: {
    width: '100%',
    height: 150
  },
  productName: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default CreateMySpaceScreen;